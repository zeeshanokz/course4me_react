import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, MapPin, Clock, Users, Award, CheckCircle, Play, BookOpen, Calendar, ArrowLeft } from 'lucide-react'

// Sample course data (same as CourseListing)
const courses = {
  1: {
    id: 1,
    title: 'Full Stack Web Development Bootcamp',
    provider: 'Tech Academy',
    providerBio: 'Leading technology education provider with 10+ years of experience',
    price: 999,
    rating: 4.8,
    reviews: 324,
    location: 'New York, NY',
    category: 'IT & Technology',
    duration: '12 weeks',
    level: 'Beginner',
    students: 1250,
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop',
    description: 'Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more. This comprehensive bootcamp will take you from beginner to job-ready developer.',
    highlights: [
      'Build real-world projects from scratch',
      'Learn modern frameworks and libraries',
      'Get career guidance and job support',
      'Access to exclusive community and resources',
      'Certificate upon completion',
    ],
    curriculum: [
      { week: 1, title: 'HTML & CSS Fundamentals', duration: '8 hours' },
      { week: 2, title: 'JavaScript Essentials', duration: '12 hours' },
      { week: 3, title: 'DOM Manipulation', duration: '10 hours' },
      { week: 4, title: 'React Framework', duration: '16 hours' },
      { week: 5, title: 'Node.js & Express', duration: '14 hours' },
      { week: 6, title: 'Database Design', duration: '12 hours' },
      { week: 7, title: 'Authentication & Security', duration: '10 hours' },
      { week: 8, title: 'Deployment & DevOps', duration: '8 hours' },
      { week: 9, title: 'Capstone Project Part 1', duration: '16 hours' },
      { week: 10, title: 'Capstone Project Part 2', duration: '16 hours' },
      { week: 11, title: 'Interview Preparation', duration: '12 hours' },
      { week: 12, title: 'Final Project & Review', duration: '16 hours' },
    ],
    instructor: {
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer',
      bio: '15+ years in tech, former Google engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    includes: [
      '120+ hours of content',
      'Lifetime access',
      'Certificate of completion',
      'Project files & code',
      'Private community access',
    ],
  },
  2: {
    id: 2,
    title: 'Cybersecurity Professional Certification',
    provider: 'SecureTech Institute',
    providerBio: 'Industry leader in cybersecurity training',
    price: 1299,
    rating: 4.9,
    reviews: 256,
    location: 'Online',
    category: 'Security',
    duration: '8 weeks',
    level: 'Intermediate',
    students: 890,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
    description: 'Become a certified cybersecurity professional. Learn ethical hacking, penetration testing, network security, and more.',
    highlights: [
      'Hands-on labs and exercises',
      'Prepare for CompTIA Security+',
      'Learn from industry experts',
      'Real-world case studies',
      'Job placement assistance',
    ],
    curriculum: [
      { week: 1, title: 'Security Fundamentals', duration: '10 hours' },
      { week: 2, title: 'Network Security', duration: '12 hours' },
      { week: 3, title: 'Threats & Vulnerabilities', duration: '14 hours' },
      { week: 4, title: 'Identity & Access Management', duration: '10 hours' },
      { week: 5, title: 'Cryptography', duration: '12 hours' },
      { week: 6, title: 'Penetration Testing', duration: '16 hours' },
      { week: 7, title: 'Incident Response', duration: '12 hours' },
      { week: 8, title: 'Final Assessment', duration: '14 hours' },
    ],
    instructor: {
      name: 'Michael Chen',
      title: 'Cybersecurity Director',
      bio: '20+ years in security, CISSP certified',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    },
    includes: [
      '80+ hours of content',
      'Lifetime access',
      'Certification exam prep',
      'Lab environment access',
      'Career counseling',
    ],
  },
  3: {
    id: 3,
    title: 'Digital Marketing Masterclass',
    provider: 'Marketing Pro',
    providerBio: 'Award-winning digital marketing agency',
    price: 599,
    rating: 4.7,
    reviews: 189,
    location: 'Los Angeles, CA',
    category: 'Marketing',
    duration: '6 weeks',
    level: 'Beginner',
    students: 2100,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    description: 'Learn digital marketing from scratch. Cover SEO, social media marketing, content marketing, email marketing, and paid advertising.',
    highlights: [
      'Live projects with real brands',
      'Learn industry-standard tools',
      'Get certified by Google & HubSpot',
      'Build your portfolio',
      'Network with professionals',
    ],
    curriculum: [
      { week: 1, title: 'Digital Marketing Overview', duration: '6 hours' },
      { week: 2, title: 'SEO Fundamentals', duration: '10 hours' },
      { week: 3, title: 'Social Media Marketing', duration: '12 hours' },
      { week: 4, title: 'Content Marketing', duration: '10 hours' },
      { week: 5, title: 'Email Marketing', duration: '8 hours' },
      { week: 6, title: 'Paid Advertising', duration: '14 hours' },
    ],
    instructor: {
      name: 'Emily Rodriguez',
      title: 'Marketing Director',
      bio: '12+ years, managed $10M+ ad spend',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    },
    includes: [
      '60+ hours of content',
      'Lifetime access',
      'Multiple certifications',
      'Marketing tools subscription',
      'Private Slack community',
    ],
  },
  4: {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    provider: 'Design Academy',
    providerBio: 'Creative design education pioneer',
    price: 799,
    rating: 4.8,
    reviews: 412,
    location: 'San Francisco, CA',
    category: 'Design',
    duration: '10 weeks',
    level: 'Beginner',
    students: 1800,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    description: 'Master UI/UX design from user research to high-fidelity prototypes. Learn Figma, design systems, and industry best practices.',
    highlights: [
      'Design real apps and websites',
      'Master Figma & Adobe XD',
      'Build a professional portfolio',
      'Get feedback from mentors',
      'Job interview preparation',
    ],
    curriculum: [
      { week: 1, title: 'Design Thinking', duration: '8 hours' },
      { week: 2, title: 'User Research', duration: '10 hours' },
      { week: 3, title: 'Wireframing', duration: '12 hours' },
      { week: 4, title: 'Visual Design', duration: '14 hours' },
      { week: 5, title: 'Figma Mastery', duration: '16 hours' },
      { week: 6, title: 'Prototyping', duration: '12 hours' },
      { week: 7, title: 'Design Systems', duration: '10 hours' },
      { week: 8, title: 'Usability Testing', duration: '8 hours' },
      { week: 9, title: 'Portfolio Project', duration: '16 hours' },
      { week: 10, title: 'Career Prep', duration: '14 hours' },
    ],
    instructor: {
      name: 'Alex Thompson',
      title: 'Lead Product Designer',
      bio: 'Former Airbnb & Spotify designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    includes: [
      '100+ hours of content',
      'Figma license included',
      'Portfolio review',
      'Design resources pack',
      'Job referral network',
    ],
  },
}

