"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileSignature, Fingerprint, Award, Check, BookOpen, Quote } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-slate-900 font-sans selection:bg-orange-200 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-8 max-w-6xl mx-auto border-b border-orange-900/10">
        <div className="flex items-center gap-2 font-serif font-black text-2xl tracking-tighter text-orange-950">
          <FileSignature className="w-6 h-6 text-orange-600" />
          Proposal.dev
        </div>
        <button className="px-6 py-2 rounded-full border border-orange-900/20 text-orange-950 text-sm font-medium hover:bg-orange-50 transition-colors">
          Sign In
        </button>
      </nav>

      {/* Elegant Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-40 px-6 text-center max-w-4xl mx-auto relative z-10">
        <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-xs mb-8 text-orange-800 font-medium tracking-wide uppercase">
          <Award className="w-3.5 h-3.5" />
          <span>For Top-Rated Freelancers</span>
        </motion.div>
        
        <motion.h1 {...fadeInUp} className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-8 text-orange-950 leading-[1.1]">
          Never write a robotic cover letter again.
        </motion.h1>
        
        <motion.p {...fadeInUp} className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-light">
          Clients instantly reject ChatGPT templates. We built the first Upwork proposal engine that trains on your past successful bids to perfectly mimic your human tone, spelling quirks, and personal style.
        </motion.p>

        <motion.div {...fadeInUp} className="w-full max-w-md relative z-20">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-3 bg-white p-2 rounded-2xl shadow-xl shadow-orange-900/5 ring-1 ring-orange-900/10">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full bg-transparent px-5 py-4 text-orange-950 placeholder:text-slate-400 focus:outline-none transition-all"
                required
              />
              <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30">
                Join Beta <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-6 py-4 bg-emerald-50 text-emerald-700 rounded-2xl justify-center font-medium ring-1 ring-emerald-200 shadow-xl shadow-emerald-900/5">
              <Check className="w-5 h-5" />
              <span>You&apos;re on the list. We&apos;ll be in touch.</span>
            </div>
          )}
        </motion.div>

        {/* Floating Document Mockup */}
        <motion.div initial={{ opacity: 0, y: 100, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 2 }} transition={{ duration: 1, delay: 0.3 }} className="absolute -z-10 top-[60%] w-full max-w-3xl left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="bg-white p-10 rounded-3xl shadow-[0_40px_100px_-20px_rgba(234,88,12,0.15)] ring-1 ring-orange-900/5 text-left rotate-2 transform-gpu">
            <h4 className="font-serif font-bold text-2xl text-orange-950 mb-6 border-b border-orange-100 pb-4">Re: Looking for Senior React Developer</h4>
            <div className="space-y-4 font-serif text-slate-500 text-lg leading-relaxed">
              <p>Hi Michael,</p>
              <p>Unlike the 50 other AI proposals you just read, I actually looked at your architecture diagram. You don't need a massive Redux refactor right now, you just need to decouple the cart state from your deeply nested components.</p>
              <p className="blur-[4px] select-none">I solved this exact problem for an e-commerce client last year using Zustand. We dropped their bundle size by 30% and improved TTI by 2 seconds.</p>
              <p className="blur-[4px] select-none">Let's hop on a quick call tomorrow to discuss how we can implement this without breaking your current sprint cycle.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spacer for floating mockup */}
      <div className="h-64 md:h-96 w-full bg-gradient-to-b from-transparent to-white" />

      {/* Alternating Features Section */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div {...fadeInUp} className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-8">
                <Fingerprint className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 leading-tight">Your Voice. Perfected.</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">Upload 3 of your past winning proposals. Our Few-Shot Gemini engine analyzes your vocabulary, formatting habits, and unique sales angles to create a profile that sounds exactly like you.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="flex-1 w-full aspect-square bg-orange-50 rounded-3xl border border-orange-100 relative overflow-hidden flex items-center justify-center">
               <div className="w-64 h-64 border-[0.5px] border-orange-300 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                 <div className="w-48 h-48 border-[0.5px] border-orange-400 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                   <div className="w-32 h-32 bg-orange-200/50 rounded-full backdrop-blur-3xl" />
                 </div>
               </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <motion.div {...fadeInUp} className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-8">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 leading-tight">Auto-Portfolio Matching</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">Connect your GitHub or Dribbble. When you paste a job link, Proposal.dev instantly cross-references the client's requirements and automatically injects the two most relevant portfolio links into your pitch.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="flex-1 w-full p-8 bg-orange-950 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="space-y-4">
                 <div className="h-4 w-3/4 bg-orange-900/50 rounded-full" />
                 <div className="h-4 w-1/2 bg-orange-900/50 rounded-full" />
                 <div className="p-4 rounded-xl bg-orange-900/30 border border-orange-800/50 mt-8">
                   <p className="text-orange-300 font-medium mb-2">Relevant Experience Found:</p>
                   <p className="text-orange-100/60 text-sm">github.com/your-username/ecommerce-dashboard</p>
                 </div>
               </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-32 bg-orange-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Quote className="w-12 h-12 text-orange-500/30 mx-auto mb-8" />
          <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">Stop wasting your Connects.</h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-10 py-5 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-400 transition-colors shadow-2xl shadow-orange-500/20 text-lg">
            Request Early Access
          </button>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="w-full py-12 text-center text-sm font-medium text-slate-500 bg-white">
        <p>© 2026 Proposal.dev. Built with OpenClaw.</p>
      </footer>
    </main>
  );
}