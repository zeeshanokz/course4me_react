# Courses4me - Course Booking Platform

A modern, responsive React website for finding and booking courses.

## Features

- **Homepage**: Hero section with search, categories, how it works, featured courses, statistics, and CTA
- **Course Listing**: Filterable grid of courses with search, category, level, and price filters
- **Course Detail**: Comprehensive course information with curriculum, instructor details
- **Booking**: Complete booking form with order summary

## Tech Stack

- React 18
- React Router DOM
- Vite
- Lucide React (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── CourseListing.jsx
│   ├── CourseDetail.jsx
│   └── Booking.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Pages

- `/` - Homepage
- `/courses` - Course Listing
- `/courses/:id` - Course Detail
- `/booking/:id` - Booking

## Design

- Mobile-first responsive design
- Clean, modern SaaS-style UI
- Consistent color palette (blue primary, dark secondary)
- Reusable component structure