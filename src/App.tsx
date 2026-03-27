import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Package, 
  Code2, 
  BarChart3, 
  TrendingUp, 
  ChevronRight, 
  Code, 
  Eye, 
  X,
  FileText,
  Cpu,
  Layers,
  Zap,
  Download,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { cn } from './lib/utils';
import { AGENTS, FOUNDATION_CARDS, RESOURCES, DAY2_CURRICULUM, Agent, FoundationCard } from './constants';

const SectionBridge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("container mx-auto px-6 py-12", className)}>
    <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm border-l-4 border-perion-navy/20 pl-8 py-6 rounded-r-2xl shadow-sm">
      <p className="text-perion-navy/70 text-lg leading-relaxed italic">
        {children}
      </p>
    </div>
  </div>
);

// --- Utils ---

const forceDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback to opening in new tab if fetch fails
    window.open(url, '_blank');
  }
};

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#foundations", label: "Day 1: Foundations" },
    { href: "#pipeline", label: "Day 2: Pipeline" },
    { href: "#create-skill", label: "How to create your own skill" },
    { href: "#faq", label: "FAQ" },
    { href: "#downloads", label: "Downloads" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-perion-navy/10 bg-clean-slate/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="https://www.amconsultingai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/israelichamberit-cmd/images/main/AM_Logo.png" 
            alt="AM Consulting" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex bg-perion-navy/5 p-1 rounded-full">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="px-6 py-2 rounded-full text-sm font-bold transition-all text-perion-navy/60 hover:text-perion-navy hover:bg-perion-navy/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden xl:block text-xs font-mono font-medium text-perion-navy/40 uppercase tracking-widest">
            Hands-on AI 24-25.03.26
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-perion-navy hover:bg-perion-navy/5 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-perion-navy/10 bg-white overflow-hidden"
          >
            <nav className="flex flex-col p-4 sm:p-6 gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base sm:text-lg font-bold text-perion-navy/60 hover:text-perion-navy transition-all py-4 px-6 rounded-2xl hover:bg-perion-navy/5 active:bg-perion-navy/10 flex items-center justify-between group"
                >
                  {link.label}
                  <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="pt-4 border-t border-perion-navy/5 text-[10px] font-mono font-medium text-perion-navy/40 uppercase tracking-widest">
                Hands-on AI 24-25.03.26
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const FoundationCardItem = ({ card, index }: { card: FoundationCard, index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={cn(
      "flex flex-col md:items-center gap-12 mb-32 last:mb-0",
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    )}>
      {/* Side 1: Summary Card */}
      <div className="w-full md:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white border border-perion-navy/10 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group h-full"
        >
          <div className="w-16 h-16 bg-perion-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-perion-navy group-hover:text-white transition-colors">
            {card.id === 'mcp' && <Layers size={32} />}
            {card.id === 'skills' && <Zap size={32} />}
            {card.id === 'apps' && <Cpu size={32} />}
            {card.id === 'gpts' && <FileText size={32} />}
          </div>
          <h3 className="font-display font-black text-3xl mb-6 uppercase tracking-tight">{card.title}</h3>
          <p className="text-perion-navy/60 leading-relaxed text-lg">
            {card.summary}
          </p>
        </motion.div>
      </div>

      {/* Side 2: Details / Deep Dive */}
      <div className="w-full md:w-1/2">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="bg-perion-navy text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center"
        >
          <div className="absolute -bottom-10 -right-10 opacity-5 rotate-12">
             <Code2 size={240} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Technical Deep-Dive</span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-white/80 border-l-2 border-white/20 pl-6">
              {card.deepDive}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FoundationSection = () => {
  return (
    <>
      <SectionBridge>
        Start here: The sections below explain concepts you’ll see again in the Day 2 pipeline and in the skill files you download. 
        Skim the cards first, then grab the files that match your role.
        <br />
        <span className="text-perion-navy/40 text-sm font-bold mt-2 block">Unsure where to begin? Read the four Day 1 cards in order—they mirror how we designed the workshop.</span>
      </SectionBridge>
      <section id="foundations" className="py-32 container mx-auto px-6 scroll-mt-20">
      <div className="mb-24 text-center">
        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight mb-8 uppercase">
          Day 1 — <br /> Foundations and tools
        </h2>
        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-perion-navy/5 max-w-2xl mx-auto">
          <p className="text-perion-navy/70 text-xl leading-relaxed">
            Mastering the core concepts before moving to execution. A deep dive into the architecture of modern AI.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {FOUNDATION_CARDS.map((card, index) => (
          <FoundationCardItem key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
    </>
  );
};

const PipelineSection = ({ onResourceClick }: { onResourceClick: (resource: any) => void }) => {
  const [activeStep, setActiveStep] = useState(0); // 0: Trigger, 1: Product, 2: R&D, 3: Finance, 4: Sales
  const steps = ['trigger', 'product', 'rd', 'finance', 'sales'];
  
  useEffect(() => {
    // Durations in ms: Trigger is snappy (0.4s), Agents are faster (1s)
    const durations = [400, 1000, 1000, 1000, 1000];
    let timeoutId: ReturnType<typeof setTimeout>;

    const nextStep = (current: number) => {
      const next = (current + 1) % steps.length;
      setActiveStep(next);
      timeoutId = setTimeout(() => nextStep(next), durations[next]);
    };

    timeoutId = setTimeout(() => nextStep(0), durations[0]);
    
    return () => clearTimeout(timeoutId);
  }, []);

  const getAgentIcon = (id: string) => {
    switch(id) {
      case 'product': return <Package size={20} />;
      case 'rd': return <Code2 size={20} />;
      case 'finance': return <BarChart3 size={20} />;
      case 'sales': return <TrendingUp size={20} />;
      default: return null;
    }
  };

  return (
    <>
      <SectionBridge>
        Day 2 — From one skill to a team of agents: Day 1 showed how models connect to tools and how instructions become Skills. 
        Day 2 shows orchestration: one trigger (the kickoff), several domain skills running in sequence, each producing artifacts—closer to how work actually flows across functions.
        <br />
        <span className="text-perion-navy/40 text-sm font-bold mt-2 block">What changes when more than one “expert” has to act on the same initiative? That’s what the pipeline demonstrates.</span>
      </SectionBridge>
      <section id="pipeline" className="py-24 container mx-auto px-6 scroll-mt-20">
      {/* Day 2 Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-4 uppercase">
            Day 2 — <br /> Claude Cowork in depth
          </h2>
          <p className="text-perion-navy/60 max-w-xl text-lg">
            Deep diving into the tools and workflows that power the workshop.
          </p>
        </div>
        <div className="w-full md:w-64 h-48 rounded-3xl overflow-hidden border-2 border-perion-navy/10 shadow-lg">
          <img 
            src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/claude.gif" 
            alt="Claude AI" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Live Orchestration Pipeline Simulation */}
      <div className="text-center mb-16 border-t border-perion-navy/10 pt-20">
        <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-6 uppercase">
          Live Orchestration <br /> Pipeline
        </h2>
        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-perion-navy/5 max-w-3xl mx-auto shadow-sm">
          <p className="text-perion-navy/60 max-w-2xl mx-auto text-base mb-6">
            The "Go Team" email initiates a complex chain reaction across specialized AI agents.
          </p>
          <p className="text-perion-navy/80 text-lg font-medium leading-relaxed">
            Starting with an email of a kickoff summary, we initiated a sequence of AI agents in different domain to perform a full product launch. 
            Starting from product, through rnd, finance and sales. See how these agents perform and starting building your agent now!!
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center mb-32">
        {/* Trigger Block */}
        <motion.div 
          animate={{ 
            scale: activeStep === 0 ? 1.05 : 1,
            borderColor: activeStep === 0 ? '#0F172A' : 'rgba(15, 23, 42, 0.1)',
            boxShadow: activeStep === 0 ? '0 20px 40px -10px rgba(15, 23, 42, 0.2)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
          className={cn(
            "relative z-10 bg-white border-2 p-6 rounded-2xl flex flex-col items-center gap-3 transition-all w-full max-w-[240px]",
            activeStep === 0 && "ring-4 ring-perion-navy/5"
          )}
        >
          <div className="w-12 h-12 bg-perion-navy text-white rounded-xl flex items-center justify-center shadow-inner">
            <Mail size={24} />
          </div>
          <div className="text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-perion-navy/40 mb-0.5 block">Non-Agentic Trigger</span>
            <h3 className="font-display font-black text-xl uppercase tracking-tighter">"Go Team" Email</h3>
          </div>
          
          <AnimatePresence>
            {activeStep === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-mono font-black text-perion-navy bg-white border border-perion-navy/10 px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap"
              >
                SIGNAL EMITTED
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Flow Line with Pulse */}
        <div className="h-16 w-px bg-perion-navy/10 relative my-2">
          <motion.div 
            animate={{ 
              top: activeStep === 0 ? ['0%', '100%'] : '0%',
              opacity: activeStep === 0 ? [0, 1, 0] : 0
            }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-6 bg-perion-navy rounded-full blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-perion-navy to-transparent opacity-20" />
        </div>

        {/* Agent Grid */}
        <div className="relative w-full">
          {/* Horizontal Flow Line Connector (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-perion-navy/10 to-transparent -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {AGENTS.map((agent, index) => {
              const isActive = activeStep === index + 1;
              
              return (
                <div key={agent.id} className="flex flex-col gap-4">
                  <motion.div 
                    animate={{ 
                      scale: isActive ? 1.03 : 1,
                      borderColor: isActive ? '#0F172A' : 'rgba(15, 23, 42, 0.1)',
                      y: isActive ? -5 : 0,
                      boxShadow: isActive ? '0 20px 40px -10px rgba(15, 23, 42, 0.2)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                    }}
                    className={cn(
                      "bg-white border-2 p-5 rounded-2xl transition-all relative overflow-hidden group cursor-pointer",
                      isActive && "ring-4 ring-perion-navy/5"
                    )}
                    onClick={() => {
                      const resource = RESOURCES.find(r => r.id === agent.id);
                      if (resource) onResourceClick(resource);
                    }}
                  >
                    <div 
                      className="absolute top-0 left-0 w-full h-1" 
                      style={{ backgroundColor: agent.color }}
                    />
                    
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: agent.color }}
                      >
                        {getAgentIcon(agent.id)}
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="bg-perion-navy text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase flex items-center gap-1"
                          >
                            <span className="w-1 h-1 bg-white rounded-full animate-ping" />
                            Thinking
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <h3 className="font-display font-black text-base uppercase tracking-tight mb-0.5">{agent.name}</h3>
                    <p className="text-[10px] font-bold text-perion-navy/40 uppercase tracking-widest mb-3">{agent.role}</p>
                    
                    {/* Connection Indicator */}
                    {index < AGENTS.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                        <ChevronRight className={cn("w-6 h-6 transition-colors", isActive ? "text-perion-navy" : "text-perion-navy/10")} />
                      </div>
                    )}

                    <div className="flex flex-col gap-2 mt-auto">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-perion-navy/60 group-hover:text-perion-navy transition-colors">
                        <Code size={12} />
                        <span>View Logic</span>
                        <ChevronRight size={12} className="ml-auto" />
                      </div>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          forceDownload(agent.downloadUrl, `${agent.id}-skill.md`);
                        }}
                        className="flex items-center gap-1.5 text-[10px] font-bold text-perion-navy/40 hover:text-perion-navy transition-colors border-t border-perion-navy/5 pt-2 w-full text-left"
                      >
                        <Download size={12} />
                        <span>Download Skill</span>
                      </button>
                    </div>
                  </motion.div>

                  {/* Reasoning Prints */}
                  <div className="min-h-[110px] relative">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="font-mono text-[10px] leading-relaxed p-3.5 border-l-2 bg-white shadow-sm rounded-r-xl"
                          style={{ borderColor: agent.color }}
                        >
                          {agent.reasoning.map((line, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -3 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="mb-1.5 last:mb-0 flex gap-2"
                            >
                              <span className="opacity-20 shrink-0">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                              <span className="text-perion-navy/80">{line}</span>
                            </motion.div>
                          ))}
                          <motion.div 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-1.5 h-3 bg-perion-navy align-middle ml-1"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 gap-12 border-t border-perion-navy/10 pt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-4 text-perion-navy">Full loop: refine like a product</h3>
            <p className="text-perion-navy/60 leading-relaxed italic">
              You already saw the short version above. On Day 2 we added iteration on real work—the same skill file, improved every time you use it.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 bg-clean-slate p-8 rounded-3xl border border-perion-navy/5">
            <p className="text-perion-navy/60 text-lg leading-relaxed italic">
              Where this runs: The pipeline illustrates multi-agent behavior. Claude Desktop, and especially Cowork, is where you execute long, multi-step work on your machine—planning, tools, and outputs in one place. 
              The Skills you saw in the pipeline are the same idea as Skills in your project: packaged instructions, now shared across teammates and sessions.
              <br />
              <span className="text-perion-navy/40 text-sm font-bold mt-2 block">Want to run something this heavy outside a demo? That’s Cowork’s job.</span>
            </p>
          </div>

        {DAY2_CURRICULUM.map((item) => (
          <div key={item.id} className="bg-white border border-perion-navy/10 p-10 rounded-3xl shadow-sm flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-6">{item.title}</h3>
              
              {item.body && (
                <p className="text-perion-navy/60 leading-relaxed text-lg">{item.body}</p>
              )}

              {item.intro && (
                <p className="text-perion-navy/80 font-bold mb-6 text-lg">{item.intro}</p>
              )}

              {item.steps && (
                <ol className="space-y-6">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-perion-navy text-white rounded-full flex items-center justify-center font-black text-sm">
                        {i + 1}
                      </span>
                      <p className="text-perion-navy/60 leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              )}

              {item.outro && (
                <p className="mt-8 text-perion-navy/40 italic text-sm border-t border-perion-navy/5 pt-6">
                  {item.outro}
                </p>
              )}
            </div>

            {item.id === 'desktop' && (
              <div className="w-full lg:w-1/3 shrink-0 rounded-2xl overflow-hidden border border-perion-navy/10 shadow-md h-fit">
                <img 
                  src="https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/claude_cowork.png" 
                  alt="Claude Cowork" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

const HowToCreateSkills = ({ onResourceClick }: { onResourceClick: (resource: any) => void }) => (
  <>
    <SectionBridge>
      From assistants to repeatable workflows: Custom GPTs specialize the chat; Skills specialize the work so the same steps run the same way in Claude projects. 
      The steps below are how we turn a recurring task into a skill file—the same pattern we use for the Day 2 agents.
    </SectionBridge>
    <section id="create-skill" className="py-24 bg-perion-navy text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 rotate-12"><Zap size={300} /></div>
        <div className="absolute bottom-10 right-10 -rotate-12"><Code2 size={300} /></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-6 uppercase">Quick path: skill in a project</h2>
          <p className="text-white/60 text-xl leading-relaxed">
            The most powerful way to use Claude is to turn your recurring workflows into deterministic skills. 
            Follow this simple 3-step process to automate your day-to-day.
          </p>
          <p className="text-white/40 text-sm font-bold mt-4 uppercase tracking-widest">Have a task you run every week? That’s a skill candidate.</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Identify Repetition",
            body: "Look for tasks you do daily or weekly that follow a predictable pattern. Examples: Product Lead writing a PRD, Finance reviewing budget plans, or Sales scouting for new prospects."
          },
          {
            step: "02",
            title: "Brainstorm with Claude",
            body: "Describe the task to Claude. Explain the inputs, the steps you take, and the desired output. Use techniques like 'ask me clarifying questions' to ensure Claude understands every nuance of your workflow."
          },
          {
            step: "03",
            title: "Generate & Install",
            body: "Ask Claude to 'Generate a skill file for this workflow'. Claude will produce a structured .md file you can add to your projects."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
          >
            <span className="font-display font-black text-4xl text-white/20 mb-6 block">{item.step}</span>
            <h3 className="font-display font-black text-xl uppercase tracking-tight mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
        <button 
          onClick={() => {
            const resource = RESOURCES.find(r => r.id === 'create-skill-convo');
            if (resource) onResourceClick(resource);
          }}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-perion-navy font-black uppercase tracking-tight hover:scale-105 transition-all shadow-xl"
        >
          <Eye size={20} />
          Look here for more details
        </button>
        
        <button 
          onClick={() => forceDownload('https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/create-product-skill-conversation.md', 'create-product-skill-conversation.md')}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white border border-white/20 font-black uppercase tracking-tight hover:bg-white/20 transition-all"
        >
          <Download size={20} />
          Download Conversation
        </button>
      </div>
    </div>
  </section>
  </>
);

const ExecutiveSummary = () => (
  <section className="py-24 bg-clean-slate border-b border-perion-navy/5">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-perion-navy/10"></div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-perion-navy/40">Executive Summary</span>
          <div className="h-px flex-1 bg-perion-navy/10"></div>
        </div>
        
        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight mb-8 uppercase text-center leading-tight">
          Hands-on AI <br /> 
          <span className="text-perion-navy/40">24-25.03.26</span>
        </h2>
        
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-perion-navy/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap size={120} />
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-perion-navy">How this hub is organized</h3>
              <p className="text-xl leading-relaxed text-perion-navy/80">
                Day 1 gives you the building blocks (how tools attach to models, how instructions become Skills, how ChatGPT reaches your stack). 
                Day 2 shows those same blocks in motion—multiple agents, one pipeline, real artifacts. 
                The Download Center holds everything to reuse on your own.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-perion-navy/5">
              <div className="space-y-3">
                <h4 className="font-display font-black text-sm uppercase tracking-widest text-perion-navy/40">The Goal</h4>
                <p className="text-perion-navy/70 leading-relaxed">
                  To move beyond simple chat interactions and build robust, agentic workflows that can 
                  execute complex tasks across your organization's tools and data.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-display font-black text-sm uppercase tracking-widest text-perion-navy/40">What's Provided</h4>
                <p className="text-perion-navy/70 leading-relaxed">
                  This page serves as your permanent resource center. You'll find foundations, 
                  pipeline orchestration, downloadable agent skills, and full workshop slide decks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    // ...
    {
      question: "What are Agent Skills?",
      answer: "Agent Skills are deterministic instruction sets (usually in Markdown format) that turn Claude into a specialized expert for specific workflows. Unlike generic prompts, Skills define a strict context, specific task sequences, and required output formats to ensure consistent, production-grade results every time."
    },
    {
      question: "How do I install a skill to Claude?",
      answer: "To 'install' a skill, you can simply paste the content of the .md file into a new Claude conversation to set the context. For a more permanent setup using Claude Desktop, you can create a dedicated 'skills' directory on your machine and instruct Claude to reference these files as its primary operating manual for specific tasks."
    },
    {
      question: "How do I add connectors to Claude?",
      answer: "Connectors in Claude are implemented via the Model Context Protocol (MCP). You add them by editing your 'claude_desktop_config.json' file. This configuration tells Claude Desktop which MCP servers to run (e.g., for Gmail, Jira, or Google Calendar), providing the AI with secure, real-time access to your external data and tools."
    },
    {
      question: "How do I add applications to GPT?",
      answer: "In ChatGPT, you add 'Applications' (known as Actions) through the GPT Editor. Under the 'Configure' tab, you click 'Create new action' and provide an OpenAPI specification. This spec defines the API endpoints, authentication methods, and parameters that the GPT can use to interact with your external software services."
    },
    {
      question: "What is the difference between 'Apps' in GPT and 'Connectors' in Claude?",
      answer: "Fundamentally, there is no difference in purpose—they are the same concept under different names. Both serve as the 'hands' of the AI, allowing it to move beyond text generation and perform real actions like sending emails, updating tickets, or querying databases. While the technical implementation differs (OpenAPI for GPTs vs. MCP for Claude), the functional outcome is identical: bridging the gap between reasoning and execution."
    },
    {
      question: "How do I use Claude Desktop?",
      answer: "Claude Desktop is the power-user version of Claude that runs locally on your Mac or PC. Its primary advantage is its ability to integrate with your local environment and external tools via MCP. By configuring MCP servers, you can give Claude the ability to read your local codebase, query your databases, and interact with your enterprise SaaS applications directly from the desktop interface."
    },
    {
      question: "What are Custom GPTs?",
      answer: "Custom GPTs are personalized versions of ChatGPT that combine custom instructions, uploaded knowledge files, and API actions. They allow you to create a 'mini-app' within ChatGPT that is pre-configured with the specific expertise and toolsets required for a recurring business function."
    }
  ];

  return (
    <>
      <SectionBridge>
        Common questions below match what we heard in the room—installing skills, connectors vs apps, Desktop vs web. 
        If you’re ready to implement, jump to the Download Center for the agent skills and slides.
      </SectionBridge>
      <section id="faq" className="py-32 bg-white scroll-mt-20 border-b border-perion-navy/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-12 uppercase text-center">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-perion-navy/10 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-perion-navy/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", openIndex === i ? "rotate-90" : "")} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-perion-navy/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

const ContactSection = () => (
  <section className="py-24 bg-perion-navy text-white text-center">
    <div className="container mx-auto px-6">
      <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight mb-6">Have a question? Comments?</h2>
      <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
        Feel free to reach out at <a href="mailto:office@amconsultingai.com" className="text-white hover:underline">office@amconsultingai.com</a>
      </p>
      <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
    </div>
  </section>
);

const DownloadCenter = () => {
  const categories = [
    // ...
    {
      title: "Day 2 Agent Skills",
      description: "Specific instruction sets for the AI agents demonstrated in the pipeline.",
      items: [
        { name: "Product Agent Skill", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/product-skill.md", filename: "product-skill.md" },
        { name: "R&D Agent Skill", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/rnd-skill.md", filename: "rnd-skill.md" },
        { name: "Finance Agent Skill", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/finance-skill.md", filename: "finance-skill.md" },
        { name: "Sales Agent Skill", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/skills/sales-skill.md", filename: "sales-skill.md" },
        { name: "Skill Creation Conversation", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/create-product-skill-conversation.md", filename: "create-product-skill-conversation.md" },
      ]
    },
    {
      title: "Workshop Presentations",
      description: "Full slide decks covering the foundations and practical aspects of the workshop.",
      items: [
        { name: "Day 1 Slides (PDF)", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/slides/Perion_Day_1.pdf", filename: "Perion_Day_1.pdf" },
        { name: "Day 2 Slides (PDF)", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/slides/Perion_Day_2.pdf", filename: "Perion_Day_2.pdf" },
        { name: "All Slides (ZIP)", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/slides/Perion_slides.zip", filename: "Perion_slides.zip" },
      ]
    },
    {
      title: "Full Workshop Bundle",
      description: "The complete package including all skills, slides, and documentation.",
      items: [
        { name: "Entire Workshop Content (ZIP)", url: "https://cdn.jsdelivr.net/gh/israelichamberit-cmd/images@main/perion/content/Perion_AI_Workshop_24_25_3_26_AM_Consulting.zip", filename: "Perion_AI_Workshop_Bundle.zip", highlight: true },
      ]
    }
  ];

  return (
    <>
      <SectionBridge>
        Put it into practice: Use the same skill files referenced in the pipeline and the Day 1 / Day 2 decks to walk through the flow with your team.
      </SectionBridge>
      <section id="downloads" className="py-32 container mx-auto px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight mb-8 uppercase">Download Center</h2>
        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-perion-navy/5 max-w-3xl mx-auto shadow-sm">
          <p className="text-perion-navy/70 text-xl leading-relaxed">
            Access all the materials from the AI Workshop. You can download individual 
            skill files and slide decks, or grab the entire workshop bundle in one go.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col">
            <div className="mb-8">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-3">{cat.title}</h3>
              <p className="text-perion-navy/50 text-sm leading-relaxed">{cat.description}</p>
            </div>
            
            <div className="space-y-3 mt-auto">
              {cat.items.map((item, j) => (
                <button
                  key={j}
                  onClick={() => forceDownload(item.url, item.filename)}
                  className={cn(
                    "w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all group",
                    item.highlight 
                      ? "bg-perion-navy border-perion-navy text-white shadow-xl hover:scale-[1.02]" 
                      : "bg-white border-perion-navy/5 hover:border-perion-navy/20 hover:shadow-md"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center",
                      item.highlight ? "bg-white/10" : "bg-perion-navy/5 text-perion-navy"
                    )}>
                      {item.filename.endsWith('.zip') ? <Package size={16} /> : <FileText size={16} />}
                    </div>
                    <span className="font-bold text-sm">{item.name}</span>
                  </div>
                  <Download size={16} className={cn(
                    "transition-transform group-hover:translate-y-0.5",
                    item.highlight ? "text-white/40" : "text-perion-navy/20"
                  )} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

const CodeModal = ({ resource, onClose }: { resource: any, onClose: () => void }) => {
  const [view, setView] = useState<'source' | 'preview'>('preview');

  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-perion-navy/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-perion-navy/10 flex items-center justify-between bg-clean-slate">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-perion-navy text-white rounded-xl flex items-center justify-center">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight">{resource.name}</h3>
              <p className="text-xs font-bold text-perion-navy/40 uppercase tracking-widest">Resource Asset</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => forceDownload(resource.downloadUrl, resource.name)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-perion-navy text-white hover:bg-perion-navy/90 transition-all shadow-sm"
            >
              <Download size={14} />
              Download
            </button>

            <div className="flex bg-perion-navy/5 p-1 rounded-xl">
              <button 
                onClick={() => setView('source')}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                  view === 'source' ? "bg-white text-perion-navy shadow-sm" : "text-perion-navy/40 hover:text-perion-navy"
                )}
              >
                <Code size={14} />
                View Source
              </button>
              <button 
                onClick={() => setView('preview')}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                  view === 'preview' ? "bg-white text-perion-navy shadow-sm" : "text-perion-navy/40 hover:text-perion-navy"
                )}
              >
                <Eye size={14} />
                Visual Preview
              </button>
            </div>
            
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-perion-navy/5 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-auto p-8 bg-clean-slate/30">
          <AnimatePresence mode="wait">
            {view === 'source' ? (
              <motion.div 
                key="source"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="font-mono text-sm bg-perion-navy text-white p-8 rounded-2xl overflow-x-auto shadow-inner h-full"
              >
                <pre className="whitespace-pre-wrap">{resource.source.trim()}</pre>
              </motion.div>
            ) : (
              <motion.div 
                key="preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-perion-navy/5"
              >
                <div className="markdown-body max-w-3xl mx-auto prose prose-slate prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:text-perion-navy/70 prose-li:text-perion-navy/70">
                  <ReactMarkdown>{resource.preview}</ReactMarkdown>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedResource, setSelectedResource] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <ExecutiveSummary />
        <FoundationSection />
        <HowToCreateSkills onResourceClick={setSelectedResource} />
        <PipelineSection onResourceClick={setSelectedResource} />
        <FAQ />
        <DownloadCenter />
        <ContactSection />
      </main>

      <footer className="py-12 border-t border-perion-navy/10 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <a href="https://www.amconsultingai.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://raw.githubusercontent.com/israelichamberit-cmd/images/main/AM_Logo.png" 
                alt="AM Consulting" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          <p className="text-xs font-bold text-perion-navy/40 uppercase tracking-widest">
            © 2026 AM Consulting AI Workshop. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-bold text-perion-navy/60 hover:text-perion-navy uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-xs font-bold text-perion-navy/60 hover:text-perion-navy uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedResource && (
          <CodeModal 
            resource={selectedResource} 
            onClose={() => setSelectedResource(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
