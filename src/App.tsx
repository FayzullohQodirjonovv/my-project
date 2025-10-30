import { useState, useEffect } from 'react';
import { Github, Mail, Phone, ExternalLink, Code2, Sparkles } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Green Shop",
      description: "Online do'kon - mahsulotlarni filterlash, savatcha, buyurtma kuzatuv",
      url: "https://gren-shop-9evm.vercel.app/",
      tech: ["React.js", "Redux", "Tailwind CSS"]
    },
    {
      title: "CRM System",
      description: "CRM tizimi - foydalanuvchilarni rollar bo'yicha boshqarish",
      url: "https://crm-system-l4r2.vercel.app/",
      tech: ["React.js", "Ant Design", "React Query"]
    },
    {
      title: "Platieu Restaurant",
      description: "Restaurant veb-sayti - menyu, buyurtma berish tizimi",
      url: "https://platieu-restaurant-o67k.vercel.app/",
      tech: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "IELTS Teacher",
      description: "Ta'lim platformasi - o'qituvchi va talabalar uchun",
      url: "https://ielts-teacher-eight.vercel.app/",
      tech: ["React.js", "TypeScript"]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"] },
    { category: "UI/Design", items: ["Tailwind CSS", "Ant Design", "Shadcn UI", "Material UI"] },
    { category: "State Management", items: ["Redux Toolkit", "React Query", "REST API"] },
    { category: "Tools", items: ["Git", "GitHub", "Firebase", "i18next"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/20 rounded-full blur-xl animate-pulse"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's'
              }}
            ></div>
          ))}
        </div>

        <div className={`relative z-10 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8 inline-block">
            <Sparkles className="w-16 h-16 text-blue-400 animate-bounce" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
            Fayzulloh Qodirjonov
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-4">Frontend Developer</p>
          <p className="text-lg md:text-xl text-slate-400 mb-8">React & Next.js mutaxassisi</p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="tel:+998935415474" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:scale-110 duration-300">
              <Phone className="w-5 h-5" />
              <span>93 541 5474</span>
            </a>
            <a href="mailto:fqodirjonov1@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-all hover:scale-110 duration-300">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="https://github.com/FayzullohQodirjonovv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-full transition-all hover:scale-110 duration-300">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-slate-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Men haqimda
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              Frontend dasturchi sifatida JavaScript, TypeScript, React.js, Next.js, Tailwind CSS va Ant Design texnologiyalarida tajribaga egaman. Online do'konlar, CRM tizimlari, portfoliolar kabi loyihalarni muvaffaqiyatli yaratganman. Foydalanuvchi uchun qulay interfeys va samarali funksiyalarni ishlab chiqishda kuchli tajribam bor. Doimiy o'sishga intiluvchi, jamoada ham mustaqil ishlashga qodir mutaxassisman.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
            Loyihalar
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-full text-xs border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-4 duration-300"
                >
                  <span>Ko'rish</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Tajriba</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Frontend Dasturchi</h3>
                  <p className="text-slate-400 mb-3">Freelance / Mustaqil loyihalar</p>
                  <p className="text-sm text-slate-500 mb-4">2023 – Hozirgacha</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Online do'konlar yaratish va boshqarish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>CRM tizimlari ishlab chiqish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Portfolio va blog platformalari</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-teal-500 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 text-teal-400">Ta'lim</h2>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Frontend Dasturlash</h3>
                <p className="text-slate-400 mb-3">Najot Ta'lim</p>
                <p className="text-sm text-slate-500 mb-4">2024 – 2025 | Toshkent</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>React.js va Next.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>TypeScript va State Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span>Modern UI frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            Aloqaga chiqing
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Loyihangiz haqida gaplashishga doim tayyorman!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+998935415474"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 flex items-center gap-3"
            >
              <Phone className="w-6 h-6 group-hover:animate-bounce" />
              <span className="font-semibold">93 541 5474</span>
            </a>
            <a
              href="mailto:fqodirjonov1@gmail.com"
              className="group bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-slate-500/50 flex items-center gap-3"
            >
              <Mail className="w-6 h-6 group-hover:animate-bounce" />
              <span className="font-semibold">Email</span>
            </a>
            <a
              href="https://github.com/FayzullohQodirjonovv"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-slate-500/50 flex items-center gap-3"
            >
              <Github className="w-6 h-6 group-hover:animate-spin" />
              <span className="font-semibold">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2025 Fayzulloh Qodirjonov. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

export default App;
