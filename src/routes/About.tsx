export default function AboutPage() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <img 
                src="/teams/color.png" 
                alt="Mentorship Platform Logo" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Mentorship Platform
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
              Connecting experienced professionals with emerging talent through intelligent mentorship matching
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-normal text-gray-900">Overview</h2>
              <p className="text-gray-600 leading-relaxed font-light">
                Our platform uses advanced AI algorithms to match mentors and mentees based on skills, 
                experience, career goals, and compatibility. We facilitate meaningful professional relationships 
                that drive growth and development.
              </p>
            </div>

            {/* How It Works */}
            <div className="space-y-4">
              <h2 className="text-xl font-normal text-gray-900">How It Works</h2>
              <p className="text-gray-600 leading-relaxed font-light">
                Our intelligent matching system analyzes profiles, skills, and preferences to create optimal 
                mentor-mentee pairs. HR professionals review and approve matches, ensuring quality connections 
                that benefit both parties.
              </p>
            </div>

            {/* Features & Benefits */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-xl font-normal text-gray-900">Features</h2>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>AI-powered matching algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Comprehensive profile management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Real-time match approval workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Ongoing mentorship tracking</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-normal text-gray-900">Benefits</h2>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Accelerated professional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Knowledge sharing and transfer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Enhanced employee engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">—</span>
                    <span>Stronger organizational culture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-400 font-light">
              Empowering growth through meaningful connections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

