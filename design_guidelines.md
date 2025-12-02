# PrepNOVA / MindDecode Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern SaaS dashboard aesthetic inspired by Linear, Notion, and Vercel - clean interfaces with subtle gradients and purposeful animations.

## Core Design Elements

### A. Typography
- **Primary Font**: Inter or DM Sans via Google Fonts
- **Headings**: Font weight 700, sizes from text-4xl (hero) to text-xl (section headers)
- **Body Text**: Font weight 400-500, text-base to text-lg
- **Code/Data**: Monospace font (JetBrains Mono) for question numbers and timer displays

### B. Color System
- **Light Mode**: White backgrounds, slate-900 text, indigo-500 to cyan-500 gradient accents
- **Dark Mode**: slate-900 backgrounds, slate-100 text, indigo-400 to cyan-400 gradient accents
- **Gradients**: Use bg-gradient-to-r from-indigo-500 to-cyan-500 for CTAs, headers, and accent elements
- **UI Elements**: slate-200/slate-700 for borders, slate-100/slate-800 for cards

### C. Layout System
- **Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 24 (p-4, gap-6, mb-8, py-12, etc.)
- **Container**: max-w-7xl mx-auto px-6 for main content areas
- **Grid System**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for feature cards and content sections
- **Cards**: Consistent rounded-xl with shadow-lg, hover:shadow-2xl transitions

### D. Component Library

**Navigation**
- Fixed top navbar with backdrop-blur-lg bg-white/80 dark:bg-slate-900/80
- Logo/brand name on left, navigation links centered, theme toggle (🌙/☀️) on right
- Mobile: Hamburger menu with slide-in drawer

**Buttons**
- Primary CTA: Gradient background (indigo to cyan), white text, rounded-lg, px-6 py-3
- Secondary: Border with gradient, transparent bg, hover state with subtle gradient fill
- Icon Buttons: rounded-full with p-3, subtle hover backgrounds

**Cards**
- Standard card: bg-white dark:bg-slate-800, rounded-xl, shadow-md, p-6
- Interactive cards: Add border-2 border-transparent hover:border-indigo-500 transition
- Consistent 8px rounded corners across all card elements

**Form Elements**
- Input fields: rounded-lg border-2 border-slate-300 dark:border-slate-600, px-4 py-3
- File upload zone: Dashed border, large dropzone with centered upload icon and text
- Dropdowns: Custom styled with gradient accent on selected state

**Charts (Dashboard)**
- Bar Chart: Indigo gradient bars for topic trends
- Pie Chart: Multi-color segments (indigo, cyan, purple, pink) for mood statistics
- Contained in white/dark cards with titles and legends

**Timer Display (Pomodoro)**
- Large circular progress indicator or segmented arc showing countdown
- Center: Time display in monospace font (text-5xl or larger)
- Controls below: Start/Pause (gradient button), Reset (secondary button)
- Mood dropdown positioned below timer

### E. Page-Specific Layouts

**Home Page**
- Hero Section: Full viewport height (min-h-screen), centered content
  - Main headline (text-5xl md:text-6xl font-bold) with gradient text effect
  - Subheading explaining AI prediction + mental wellness tracking
  - Large "Start Now" CTA button with gradient, linking to /predictor
  - Background: Subtle animated gradient mesh or abstract geometric patterns
- No additional sections needed - focus on impactful hero

**Predictor Page**
- File upload section at top (large dashed border dropzone)
- "Analyze" button (gradient) triggers mock loading state (spinner + "Analyzing...")
- Results section below: Card grid showing predicted topics and 3 sample questions
- Each question in its own card with question number, text, and difficulty badge

**Pomodoro Page**
- Centered layout with timer as focal point
- Timer component takes 60% of viewport width on desktop, 90% on mobile
- Mood selector (dropdown) positioned directly below timer
- Session history/stats sidebar (optional) on desktop view

**Mock Test Page**
- "Generate Mock Test" button at top
- Questions appear as numbered cards (1-5) in vertical stack
- Each card: Question text, 4 multiple choice options (radio buttons), subtle shadows
- "Submit Test" button at bottom (disabled until all answered)

**Dashboard Page**
- Two-column grid on desktop (grid-cols-1 lg:grid-cols-2)
- Left: Topic Trends bar chart card
- Right: Mood Stats pie chart card
- Stats summary cards above charts (total study time, questions practiced, avg mood)

### F. Animations
- **Page Transitions**: Framer Motion fade-in with subtle slide-up (initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }})
- **Button Hover**: scale-105 transform with transition-transform duration-200
- **Card Hover**: Lift effect with shadow increase
- **Theme Toggle**: Smooth rotation animation on icon switch
- **Loading States**: Spinner animation for file processing, skeleton screens for chart loading

### G. Responsive Behavior
- **Mobile (<768px)**: Single column layouts, stacked navigation, larger touch targets (min 44px)
- **Tablet (768-1024px)**: Two-column grids where appropriate, collapsible sidebar
- **Desktop (>1024px)**: Full multi-column layouts, persistent navigation, hover states active

## Images
No hero images required - use gradient backgrounds and abstract patterns instead. Focus on clean, data-driven UI with charts and interactive elements as visual anchors.

## Accessibility
- High contrast ratios in both themes (WCAG AA minimum)
- Focus states with visible outlines (ring-2 ring-indigo-500)
- ARIA labels for theme toggle, timer controls, and chart elements
- Keyboard navigation support for all interactive elements

## Key Principle
Create a polished, production-ready mockup that feels like a real SaaS product. Every element should be purposeful, beautifully designed, and demonstrate modern web development best practices with smooth animations and flawless responsive behavior.