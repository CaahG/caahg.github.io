import { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  ArrowRight, 
  Verified, 
  Briefcase, 
  GraduationCap, 
  Languages,
  Menu,
  CheckCircle2,
  Bot,
  Search,
  Wrench,
  Brain,
  Zap,
  Layers,
  Users,
  Download,
  Award
} from "lucide-react";
import portfolioData from "./data/portfolio.json";
import { PortfolioData, LanguageContent } from "./types";

const data = portfolioData as PortfolioData;

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const content: LanguageContent = data[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
                {content.profile.initials}
              </div>
              <span className="text-xl font-bold tracking-tight">{content.profile.name}</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.about}</a>
              <a href="#value" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.value}</a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.experience}</a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.skills}</a>
              <a href="#certs" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.certs}</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.projects}</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{content.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white hover:bg-secondary/90 transition-all cursor-pointer"
              >
                <span>{lang === 'pt' ? 'PT-BR' : 'EN-US'}</span>
                <Languages className="w-4 h-4" />
              </button>
              <button className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                    {content.hero.title} <br />
                    <span className="text-primary">{content.hero.highlight}</span>
                  </h1>
                  <div className="space-y-2">
                    <p className="text-xl text-slate-400 font-medium">
                      {content.profile.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-lg bg-primary px-8 py-4 font-bold text-background-dark shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                  >
                    {content.hero.viewProjects}
                  </a>
                  <a
                    href={content.profile.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-slate-700 px-8 py-4 font-bold hover:bg-slate-800 transition-colors hover:border-secondary"
                  >
                    <Download className="w-5 h-5 text-secondary" />
                    {content.hero.downloadResume}
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative lg:ml-auto w-full max-w-md"
              >
                <div className="relative z-10">
                  <div className="aspect-square w-full rounded-full bg-slate-800 overflow-hidden shadow-2xl border-4 border-primary/20 p-2">
                    <img 
                      src="https://avatars.githubusercontent.com/u/138504890?v=4" 
                      alt={content.profile.name}
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-xl bg-slate-900 p-4 shadow-xl border border-slate-800 hidden sm:block">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Verified className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Coverage Rate</p>
                        <p className="text-xl font-bold text-white">{content.profile.coverageRate}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/10 rounded-full animate-pulse"></div>
              </motion.div>
            </div>
          </div>
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {content.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-1 rounded-xl p-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark shadow-sm"
                >
                  <span className={`${stat.type === 'primary' ? 'text-primary' : 'text-secondary'} text-sm font-bold uppercase tracking-widest`}>
                    {stat.label}
                  </span>
                  <span className="text-xl font-bold">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white dark:bg-background-dark" id="value">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{content.valueProposition.title}</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.valueProposition.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all hover:shadow-xl dark:hover:bg-slate-900/50"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {item.icon === 'Verified' && <Verified className="w-6 h-6" />}
                    {item.icon === 'Zap' && <Zap className="w-6 h-6" />}
                    {item.icon === 'Layers' && <Layers className="w-6 h-6" />}
                    {item.icon === 'Users' && <Users className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20" id="experience">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-secondary" />
              {content.nav.experience}
            </h2>
            <div className="space-y-12">
              {content.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-10 before:absolute before:left-[11px] before:top-2 before:h-full before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800 last:before:hidden">
                  <div className={`absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-background-light dark:border-background-dark ${exp.current ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{exp.role} at {exp.company}</h3>
                      <span className={`rounded-full ${exp.current ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800'} px-3 py-1 text-xs font-bold`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle2 className={`w-4 h-4 ${exp.current ? 'text-primary' : 'text-slate-400'}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{content.nav.skills}</h2>
              <p className="text-slate-500">{content.skillsHeader.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl bg-white dark:bg-background-dark p-8 shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:border-primary/50"
                >
                  <div className={`h-12 w-12 rounded-xl ${skill.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center mb-6`}>
                    {skill.icon === 'Bot' && <Bot className="w-8 h-8" />}
                    {skill.icon === 'Search' && <Search className="w-8 h-8" />}
                    {skill.icon === 'Wrench' && <Wrench className="w-8 h-8" />}
                    {skill.icon === 'Brain' && <Brain className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, iIdx) => (
                      <span 
                        key={iIdx} 
                        className={`px-3 py-1 rounded-full text-sm ${skill.special ? 'bg-primary/5 text-primary border border-primary/20' : 'bg-slate-100 dark:bg-slate-800'}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold">{content.education.title}</h2>
                <div className="space-y-4">
                  {content.education.items.map((edu, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{edu.title}</h4>
                          <p className="text-slate-500">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-medium opacity-60">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="aspect-square rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
                  <div className="text-center z-10">
                    <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="font-bold text-xl">{content.education.badge.title}</p>
                    <p className="text-slate-500 text-sm">{content.education.badge.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/30" id="certs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              {content.certifications.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.certifications.items.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-secondary/50 transition-all group"
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg leading-tight mb-1 group-hover:text-secondary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{cert.date}</span>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold">{content.projects.title}</h2>
                <p className="text-slate-500 mt-2">{content.projects.subtitle}</p>
              </div>
              <a href={content.profile.github} className="text-primary font-bold flex items-center gap-1 hover:underline">
                {content.projects.githubLink} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.projects.items.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl overflow-hidden bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    ></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-xs font-bold uppercase tracking-wider text-primary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-6">{content.contact.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg">
              {content.contact.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${content.profile.email}`}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5" />
                {content.contact.emailBtn}
              </a>
              <a
                href={content.profile.linkedin}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href={content.profile.github}
                className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white text-[10px] font-bold">
                {content.profile.initials}
              </div>
              <span className="text-sm font-semibold">© 2025 {content.profile.name}</span>
            </div>
            <div className="flex gap-8">
              <a href={content.profile.twitter} className="text-xs font-medium text-slate-500 hover:text-primary">Twitter</a>
              <a href={content.profile.behance} className="text-xs font-medium text-slate-500 hover:text-primary">Behance</a>
              <a href={content.profile.medium} className="text-xs font-medium text-slate-500 hover:text-primary">Medium</a>
            </div>
            <p className="text-xs text-slate-400">{content.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
