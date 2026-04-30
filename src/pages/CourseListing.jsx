import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, MapPin, Star, Filter, X } from 'lucide-react'

// Sample course data
const allCourses = [
  {
    id: 1,
    title: 'Full Stack Web Development Bootcamp',
    provider: 'Tech Academy',
    price: 999,
    rating: 4.8,
    reviews: 324,
    location: 'New York, NY',
    category: 'IT & Technology',
    duration: '12 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Cybersecurity Professional Certification',
    provider: 'SecureTech Institute',
    price: 1299,
    rating: 4.9,
    reviews: 256,
    location: 'Online',
    category: 'Security',
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    provider: 'Marketing Pro',
    price: 599,
    rating: 4.7,
    reviews: 189,
    location: 'Los Angeles, CA',
    category: 'Marketing',
    duration: '6 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    provider: 'Design Academy',
    price: 799,
    rating: 4.8,
    reviews: 412,
    location: 'San Francisco, CA',
    category: 'Design',
    duration: '10 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Data Science with Python',
    provider: 'DataTech Academy',
    price: 1199,
    rating: 4.9,
    reviews: 567,
    location: 'Online',
    category: 'IT & Technology',
    duration: '16 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Business Analysis Professional',
    provider: 'Business Institute',
    price: 899,
    rating: 4.6,
    reviews: 234,
    location: 'Chicago, IL',
    category: 'Business',
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    title: 'Cloud Architecture Mastery',
    provider: 'Cloud Academy',
    price: 1499,
    rating: 4.8,
    reviews: 189,
    location: 'Seattle, WA',
    category: 'IT & Technology',
    duration: '12 weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    title: 'Financial Analysis Certification',
    provider: 'Finance Academy',
    price: 799,
    rating: 4.7,
    reviews: 156,
    location: 'Boston, MA',
    category: 'Finance',
    duration: '10 weeks',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
  },
]

const categories = ['All', 'IT & Technology', 'Business', 'Security', 'Design', 'Marketing', 'Finance']
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export default function CourseListing() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedLevel, setSelectedLevel] = useState('All Levels')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const [priceRange, setPriceRange] = useState([0, 2000])

  // Filter courses
  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel
    const matchesSearch = !searchQuery || course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.provider.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]
    return matchesCategory && matchesLevel && matchesSearch && matchesPrice
  })

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category !== 'All') {
      setSearchParams({ category })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="bg-slate-950 min-h-screen py-10 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        {/* Page Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Explore <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Find the perfect course to advance your skills and career
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {/* Search Input */}
          <div className="flex-1 min-w-[300px] flex items-center gap-3 px-5 py-4 glass-panel rounded-2xl focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
            <Search className="w-5 h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-none bg-transparent outline-none text-white placeholder-slate-500"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            className="btn btn-outline lg:hidden rounded-2xl"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`w-full lg:w-72 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="glass-panel rounded-3xl p-6 lg:sticky lg:top-28">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-3 rounded-xl text-left transition-all duration-300 font-medium ${
                        selectedCategory === category
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="mb-8">
                <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
                  Level
                </h3>
                <div className="flex flex-col gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-3 rounded-xl text-left transition-all duration-300 font-medium ${
                        selectedLevel === level
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 border border-transparent'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-base font-bold mb-4 text-white uppercase tracking-wider">
                  Price Range
                </h3>
                <div className="flex gap-3 items-center">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    placeholder="Min"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <span className="text-slate-500">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    placeholder="Max"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6 text-slate-400 font-medium">
              Showing <strong className="text-white text-glow">{filteredCourses.length}</strong> courses
            </div>

            {/* Course Cards */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="glass-panel glass-panel-hover flex flex-col h-full rounded-3xl overflow-hidden group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow bg-slate-900/80">
                      <div className="self-start mb-4">
                        <span className="badge badge-primary border-blue-500/30">
                          {course.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4 font-medium">
                        {course.provider}
                      </p>
                      
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
                        <span className="text-2xl font-extrabold text-white text-glow">
                          ${course.price}
                        </span>
                        <span className="text-sm font-semibold text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center p-16 glass-panel rounded-3xl">
                <p className="text-xl font-semibold text-white mb-4">
                  No courses found matching your criteria
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedLevel('All Levels')
                    setSearchQuery('')
                    setPriceRange([0, 2000])
                  }}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}