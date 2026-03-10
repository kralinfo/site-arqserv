import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layout,
  ShoppingBag,
  Cpu,
  Rocket,
  CheckCircle2,
  Menu,
  X,
  Layers,
  FileSearch,
  ShieldCheck,
  BarChart3,
  MessageCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-glass-border' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kralinfo" className="h-12 logo-light" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Início', 'Serviços', 'Produtos', 'Contato'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-text-muted hover:text-text-main transition-colors font-medium">
              {item}
            </a>
          ))}
          <button className="btn btn-primary">Falar com Especialista</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-glass-border p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Início', 'Serviços', 'Produtos', 'Contato'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-medium" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="btn btn-primary w-full">Falar com Especialista</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="início" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border mb-6">
            <Rocket size={16} className="text-primary" />
            <span className="text-sm font-medium">Inovação Digital para sua Empresa</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Transformamos Ideias em <span className="gradient-text">Sistemas de Alta Performance.</span>
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-lg">
            A Kralinfo desenvolve soluções customizadas sob medida: sistemas complexos, sites premium e lojas virtuais que impulsionam seu negócio no mundo digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Ver Nossos Projetos</button>
            <button className="btn btn-outline">Nossos Serviços</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass-card p-2 aspect-[4/3] flex items-center justify-center overflow-hidden">
            <img
              src="/hero-bg.png"
              alt="Kralinfo Technology"
              className="w-full h-full object-cover rounded-2xl opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
          {/* Decorative spheres */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent rounded-full blur-xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary rounded-full blur-2xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card p-8 flex flex-col h-full"
  >
    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
      <Icon size={32} className="text-primary" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-text-muted mb-6 flex-grow">{description}</p>
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm">
          <CheckCircle2 size={16} className="text-primary" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  const data = [
    {
      icon: Cpu,
      title: 'Sistemas Customizáveis',
      description: 'Desenvolvimento de dashboards, CRMs e ERPs personalizados para otimizar seus processos internos.',
      features: ['Arquitetura escalável', 'Cloud Native', 'UX/UI Intuitivo']
    },
    {
      icon: Layout,
      title: 'Sites & Landing Pages',
      description: 'Criamos presenças digitais impactantes que convertem visitantes em clientes de forma elegante.',
      features: ['Otimização SEO', 'Mobile First', 'Performance Extrema']
    },
    {
      icon: ShoppingBag,
      title: 'Lojas Virtuais',
      description: 'Plataformas de e-commerce robustas e integradas com os principais meios de pagamento e logística.',
      features: ['Checkout Otimizado', 'Gestão de Estoque', 'Painel Administrativo']
    }
  ];

  return (
    <section id="serviços" className="bg-glass/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossas <span className="gradient-text">Soluções</span></h2>
          <p className="text-text-muted text-lg">
            Combinamos design moderno com tecnologia de ponta para entregar resultados extraordinários para o seu negócio.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <ServiceCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArqServSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const slides = [
    { src: '/arqserv-dash.png', title: 'Dashboard Administrativo' },
    { src: '/arqserv-serv.png', title: 'Gestão de Servidores' },
    { src: '/arqserv-login.png', title: 'Portal de Acesso' }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!isZoomed) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isZoomed]);

  return (
    <section id="produtos" className="relative overflow-hidden pt-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos <span className="gradient-text">Produtos</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="/arqserv-logo.png" alt="ArqServ" className="h-10" />
              <div className="h-10 w-[2px] bg-glass-border"></div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <ShieldCheck size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Solução para Prefeituras</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">ArqServ</span>: Gestão Digital de Servidores
            </h2>
            <p className="text-xl text-text-muted mb-8">
              O ArqServ é a ferramenta definitiva para prefeituras que buscam modernizar a gestão de pessoal. Organize, busque e proteja os documentos digitalizados de todos os servidores em uma única plataforma intuitiva.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: FileSearch, title: 'Busca Inteligente', desc: 'Encontre qualquer documento em segundos por nome, CPF ou matrícula.' },
                { icon: BarChart3, title: 'Dashboards Gerenciais', desc: 'Acompanhe o volume de documentos e o progresso da digitalização.' },
                { icon: ShieldCheck, title: 'Segurança & LGPD', desc: 'Controle rigoroso de acesso e criptografia de ponta a ponta.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-glass border border-glass-border rounded-xl flex items-center justify-center">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5581997307312"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8"
            >
              Solicitar Demonstração
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Carousel Container */}
            <div
              className="relative z-10 glass-card p-4 rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20 bg-background/50 cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide}
                    src={slides[activeSlide].src}
                    alt={slides[activeSlide].title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Hover indicator */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-background/80 backdrop-blur-md p-4 rounded-full">
                    <Maximize2 size={32} className="text-primary" />
                  </div>
                </div>

                {/* Overlay with title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium">{slides[activeSlide].title}</p>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all z-20"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all z-20"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setActiveSlide(idx); }}
                    className={`h-1.5 rounded-full transition-all ${idx === activeSlide ? 'w-8 bg-primary' : 'w-2 bg-glass-border hover:bg-white/30'}`}
                  />
                ))}
              </div>
            </div>

            {/* Lightbox / Zoom Modal */}
            <AnimatePresence>
              {isZoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
                  onClick={() => setIsZoomed(false)}
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-8 right-8 text-text-main hover:text-primary transition-colors z-[110]"
                  >
                    <X size={40} />
                  </motion.button>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-6xl w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={slides[activeSlide].src}
                      alt={slides[activeSlide].title}
                      className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-glass-border"
                    />

                    {/* Modal navigation */}
                    <button
                      onClick={() => prevSlide()}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-glass border border-glass-border flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all -translate-x-1/2 hidden md:flex"
                    >
                      <ChevronLeft size={32} />
                    </button>
                    <button
                      onClick={() => nextSlide()}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-glass border border-glass-border flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all translate-x-1/2 hidden md:flex"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Pronto para elevar sua <br /> empresa ao próximo nível?</h2>
            <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e vamos discutir como transformar suas necessidades em soluções digitais poderosas.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="btn btn-primary text-lg px-10 py-5">Começar Projeto</button>
              <button className="btn btn-outline text-lg px-10 py-5">Ver Noosso Portfólio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Kralinfo" className="h-8 logo-light" />
          </div>
          <p className="text-text-muted text-sm">
            © 2024 Kralinfo. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-text-muted">
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ArqServSection />
      <CTA />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5581997307312"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <MessageCircle size={32} />
        {/* Pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
      </motion.a>
    </div>
  );
};

export default App;
