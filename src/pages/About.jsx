import { Link } from 'react-router-dom'
import { Users, BookOpen, Award, Star, MapPin, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react'

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: '15+ years in ed-tech, former Google learning lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: '20+ years in tech, cybersecurity expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Content',
    bio: 'Former Netflix & Spotify content strategist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    name: 'Alex Thompson',
    role: 'Head of Design',
    bio: 'Ex-Airbnb & Spotify product designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
]

const stats = [
  { value: '50,000+', label: 'Students', icon: Users },
  { value: '2,500+', label: 'Courses', icon: BookOpen },
  { value: '500+', label: 'Providers', icon: Award },
  { value: '4.8', label: 'Avg Rating', icon: Star },
]

const values = [
  {
    title: 'Quality First',
    description: 'We partner only with verified, high-quality course providers to ensure the best learning experience.',
    icon: '🎯',
  },
  {
    title: 'Student-Centric',
    description: 'Every decision we make is guided by what\'s best for our students\' learning journey.',
    icon: '❤️',
  },
  {
    title: 'Continuous Innovation',
    description: 'We constantly improve our platform based on feedback and emerging educational technologies.',
    icon: '🚀',
  },
  {
    title: 'Transparency',
    description: 'Honest reviews, clear pricing, and no hidden fees. What you see is what you get.',
    icon: '💎',
  },
]

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Courses4me
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We're on a mission to make quality education accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Courses4me was founded with a simple belief: everyone deserves access to quality education. 
                We bridge the gap between learners and world-class courses from top providers around the globe.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Whether you're looking to switch careers, upskill, or explore a new hobby, our platform 
                connects you with the perfect course to achieve your goals.
              </p>
              <div className="flex flex-col gap-3">
                {['Verified course providers', 'Transparent reviews and ratings', 'Secure booking process', '24/7 customer support'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-96 bg-white rounded-xl p-8 shadow-lg border border-slate-100 flex-shrink-0">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Contact Us</h3>
              <div className="flex flex-col gap-4 text-slate-600">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>hello@courses4me.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>123 Learning St, Education City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white border-y border-slate-200">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Our Values</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">The principles that guide everything we do</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">The passionate people behind Courses4me</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section pb-24">
        <div className="container">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 lg:p-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with Courses4me.
            </p>
            <div className="flex justify-center">
              <Link to="/courses" className="btn btn-lg bg-white text-blue-600 hover:bg-slate-50 transition-colors">
                Browse Courses <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}