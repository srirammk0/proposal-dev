"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, Check, Briefcase, FileSignature, Chrome, PenTool, LayoutTemplate, Layers } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText("You are an expert Upwork freelancer...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-[#fdfdfc] text-[#1a1a19] font-sans selection:bg-[#e4e4e0] overflow-x-hidden">
      
      {/* Navbar Minimalist */}
      <nav className="w-full flex justify-between items-center px-8 py-6 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 font-serif font-semibold text-xl tracking-tight text-[#1a1a19]">
          <div className="w-8 h-8 rounded-full border border-[#1a1a19] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#ea580c] rounded-full" />
          </div>
          Proposal.dev
        </div>
        <button className="text-sm font-medium hover:text-[#ea580c] transition-colors relative group">
          Member Login
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ea580c] transition-all group-hover:w-full" />
        </button>
      </nav>

      {/* Hero Section Editorial */}
      <section className="pt-32 pb-24 px-8 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7">
            <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e4e4e0] text-xs mb-8 text-[#5c5c58] font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-pulse" />
              Private Beta
            </motion.div>
            
            <motion.h1 {...fadeInUp} className="text-6xl md:text-[6rem] font-serif font-normal tracking-tight mb-8 text-[#1a1a19] leading-[0.95]">
              Stop sounding <br/>
              <span className="italic text-[#ea580c]">like a machine.</span>
            </motion.h1>
            
            <motion.p {...fadeInUp} className="text-xl text-[#5c5c58] mb-12 max-w-xl leading-relaxed font-light">
              Clients are rejecting ChatGPT templates. Proposal.dev is an editorial-grade AI engine that learns your unique writing style to generate Upwork proposals that actually get interviews.
            </motion.p>

            <motion.div {...fadeInUp} className="w-full max-w-lg">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address" 
                    className="flex-1 bg-transparent border-b border-[#1a1a19]/20 px-4 py-4 text-[#1a1a19] placeholder:text-[#1a1a19]/40 focus:outline-none focus:border-[#ea580c] transition-all text-lg"
                    required
                  />
                  <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a19] text-[#fdfdfc] font-medium hover:bg-[#ea580c] transition-colors rounded-none">
                    Request Access <ArrowUpRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 px-6 py-4 border border-[#1a1a19]/10 bg-[#fdfdfc] text-[#1a1a19] font-medium">
                  <Check className="w-5 h-5 text-[#ea580c]" />
                  <span>Access requested. We will review your portfolio.</span>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="lg:col-span-5 relative">
            <div className="bg-[#fdfdfc] border border-[#e4e4e0] p-8 shadow-2xl relative z-10 before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-20 before:mix-blend-overlay">
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-2xl text-[#1a1a19]">The "Anti-AI" Prompt</h4>
                  <p className="text-xs text-[#5c5c58] uppercase tracking-widest font-mono">Behind the scenes</p>
                </div>
                <button onClick={copyPrompt} className="text-[#5c5c58] hover:text-[#ea580c] transition-colors">
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <div className="font-mono text-[13px] leading-relaxed text-[#5c5c58] space-y-4">
                <p>{"{"}</p>
                <p className="pl-4">"role": "system",</p>
                <p className="pl-4">"content": "Analyze the following 3 past successful proposals. Extract the user's exact vocabulary level, paragraph spacing, and sign-off habits. DO NOT use the words 'delve', 'moreover', or 'tapestry'."</p>
                <p>{"}"}</p>
                <div className="h-px w-full bg-[#e4e4e0] my-6" />
                <p className="text-[#ea580c]">{"// Tone Match: 99.8%"}</p>
                <p className="text-[#1a1a19]">{"// AI Detection Score: 0%"}</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#ea580c]/20 rounded-full -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-[#1a1a19]/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 border-t border-[#e4e4e0] bg-[#f9f8f6]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-serif mb-16 max-w-2xl text-[#1a1a19]">
            The architecture of a winning bid.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileSignature, title: "Few-Shot Training", desc: "We feed Gemini your actual past proposals to clone your exact writing style." },
              { icon: Chrome, title: "In-Browser Extension", desc: "Draft and submit proposals directly inside the Upwork UI without switching tabs." },
              { icon: Briefcase, title: "Portfolio Context", desc: "We automatically cross-reference your GitHub to inject relevant past projects." },
              { icon: LayoutTemplate, title: "A/B Testing", desc: "Generate 3 variations per job and track which angles convert best." }
            ].map((feature, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex flex-col border-t border-[#e4e4e0] pt-8">
                <feature.icon className="w-6 h-6 text-[#ea580c] mb-6" />
                <h4 className="text-lg font-medium text-[#1a1a19] mb-3">{feature.title}</h4>
                <p className="text-[#5c5c58] text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="w-full py-40 bg-[#1a1a19] text-[#fdfdfc] text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl font-serif font-light mb-12 leading-tight">
            Elevate your freelance<br/>win rate today.
          </motion.h2>
          <motion.button {...fadeInUp} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-10 py-5 bg-[#fdfdfc] text-[#1a1a19] font-medium hover:bg-[#ea580c] hover:text-[#fdfdfc] transition-colors text-lg inline-flex items-center gap-2">
            Request Invite <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
      
      {/* Footer Minimal */}
      <footer className="w-full py-12 px-8 flex justify-between items-center text-xs font-mono text-[#5c5c58] max-w-[1400px] mx-auto uppercase tracking-widest">
        <p>© 2026 Proposal.dev</p>
        <p>Built for the top 1%</p>
      </footer>
    </main>
  );
}