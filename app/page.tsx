export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-green-400 text-xl font-bold">
            <span className="text-gray-500">{"<"}</span>
            ProgramDesignLab
            <span className="text-gray-500">{" />"}</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
              .services()
            </a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
              .about()
            </a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
              .contact()
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-gray-500 text-sm">// Welcome to</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Program</span>
            <span className="text-green-400">Design</span>
            <span className="text-white">Lab</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            <span className="text-gray-500">function </span>
            <span className="text-green-400">buildYourIdeas</span>
            <span className="text-gray-500">() {"{"}</span>
            <br />
            <span className="ml-4 text-gray-300">return </span>
            <span className="text-white">"Cutting-edge software solutions"</span>
            <span className="text-gray-500">;</span>
            <br />
            <span className="text-gray-500">{"}"}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-green-400 text-black px-8 py-3 font-semibold hover:bg-green-300 transition-colors">
              execute.project()
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 hover:border-green-400 hover:text-green-400 transition-colors">
              view.portfolio()
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-gray-500 text-sm">// Our capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">const services = [</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ml-4">
            <div className="border border-gray-700 p-6 hover:border-green-400 transition-colors">
              <div className="text-green-400 text-lg font-semibold mb-3">
                {"{"} webDevelopment: true {"}"}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Modern web applications built with React, Next.js, and cutting-edge technologies. Responsive, fast, and
                scalable solutions.
              </p>
            </div>
            <div className="border border-gray-700 p-6 hover:border-green-400 transition-colors">
              <div className="text-green-400 text-lg font-semibold mb-3">
                {"{"} mobileApps: "native" {"}"}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cross-platform mobile applications using React Native and Flutter. One codebase, multiple platforms.
              </p>
            </div>
            <div className="border border-gray-700 p-6 hover:border-green-400 transition-colors">
              <div className="text-green-400 text-lg font-semibold mb-3">
                {"{"} backend: "scalable" {"}"}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Robust backend systems with Node.js, Python, and cloud infrastructure. APIs that power your
                applications.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-white text-3xl md:text-4xl font-bold">];</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-gray-500 text-sm">// About us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">class ProgramDesignLab {"{"}</h2>
          </div>
          <div className="ml-4 space-y-6">
            <div>
              <span className="text-green-400">constructor</span>
              <span className="text-gray-500">() {"{"}</span>
              <div className="ml-4 text-gray-300">
                <div>this.mission = "Transform ideas into digital reality";</div>
                <div>this.experience = "5+ years";</div>
                <div>this.technologies = ["React", "Node.js", "Python", "AWS"];</div>
                <div>this.passion = "Building the future, one line at a time";</div>
              </div>
              <span className="text-gray-500">{"}"}</span>
            </div>
            <div className="text-gray-300 max-w-3xl">
              We are a team of passionate developers and designers who believe in the power of clean code and innovative
              solutions. Every project is an opportunity to push boundaries and create something extraordinary.
            </div>
          </div>
          <div className="mt-8">
            <span className="text-white text-3xl md:text-4xl font-bold">{"}"}</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-gray-500 text-sm">// Get in touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">contact.us()</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <span className="text-green-400">email:</span>
                  <span className="ml-2">"hello@programdesignlab.com"</span>
                </div>
                <div>
                  <span className="text-green-400">phone:</span>
                  <span className="ml-2">"+1 (555) 123-4567"</span>
                </div>
                <div>
                  <span className="text-green-400">location:</span>
                  <span className="ml-2">"Remote & On-site"</span>
                </div>
                <div>
                  <span className="text-green-400">availability:</span>
                  <span className="ml-2">"24/7 for urgent projects"</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-green-400 text-sm mb-2">// Your name</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-600 px-4 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="Enter your name..."
                  />
                </div>
                <div>
                  <label className="block text-green-400 text-sm mb-2">// Your email</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-gray-600 px-4 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-green-400 text-sm mb-2">// Your message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black border border-gray-600 px-4 py-2 text-white focus:border-green-400 focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-400 text-black px-8 py-3 font-semibold hover:bg-green-300 transition-colors"
                >
                  send.message()
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-500 text-sm">
            <span>© 2024 ProgramDesignLab. </span>
            <span className="text-green-400">console.log</span>
            <span>("Built with passion and caffeine");</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
