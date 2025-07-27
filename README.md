# PostcardTrip

A modern Next.js 15 application built with shadcn/ui components and Tailwind CSS v4.

## Features

- ⚡ **Next.js 15** - Latest version with App Router and Turbopack
- 🎨 **shadcn/ui** - Beautiful and accessible UI components
- 🎯 **Tailwind CSS v4** - Latest version with improved performance
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 🔧 **TypeScript** - Full type safety
- 📊 **Google Tag Manager** - Analytics and tracking integration

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Package Manager**: npm
- **Analytics**: Google Tag Manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd postcardtrip
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Tag Manager:
   - Copy `env.example` to `.env.local`
   - Replace `GTM-XXXXXXX` with your actual GTM ID

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles with Tailwind CSS v4
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   │   └── button.tsx # Button component
│   └── gtm.tsx        # Google Tag Manager component
├── hooks/              # Custom React hooks
│   └── use-gtm.ts     # GTM event tracking hook
└── lib/               # Utility functions
    ├── utils.ts       # shadcn/ui utilities
    └── gtm.ts         # GTM configuration
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tailwind CSS v4 Features

This project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax and CSS variables for theming. The configuration includes:

- Modern CSS variable system
- Improved performance
- Better dark mode support
- Design token integration

## shadcn/ui Components

The project includes shadcn/ui components that are:

- **Accessible** - Built with accessibility in mind
- **Customizable** - Easy to customize with Tailwind CSS
- **Type-safe** - Full TypeScript support
- **Modern** - Built with modern React patterns

### Available Components

- `Button` - Various button variants and sizes

### Adding More Components

To add more shadcn/ui components, you can copy them from the [shadcn/ui website](https://ui.shadcn.com/) or use the CLI:

```bash
npx shadcn@latest add <component-name>
```

## Google Tag Manager

The project includes Google Tag Manager integration for analytics and tracking:

### Setup

1. Create a Google Tag Manager account at [tagmanager.google.com](https://tagmanager.google.com)
2. Create a new container for your website
3. Copy your GTM ID (format: GTM-XXXXXXX)
4. Create a `.env.local` file and add:
   ```
   NEXT_PUBLIC_GTM_ID=your-gtm-id-here
   ```

### Features

- **Automatic Page Tracking** - Page views are automatically tracked
- **Custom Event Tracking** - Use the `useGTM` hook to track custom events
- **Button Click Tracking** - Demo buttons track clicks with variant information
- **Type-safe** - Full TypeScript support for GTM events


## Customization

### Colors and Themes

The color scheme is defined in `src/app/globals.css` using CSS variables. You can customize:

- Primary colors
- Secondary colors
- Background colors
- Text colors
- Border colors

### Adding New Components

1. Create a new component in `src/components/ui/`
2. Follow the shadcn/ui patterns
3. Use the `cn` utility for class merging
4. Export the component and its variants

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
