import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, Star, MapPin, Clock } from 'lucide-react'

const categories = [
  { 
    id: 1, 
    name: 'IT & Technology', 
    icon: '💻', 
    count: 245,
    description: 'Web development, data science, AI, cloud computing and more',
    courses: [
      { id: 1, title: 'Full Stack Web Development Bootcamp', provider: 'Tech Academy', price: 999, rating: 4.8, location: 'New York, NY' },
      { id: 5, title: 'Data Science with Python', provider: 'DataTech Academy', price: 1199, rating: 4.9, location: 'Online' },
      { id: 7, title: 'Cloud Architecture Mastery', provider: 'Cloud Academy', price: 1499, rating: 4.8, location: 'Seattle, WA' },
    ]
  },
  { 
    id: 2, 
    name: 'Business', 
    icon: '💼', 
    count: 189,
    description: 'Management, entrepreneurship, finance, and leadership',
    courses: [
      { id: 6, title: 'Business Analysis Professional', provider: 'Business Institute', price: 899, rating: 4.6, location: 'Chicago, IL' },
    ]
  },
  { 
    id: 3, 
    name: 'Security', 
    icon: '🔒', 
    count: 156,
    description: 'Cybersecurity, ethical hacking, network security',
    courses: [
      { id: 2, title: 'Cybersecurity Professional Certification', provider: 'SecureTech Institute', price: 1299, rating: 4.9, location: 'Online' },
    ]
  },
  { 
    id: 4, 
    name: 'Design', 
    icon: '🎨', 
    count: 134,
    description: 'UI/UX design, graphic design, product design',
    courses: [
      { id: 4, title: 'UI/UX Design Fundamentals', provider: 'Design Academy', price: 799, rating: 4.8, location: 'San Francisco, CA' },
    ]
  },
  { 
    id: 5, 
    name: 'Marketing', 
    icon: '📢', 
    count: 112,
    description: 'Digital marketing, social media, SEO, content marketing',
    courses: [
      { id: 3, title: 'Digital Marketing Masterclass', provider: 'Marketing Pro', price: 599, rating: 4.7, location: 'Los Angeles, CA' },
    ]
  },
  { 
    id: 6, 
    name: 'Finance', 
    icon: '💰', 
    count: 98,
    description: 'Financial analysis, accounting, investment, banking',
    courses: [
      { id: 8, title: 'Financial Analysis Certification', provider: 'Finance Academy', price: 799, rating: 4.7, location: 'Boston, MA' },
    ]
  },
]

export default function Categories() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse Categories
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Explore our wide range of course categories and find the perfect learning path for your career.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-12">
            {categories.map((category) => (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                  <span className="text-5xl">{category.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">
                      {category.name}
                    </h2>
                    <p className="text-slate-600 mb-2">
                      {category.description}
                    </p>
                    <p className="text-sm text-slate-500">
                      <strong className="text-slate-900">{category.count}</strong> courses available
                    </p>
                  </div>
                  <Link 
                    to={`/courses?category=${encodeURIComponent(category.name)}`}
                    className="btn btn-outline whitespace-nowrap self-start sm:self-center"
                  >
                    View All <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Category Courses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="block bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">
                        {course.provider}
                      </p>
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold text-slate-900">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{course.location}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <span className="text-xl font-bold text-blue-600">
                          ${course.price}
                        </span>
                        <span className="btn btn-sm btn-primary">View</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white border-t border-slate-200">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Browse all our courses or contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn btn-primary btn-lg">Browse All Courses</Link>
            <Link to="/about" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}