// Default course for demo
const defaultCourse = {
  id: 1,
  title: 'Full Stack Web Development Bootcamp',
  provider: 'Tech Academy',
  providerBio: 'Leading technology education provider with 10+ years of experience',
  price: 999,
  rating: 4.8,
  reviews: 324,
  location: 'New York, NY',
  category: 'IT & Technology',
  duration: '12 weeks',
  level: 'Beginner',
  students: 1250,
  image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=500&fit=crop',
  description: 'Master full-stack web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more. This comprehensive bootcamp will take you from beginner to job-ready developer.',
  highlights: [
    'Build real-world projects from scratch',
    'Learn modern frameworks and libraries',
    'Get career guidance and job support',
    'Access to exclusive community and resources',
    'Certificate upon completion',
  ],
  curriculum: [
    { week: 1, title: 'HTML & CSS Fundamentals', duration: '8 hours' },
    { week: 2, title: 'JavaScript Essentials', duration: '12 hours' },
    { week: 3, title: 'DOM Manipulation', duration: '10 hours' },
    { week: 4, title: 'React Framework', duration: '16 hours' },
    { week: 5, title: 'Node.js & Express', duration: '14 hours' },
    { week: 6, title: 'Database Design', duration: '12 hours' },
  ],
  instructor: {
    name: 'Sarah Johnson',
    title: 'Senior Software Engineer',
    bio: '15+ years in tech, former Google engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  includes: [
    '120+ hours of content',
    'Lifetime access',
    'Certificate of completion',
    'Project files & code',
    'Private community access',
  ],
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses[id] || defaultCourse
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container relative z-10">
          <Link to="/courses" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 text-sm font-semibold transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Courses
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Course Info */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-xs font-bold mb-6 tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {course.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
                <span className="font-semibold text-white">{course.provider}</span> • {course.providerBio}
              </p>

              <div className="flex flex-wrap gap-6 mb-10 text-sm md:text-base glass-panel px-6 py-4 rounded-2xl inline-flex w-auto border-slate-700/50">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-white">{course.rating}</span>
                  <span className="text-slate-400">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{course.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="badge badge-success border-emerald-500/30 px-4 py-2">{course.level}</span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-white text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
                  <Play className="w-4 h-4 text-blue-400" />
                  Online & In-Person
                </span>
              </div>
            </div>

            {/* Price Card */}
            <div className="glass-panel rounded-3xl p-8 w-full lg:w-96 flex-shrink-0 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Course Price</span>
                  <div className="text-5xl font-extrabold text-white mt-2 text-glow">
                    ${course.price}
                  </div>
                </div>

                <Link to={`/booking/${course.id}`} className="btn btn-primary btn-lg w-full mb-6 rounded-2xl">
                  Book Now
                </Link>
                <p className="text-center text-sm font-medium text-slate-400">
                  <span className="text-emerald-400">✓</span> 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-slate-800 mb-10 overflow-x-auto custom-scrollbar pb-1">
              {['overview', 'curriculum', 'instructor'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-all -mb-[1px] ${
                    activeTab === tab
                      ? 'text-blue-400 border-b-2 border-blue-500 text-glow'
                      : 'text-slate-500 hover:text-slate-300 border-b-2 border-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-extrabold mb-6 text-white tracking-tight">
                  About This Course
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
                  {course.description}
                </p>

                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">
                  What You'll Learn
                </h3>
                <div className="grid gap-4 mb-12">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 glass-panel rounded-2xl border-slate-800/50 hover:border-slate-700/50 transition-colors">
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-slate-300 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">
                  This Course Includes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-5 glass-panel rounded-2xl border-slate-800/50">
                      <BookOpen className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="font-semibold text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-extrabold mb-4 text-white tracking-tight">
                  Course Curriculum
                </h2>
                <p className="text-slate-400 text-lg mb-10 font-light">
                  {course.curriculum.length} modules • {course.duration}
                </p>

                <div className="flex flex-col gap-4">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-6 glass-panel rounded-2xl border-slate-800/50 hover:border-blue-500/30 transition-all group">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-center font-bold text-blue-400 flex-shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-colors">
                          {item.week}
                        </div>
                        <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-500 whitespace-nowrap ml-4 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                        {item.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor Tab */}
            {activeTab === 'instructor' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-extrabold mb-8 text-white tracking-tight">
                  Your Instructor
                </h2>

                <div className="flex flex-col sm:flex-row gap-8 p-8 glass-panel rounded-3xl border-slate-700/50">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-[20px] opacity-20 rounded-full"></div>
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover flex-shrink-0 relative z-10 border-4 border-slate-800"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {course.instructor.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4 tracking-wide uppercase text-sm">
                      {course.instructor.title}
                    </p>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div className="glass-panel rounded-3xl p-8 sticky top-28 border-slate-700/50">
              <h3 className="text-xl font-bold mb-8 text-white tracking-tight">
                Course Features
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Duration</p>
                    <p className="font-bold text-white">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Students</p>
                    <p className="font-bold text-white">{course.students}+ enrolled</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Level</p>
                    <p className="font-bold text-white">{course.level}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Start Date</p>
                    <p className="font-bold text-white">Flexible</p>
                  </div>
                </div>
              </div>

              <Link to={`/booking/${course.id}`} className="btn btn-primary w-full mt-10 rounded-2xl py-4">
                Book This Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}