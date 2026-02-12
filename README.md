# Valentine's Day Timeline Website 💕

A beautiful, romantic timeline website celebrating relationship milestones with smooth animations and elegant design.

## Features ✨

- **Romantic Timeline**: Vertical timeline showcasing relationship milestones
- **Smooth Animations**: Fade-in effects as you scroll through memories
- **Elegant Design**: Cinematic, romantic styling with glassmorphism effects
- **Music Toggle**: Optional background music with easy on/off control
- **Responsive Layout**: Works beautifully on all devices
- **Interactive Elements**:
  - Floating hearts animation
  - Parallax scrolling effects
  - Hover animations on timeline cards
  - Cursor trail effect (desktop only)
  - Easter egg on finale heart

## Customization Guide 🎨

### 1. Update Timeline Content

Edit `index.html` to personalize your milestones:

```html
<div class="timeline-date">Your Date Here</div>
<h3 class="timeline-title">Your Milestone Title</h3>
<p class="timeline-description">Your romantic description...</p>
```

### 2. Add Your Photos

Replace the placeholder images by:

1. Create an `images` folder in the same directory
2. Add your photos with these names:
   - `first-chat.jpg`
   - `first-date.jpg`
   - `first-kiss.jpg`
   - `first-trip.jpg`
   - `anniversary.jpg`
   - `holidays.jpg`

Or update the image IDs in the HTML to match your file names.

### 3. Add Background Music

1. Create a `music` folder
2. Add your romantic song as `romantic-bg.mp3`
3. Supported formats: MP3, WAV, OGG

### 4. Customize Colors

Edit CSS variables in `style.css`:

```css
:root {
  --primary-color: #ff6b9d; /* Main pink color */
  --secondary-color: #c44569; /* Darker pink */
  --accent-color: #ffa07a; /* Peachy accent */
  --dark-bg: #1a1a2e; /* Dark background */
}
```

### 5. Modify Final Message

Update the finale section in `index.html`:

```html
<h2 class="finale-title">Your Message Here</h2>
<p class="finale-message">Your romantic message...</p>
<p class="finale-signature">Your signature</p>
```

## File Structure 📁

```
valentine-timeline/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
├── images/            # Your photos (create this folder)
│   ├── first-chat.jpg
│   ├── first-date.jpg
│   └── ...
└── music/             # Background music (create this folder)
    └── romantic-bg.mp3
```

## How to Use 🚀

1. **Open the website**: Simply open `index.html` in a web browser
2. **Scroll through**: Scroll down to see each milestone appear with animations
3. **Toggle music**: Click the music button in the top-right corner
4. **Easter egg**: Click on the big heart at the end for a surprise!

## Browser Compatibility 🌐

Works best in modern browsers:

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Tips for Best Experience 💡

- Use high-quality photos (recommended: 800x600px or larger)
- Choose a soft, romantic background music
- Personalize the descriptions to make them meaningful
- Test on mobile devices to ensure responsive design works well
- Consider adding more milestones by copying existing timeline items

## Technical Features 🔧

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Intersection Observer API for scroll animations
- Canvas API for placeholder image generation
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties for easy theming
- Smooth scroll behavior
- Backdrop filter for glassmorphism effects

## License 📄

Free to use and customize for personal projects!

---

Made with ❤️ for Valentine's Day 2026
