// ===== Scroll Animation Observer =====
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    }
  });
}, observerOptions);

// Observe all timeline items, finale, and valentine question
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const finale = document.querySelector(".timeline-finale");
  const valentineQuestion = document.querySelector(".valentine-question");

  timelineItems.forEach((item) => observer.observe(item));
  if (finale) observer.observe(finale);
  if (valentineQuestion) observer.observe(valentineQuestion);
});

// ===== Music Toggle Functionality =====
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const musicText = musicToggle.querySelector(".music-text");

let isPlaying = false;
let hasAutoPlayed = false;

// Function to play music
function playMusic() {
  if (!isPlaying) {
    bgMusic
      .play()
      .then(() => {
        musicToggle.classList.add("playing");
        musicText.textContent = "Pause Music";
        isPlaying = true;
      })
      .catch((error) => {
        console.log("Audio playback failed:", error);
      });
  }
}

// Function to pause music
function pauseMusic() {
  bgMusic.pause();
  musicToggle.classList.remove("playing");
  musicText.textContent = "Play Music";
  isPlaying = false;
}

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

// Auto-play music when user scrolls
window.addEventListener("scroll", () => {
  if (!hasAutoPlayed && window.pageYOffset > 100) {
    playMusic();
    hasAutoPlayed = true;
  }
});

// ===== Smooth Scroll for Scroll Indicator =====
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const firstTimeline = document.querySelector(".timeline-item");
    if (firstTimeline) {
      firstTimeline.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

// ===== Parallax Effect on Hero =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");

  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - scrolled / window.innerHeight;
  }
});

// ===== Timeline Line Progress Animation =====
window.addEventListener("scroll", () => {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineContainer = document.querySelector(".timeline-container");

  if (timelineLine && timelineContainer) {
    const containerTop = timelineContainer.offsetTop;
    const containerHeight = timelineContainer.offsetHeight;
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;

    const progress = Math.min(
      Math.max((scrolled + windowHeight - containerTop) / containerHeight, 0),
      1,
    );

    timelineLine.style.background = `linear-gradient(180deg, 
            var(--primary-color) 0%, 
            var(--primary-color) ${progress * 100}%, 
            rgba(255, 107, 157, 0.3) ${progress * 100}%, 
            rgba(255, 107, 157, 0.3) 100%)`;
  }
});

// ===== Generate Placeholder Images =====
// This function creates beautiful gradient placeholders for the images
function generatePlaceholderImage(elementId, gradientColors) {
  const img = document.getElementById(elementId);
  if (!img) return;

  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradientColors.forEach((color, index) => {
    gradient.addColorStop(index / (gradientColors.length - 1), color);
  });

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add decorative elements
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50 + 10;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add heart shape
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const size = 80;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY + size / 4);
  ctx.bezierCurveTo(
    centerX,
    centerY,
    centerX - size / 2,
    centerY - size / 2,
    centerX,
    centerY - size / 2,
  );
  ctx.bezierCurveTo(
    centerX + size / 2,
    centerY - size / 2,
    centerX,
    centerY,
    centerX,
    centerY + size / 4,
  );
  ctx.fill();

  img.src = canvas.toDataURL();
}

// Generate all placeholder images with different color schemes
document.addEventListener("DOMContentLoaded", () => {
  generatePlaceholderImage("img1", ["#ff6b9d", "#c44569", "#a8385d"]);
  generatePlaceholderImage("img2", ["#ffa07a", "#ff6b9d", "#c44569"]);
  generatePlaceholderImage("img3", ["#c44569", "#a8385d", "#8b2f5a"]);
  generatePlaceholderImage("img4", ["#ff6b9d", "#ffa07a", "#ffb6c1"]);
  generatePlaceholderImage("img5", ["#a8385d", "#c44569", "#ff6b9d"]);
  generatePlaceholderImage("img6", ["#ffb6c1", "#ffa07a", "#ff6b9d"]);
});

// ===== Add Floating Hearts Animation =====
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-50px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.opacity = "0.6";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1";
  heart.style.transition = "all 4s ease-in-out";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.bottom = "110vh";
    heart.style.opacity = "0";
    heart.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
  }, 100);

  setTimeout(() => {
    heart.remove();
  }, 4100);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// ===== Cursor Trail Effect (Optional Enhancement) =====
let cursorTrail = [];
const trailLength = 10;

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 768) {
    // Only on desktop
    const trail = document.createElement("div");
    trail.style.position = "fixed";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
    trail.style.width = "4px";
    trail.style.height = "4px";
    trail.style.borderRadius = "50%";
    trail.style.background = "var(--primary-color)";
    trail.style.pointerEvents = "none";
    trail.style.zIndex = "9999";
    trail.style.opacity = "0.6";
    trail.style.transition = "all 0.5s ease";

    document.body.appendChild(trail);
    cursorTrail.push(trail);

    if (cursorTrail.length > trailLength) {
      const oldTrail = cursorTrail.shift();
      oldTrail.style.opacity = "0";
      setTimeout(() => oldTrail.remove(), 500);
    }

    setTimeout(() => {
      trail.style.opacity = "0";
      trail.style.transform = "scale(2)";
    }, 100);
  }
});

// ===== Easter Egg: Click on finale heart =====
const finaleHeart = document.querySelector(".finale-heart");
if (finaleHeart) {
  finaleHeart.addEventListener("click", () => {
    // Create burst of hearts
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createFloatingHeart(), i * 100);
    }

    // Add special animation
    finaleHeart.style.animation = "none";
    setTimeout(() => {
      finaleHeart.style.animation = "heartbeat 1.5s ease-in-out infinite";
    }, 10);
  });
}

// ===== Valentine's Question Interactive Buttons =====
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const responseMessage = document.getElementById("responseMessage");

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      // Massive celebration!
      for (let i = 0; i < 100; i++) {
        setTimeout(() => createFloatingHeart(), i * 30);
      }

      // Show success message
      responseMessage.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 15px;">🎉✨💖✨🎉</div>
        <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 10px;">
          YES! You Said Yes!
        </div>
        <div style="font-size: 1.1rem;">
          You've made me the happiest person alive!<br>
          Happy Valentine's Day, my love! ❤️
        </div>
      `;
      responseMessage.classList.remove("hidden");
      responseMessage.classList.add("success");

      // Hide buttons
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    });
  }

  if (noBtn) {
    let clickCount = 0;
    noBtn.addEventListener("click", () => {
      clickCount++;

      if (clickCount === 1) {
        noBtn.textContent = "Are you sure? 🥺";
        // Move button slightly
        noBtn.style.transform = "translateX(20px)";
      } else if (clickCount === 2) {
        noBtn.textContent = "Think again... 💭";
        noBtn.style.transform = "translateX(-20px)";
      } else if (clickCount === 3) {
        noBtn.textContent = "Please? 🙏";
        noBtn.style.transform = "translateY(-10px)";
      } else if (clickCount === 4) {
        noBtn.textContent = "Pretty please? 🥹";
        noBtn.style.transform = "scale(0.8)";
      } else {
        // After 5 clicks, remove No button and make Yes bigger
        noBtn.style.opacity = "0";
        setTimeout(() => {
          noBtn.style.display = "none";
          yesBtn.textContent = "Yes! 💕 (Only option 😊)";
          yesBtn.style.transform = "scale(1.3)";
        }, 300);
      }
    });
  }
});
