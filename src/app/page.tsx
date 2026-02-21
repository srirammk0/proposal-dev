"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, Briefcase, FileSignature, Target, Fingerprint, Chrome, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-gradient-to-b from-black to-orange-950 text-white selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-white/5">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          Proposal.dev
        </div>
        <button className="px-5 py-2 rounded-full bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm mb-8 text-orange-300">
          <Sparkles className="w-4 h-4" />
          <span>Currently in Stealth</span>
        </motion.div>
        
        <motion.h1 {...fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400 leading-tight">
          Never write a robotic<br/>cover letter again.
        </motion.h1>
        
        <motion.p {...fadeInUp} className="text-xl text-orange-200/80 mb-10 max-w-2xl leading-relaxed">
          The ultimate Upwork proposal generator that trains on your past successful bids to perfectly mimic your human tone, spelling quirks, and style.
        </motion.p>

        <motion.div {...fadeInUp} className="w-full max-w-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                required
              />
              <button type="submit" className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                Join Waitlist <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-medium justify-center">
              <Send className="w-5 h-5" />
              <span>We&apos;ll reach out when your spot opens!</span>
            </div>
          )}
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="w-full py-24 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Anti-AI Tool</h2>
            <p className="text-orange-200/60 max-w-xl mx-auto">Stop sending generic ChatGPT templates that clients instantly reject.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileSignature, title: "1. Upload Your Best", desc: "Feed the AI 3 to 5 of your past winning proposals to train it on your exact voice." },
              { icon: Target, title: "2. Paste the Job Link", desc: "Just drop the Upwork or Fiverr job URL. We scrape the requirements instantly." },
              { icon: Fingerprint, title: "3. Get Your Clone", desc: "Gemini Few-Shot prompting writes a bespoke proposal that sounds 100% like you." }
            ].map((step, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-orange-200/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-24 max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Top Earners</h2>
          <p className="text-orange-200/60 max-w-xl mx-auto">Freelancers spend thousands on Connects. Maximize your ROI.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Chrome, title: "Browser Extension", desc: "Draft proposals without leaving the Upwork tab using our Chrome integration." },
            { icon: Briefcase, title: "Portfolio Matching", desc: "We automatically select the 2 most relevant portfolio links to include in the bid." },
            { icon: CheckCircle2, title: "0% AI Detection", desc: "Our proprietary prompting technique guarantees it passes all AI text detectors." },
            { icon: Target, title: "A/B Testing", desc: "Generate 3 variations per job and track which one converts the best." }
          ].map((feature, i) => (
            <motion.div key={i} {...fadeInUp} className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
              <feature.icon className="w-6 h-6 text-orange-500 shrink-0" />
              <div>
                <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                <p className="text-orange-200/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-24 border-t border-white/5 bg-orange-950/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stop wasting your Connects.</h2>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
            Get Early Access
          </button>
        </div>
      </section>
      
      {/* Footer Mini */}
      <footer className="w-full py-8 text-center text-sm text-orange-200/40 border-t border-white/5">
        <p>© 2026 Proposal.dev. Built with OpenClaw.</p>
      </footer>
    </main>
  );
}