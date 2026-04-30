import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, MapPin, Star, Users, BookOpen, Award, ArrowRight } from 'lucide-react'

const categories = [
  { id: 1, name: 'IT & Technology', icon: '💻', count: 245 },
  { id: 2, name: 'Business', icon: '💼', count: 189 },
  { id: 3, name: 'Security', icon: '🔒', count: 156 },
  { id: 4, name: 'Design', icon: '🎨', count: 134 },
  { id: 5, name: 'Marketing', icon: '📢', count: 112 },
  { id: 6, name: 'Finance', icon: '💰', count: 98 },
]

const featuredCourses = [
  { id: 1, title: 'Full Stack Web Development Bootcamp', provider: 'Tech Academy', price: 999, rating: 4.8, reviews: 324, location: 'New York, NY', category: 'IT & Technology', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop' },
  { id: 2, title: 'Cybersecurity Professional Certification', provider: 'SecureTech Institute', price: 1299, rating: 4.9, reviews: 256, location: 'Online', category: 'Security', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop' },
  { id: 3, title: 'Digital Marketing Masterclass', provider: 'Marketing Pro', price: 599, rating: 4.7, reviews: 189, location: 'Los Angeles, CA', category: 'Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
  { id: 4, title: 'UI/UX Design Fundamentals', provider: 'Design Academy', price: 799, rating: 4.8, reviews: 412, location: 'San Francisco, CA', category: 'Design', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop' },
]

const stats = [
  { value: '50,000+', label: 'Students', icon: Users },
  { value: '2,500+', label: 'Courses', icon: BookOpen },
  { value: '500+', label: 'Providers', icon: Award },
  { value: '4.8', label: 'Avg Rating', icon: Star },
]

const howItWorks = [
  { step: 1, title: 'Search', description: 'Browse thousands of courses by category, location, or topic' },
  { step: 2, title: 'Compare', description: 'Compare prices, ratings, and reviews to find the best fit' },
  { step: 3, title: 'Book', description: 'Book your chosen course instantly with our secure platform' },
]

export default function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/courses?search=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}`)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Abstract Backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-blue-400 text-sm font-bold mb-8 uppercase tracking-widest border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Transform Your Career Today
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
              Find Your Perfect Course & <br />
              <span className="text-gradient">Transform Your Future</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light">
              Discover thousands of courses from top providers. Learn new skills, advance your career, and achieve your goals.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 glass-panel p-4 rounded-3xl max-w-3xl mx-auto shadow-blue-900/20 shadow-2xl">
              <div className="flex items-center gap-3 flex-1 bg-slate-900/50 rounded-2xl px-5 py-4 border border-slate-700/50 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <Search className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500"
                />
              </div>

              <div className="flex items-center gap-3 flex-1 sm:flex-none sm:w-48 bg-slate-900/50 rounded-2xl px-5 py-4 border border-slate-700/50 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-white placeholder-slate-500 w-full"
                />
              </div>

              <button type="submit" className="btn btn-primary sm:w-auto w-full rounded-2xl py-4">
                Search Courses
              </button>
            </form>

            {/* Popular Searches */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Trending:</span>
              {['Web Development', 'Data Science', 'UX Design', 'Digital Marketing'].map((term) => (
                <Link
                  key={term}
                  to={`/courses?search=${encodeURIComponent(term)}`}
                  className="px-4 py-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-full text-xs font-bold text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-slate-900/30 border-y border-slate-800">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 mb-12 text-center sm:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Browse by Category</h2>
              <p className="text-lg text-slate-400">Explore courses in your area of interest</p>
            </div>
            <Link to="/categories" className="btn btn-outline whitespace-nowrap w-full sm:w-auto">
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/categories"
                className="glass-panel glass-panel-hover flex flex-col items-center gap-4 p-8 rounded-3xl text-center group"
              >
                <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{category.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-200 mb-1 group-hover:text-blue-400 transition-colors">{category.name}</h3>
                  <p className="text-sm text-slate-500 font-semibold">{category.count} courses</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container relative z-10">
          <h2 className="section-title text-glow">How It Works</h2>
          <p className="section-subtitle">Find and book your perfect course in three simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-500/50 to-blue-600/0"></div>

            {howItWorks.map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-20 h-20 bg-slate-900 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold text-blue-400 rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section bg-slate-900/30 border-y border-slate-800">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 mb-12 text-center sm:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured Courses</h2>
              <p className="text-lg text-slate-400">Hand-picked courses from top providers</p>
            </div>
            <Link to="/courses" className="btn btn-outline whitespace-nowrap w-full sm:w-auto">
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="glass-panel glass-panel-hover flex flex-col h-full rounded-3xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow bg-slate-900/80">
                  <span className="badge badge-primary mb-4 self-start border-blue-500/30">{course.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 font-medium">{course.provider}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-slate-200">{course.rating}</span>
                      <span className="text-slate-500 text-xs">({course.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span className="truncate max-w-[80px]">{course.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-800">
                    <span className="text-2xl font-extrabold text-white text-glow">${course.price}</span>
                    <span className="btn btn-sm btn-primary py-2 px-5">View</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="glass-panel p-8 rounded-3xl border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight text-glow">{stat.value}</div>
                <div className="text-sm md:text-base font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-32">
        <div className="container">
          <div className="relative rounded-[3rem] p-10 md:p-16 lg:p-24 text-center overflow-hidden border border-slate-700 shadow-2xl">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-900"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Start <span className="text-gradient">Learning?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Join thousands of students who have already transformed their careers with our premium courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/courses" className="btn btn-primary btn-lg rounded-full px-10">
                  Browse All Courses
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg rounded-full px-10 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-800">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}