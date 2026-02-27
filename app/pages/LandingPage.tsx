import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Car, Calendar, Shield, Clock, CheckCircle, Users } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">AutoSched</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Schedule Your Vehicle Service with Ease
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                AutoSched makes it simple to book, manage, and track your vehicle maintenance appointments online. Save time and avoid booking conflicts.
              </p>
              <div className="flex gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-full h-80 bg-blue-800/30 rounded-lg flex items-center justify-center">
                <Car className="h-48 w-48 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AutoSched?</h2>
            <p className="text-lg text-gray-600">Streamline your vehicle service experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Schedule appointments online anytime, anywhere. Choose your preferred date and time slot.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications about your appointment status and service progress.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Service</h3>
              <p className="text-gray-600">
                Work with certified technicians and track your complete service history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How AutoSched Works</h2>
            <p className="text-lg text-gray-600">Get started in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Create Account</h3>
              <p className="text-gray-600">
                Register with your details and vehicle information
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Book Service</h3>
              <p className="text-gray-600">
                Choose your service type and preferred time slot
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Get Service</h3>
              <p className="text-gray-600">
                Visit our center at your scheduled time for quality service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <CheckCircle className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15000+</div>
              <div className="text-blue-200">Services Completed</div>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-lg font-bold">AutoSched</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for vehicle service scheduling.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#services" className="block text-gray-400 hover:text-white">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-white">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Oil Change</p>
                <p className="text-gray-400">Tire Service</p>
                <p className="text-gray-400">Brake Repair</p>
                <p className="text-gray-400">Engine Diagnostic</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@autosched.com</p>
                <p>123 Service Lane, Auto City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AutoSched. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
