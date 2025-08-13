# CodeWars Challenge Guide Tracker

A beautiful, interactive web application to track your progress through coding challenges and achieve your 300-point goal on CodeWars.

## 🚀 Features

- **Progress Tracking**: Monitor your journey towards 300 points
- **Pre-selected Problems**: Track completion of 75 beginner-level problems (150 points)
- **Flexible Points System**: Choose your own problems across different difficulty levels
- **Interactive Shopping Cart**: Manage coding resources and materials
- **Beautiful UI**: Dark theme with gaming-inspired design
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🎯 Point System

### Pre-selected Problems (150 points)
- 75 beginner problems × 2 points each
- Covers fundamentals: loops, conditionals, data types, etc.

### Flexible Points (150 points)
- **Beginner (8 kyu)**: 2 points per problem
- **Easy (7 kyu)**: 8 points per problem  
- **Medium (6 kyu)**: 32 points per problem
- **Hard (5 kyu)**: 128 points per problem

## 📚 Resources

The app includes links to essential coding resources:
- CodeWars official documentation
- Algorithm practice platforms
- Community forums and discussions
- Progress tracking spreadsheets

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Backend**: Supabase (authentication & database)
- **State Management**: TanStack Query
- **Routing**: React Router
- **Icons**: Lucide React

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd codewars-challenge-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 How to Use

1. **Track Pre-selected Problems**: Use the progress tracker to mark completed beginner problems
2. **Monitor Flexible Points**: Adjust counts for different difficulty levels as you solve problems
3. **View Resources**: Access helpful links and documentation
4. **Reset Progress**: Clear all progress when starting over
5. **Shopping Cart**: Manage coding books, courses, and other learning materials

## 🎨 Design System

The app uses a cohesive design system with:
- **Primary Colors**: Purple gradient theme
- **Dark Mode**: Gaming-inspired dark interface
- **Semantic Tokens**: Consistent color and spacing system
- **Responsive Layout**: Mobile-first design approach

## 📈 Progress Features

- Real-time progress calculation
- Visual progress bars
- Completion percentages
- Point breakdowns by difficulty
- Interactive controls for updating progress

## 🛍️ Shopping Cart Features

- Add/remove coding resources
- Quantity adjustment with +/- buttons
- Like/unlike items with heart button
- Dynamic total price calculation
- Clean, intuitive interface

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Landing page hero
│   ├── PointsSystem.tsx # Points explanation
│   ├── ProgressTracker.tsx # Progress tracking
│   ├── ResourceLinks.tsx # External resources
│   └── ShoppingCart.tsx # Shopping functionality
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # App entry point
```

## 🚀 Deployment

This project is ready to deploy on any modern hosting platform:

- **Lovable**: Click "Publish" in the Lovable editor
- **Vercel**: Connect your GitHub repo to Vercel
- **Netlify**: Deploy directly from GitHub
- **Other platforms**: Build with `npm run build` and deploy the `dist` folder

## 📱 Mobile Support

Fully responsive design that works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Your deployed app URL]
- **CodeWars Profile**: [Your CodeWars profile]
- **Challenge Guide**: [Google Sheets link]
- **Documentation**: [Additional docs if any]

## 🎯 Goals & Milestones

- [ ] Complete 75 pre-selected problems (150 points)
- [ ] Earn 150 flexible points through chosen problems
- [ ] Reach 300 total points
- [ ] Achieve target CodeWars rank
- [ ] Master fundamental programming concepts

---

Built with ❤️ using React, TypeScript, and Tailwind CSS. Happy coding! 🎉