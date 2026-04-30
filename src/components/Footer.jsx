import { Link } from 'react-router-dom'
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-6 group">
              <BookOpen className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <span className="tracking-tight">Courses<span className="text-blue-500">4me</span></span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering learners worldwide with premium online education. Master new skills and advance your career today.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/courses" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>Browse Courses</Link></li>
              <li><Link to="/categories" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>Categories</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>About Us</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>Instructors</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Top Categories</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/courses?category=Technology" className="text-slate-400 hover:text-blue-400 transition-colors">Technology & IT</Link></li>
              <li><Link to="/courses?category=Business" className="text-slate-400 hover:text-blue-400 transition-colors">Business & Management</Link></li>
              <li><Link to="/courses?category=Design" className="text-slate-400 hover:text-blue-400 transition-colors">Design & Creative</Link></li>
              <li><Link to="/courses?category=Marketing" className="text-slate-400 hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:text-white transition-colors">hello@courses4me.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:text-white transition-colors">123 Learning St, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Courses<span className="text-blue-500">4me</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}