"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, Briefcase } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-black to-orange-950 text-white selection:bg-orange-500/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm mb-8 text-orange-300">
          <Sparkles className="w-4 h-4" />
          <span>Proposal.dev is currently in stealth</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400">
          Never write a robotic cover letter again.
        </h1>
        
        <p className="text-xl text-orange-200 mb-10 max-w-2xl leading-relaxed">
          The ultimate Upwork proposal generator that trains on your past successful bids to perfectly mimic your human tone, spelling quirks, and style.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-3 mb-8">
            <div className="relative flex-1">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                required
              />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)]">
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-medium mb-8"
          >
            <Send className="w-5 h-5" />
            <span>We'll reach out when your spot opens!</span>
          </motion.div>
        )}

        <div className="flex gap-8 text-sm text-orange-300/60 mt-8">
          <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> 0% AI Detection Score</div>
          <div className="flex items-center gap-2">🔗 Upwork Chrome Extension</div>
          <div className="flex items-center gap-2">📝 Few-Shot Tone Matching</div>
        </div>
      </motion.div>
    </main>
  );
}