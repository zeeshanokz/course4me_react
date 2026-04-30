import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Clock, Users, MapPin, CreditCard, Shield, Star } from 'lucide-react'

// Sample course data (same as CourseDetail)
const courses = {
  1: {
    id: 1,
    title: 'Full Stack Web Development Bootcamp',
    provider: 'Tech Academy',
    price: 999,
    rating: 4.8,
    reviews: 324,
    location: 'New York, NY',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
  },
  2: {
    id: 2,
    title: 'Cybersecurity Professional Certification',
    provider: 'SecureTech Institute',
    price: 1299,
    rating: 4.9,
    reviews: 256,
    location: 'Online',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
  },
  3: {
    id: 3,
    title: 'Digital Marketing Masterclass',
    provider: 'Marketing Pro',
    price: 599,
    rating: 4.7,
    reviews: 189,
    location: 'Los Angeles, CA',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  4: {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    provider: 'Design Academy',
    price: 799,
    rating: 4.8,
    reviews: 412,
    location: 'San Francisco, CA',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  },
}

const defaultCourse = {
  id: 1,
  title: 'Full Stack Web Development Bootcamp',
  provider: 'Tech Academy',
  price: 999,
  rating: 4.8,
  reviews: 324,
  location: 'New York, NY',
  duration: '12 weeks',
  image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop',
}

export default function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = courses[id] || defaultCourse

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-12 lg:p-16 shadow-lg border border-slate-100">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Booking Confirmed!
            </h1>

            <p className="text-slate-600 mb-8 text-lg">
              Thank you for booking <strong className="text-slate-900">{course.title}</strong>. We've sent a confirmation email to <strong className="text-slate-900">{formData.email}</strong>.
            </p>

            <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Booking Details</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Course</span>
                  <span className="font-semibold text-slate-900 text-right">{course.title}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Provider</span>
                  <span className="font-semibold text-slate-900 text-right">{course.provider}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-200 mt-1">
                  <span className="text-slate-500">Amount Paid</span>
                  <span className="font-bold text-blue-600 text-xl">${course.price}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link to="/courses" className="btn btn-outline">
                Browse More Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container">
        {/* Back Link */}
        <Link to={`/courses/${id}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Course Details
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Booking Form */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">
              Complete Your Booking
            </h1>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold mb-6 text-slate-900">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="input-group">
                  <label className="input-label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="John"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="input-group">
                  <label className="input-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="input-group mb-6">
                <label className="input-label">Preferred Start Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div className="input-group mb-8">
                <label className="input-label">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="input resize-y"
                  rows="4"
                  placeholder="Any special requirements or questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary btn-lg w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Processing...' : `Book Now - $${course.price}`}
              </button>

              <p className="text-center mt-4 text-sm text-slate-500 flex items-center justify-center gap-1.5">
                <Shield className="w-4 h-4" />
                Secure checkout. Your information is protected.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-slate-900">
                Order Summary
              </h2>

              {/* Course Info */}
              <div className="flex gap-4 mb-6 pb-6 border-b border-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1 leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {course.provider}
                  </p>
                </div>
              </div>

              {/* Course Details */}
              <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-slate-100 text-sm">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-slate-900">{course.rating}</span>
                  <span className="text-slate-500">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{course.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>Instant booking</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Course Fee</span>
                  <span className="text-slate-900">${course.price}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Processing Fee</span>
                  <span className="text-slate-900">$0</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${course.price}
                </span>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-3 text-center">
                  We accept
                </p>
                <div className="flex justify-center gap-3">
                  {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                    <div key={method} className="px-3 py-1.5 bg-slate-50 rounded text-xs font-semibold text-slate-500 border border-slate-200">
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}