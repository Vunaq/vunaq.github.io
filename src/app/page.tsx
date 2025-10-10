"use client";

import CountdownTimer from "@/components/CountdownTimer";
import AnimatedBackground from "@/components/AnimatedBackground";
import EmailSignup from "@/components/EmailSignup";
import { Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Light from the sky - subtle top gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" style={{ zIndex: 1 }} />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-24">
        <div className="max-w-7xl w-full mx-auto text-center space-y-32">
          
          {/* Logo - Simplified and cleaner */}
          <div className="space-y-16 animate-in fade-in duration-1000">
            <div className="flex items-center justify-center gap-8">
              {/* Main logo */}
              <div className="relative w-[320px] md:w-[480px] h-[90px] md:h-[140px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/sample-1760089435826.png"
                  alt="Vunaq Logo"
                  fill
                  className="object-contain filter brightness-0 invert"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="animate-in fade-in duration-1000 delay-200">
            <CountdownTimer />
          </div>

          {/* Tagline - More whitespace */}
          <div className="space-y-12 animate-in fade-in duration-1000 delay-300">
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              Something extraordinary is being built.
            </p>
          </div>

          {/* Email Signup - Simplified */}
          <div className="animate-in fade-in duration-1000 delay-500 space-y-12">
            <h3 className="text-2xl md:text-3xl font-light text-white/90 tracking-wide">
              Get Early Access
            </h3>
            <EmailSignup />
          </div>

          {/* Social Links - Minimal */}
          <div className="flex gap-8 justify-center items-center pt-16 animate-in fade-in duration-1000 delay-700">
            <a
              href="#"
              className="p-3 text-white/40 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 text-white/40 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 text-white/40 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* Footer */}
          <div className="pt-16 text-white/30 text-sm animate-in fade-in duration-1000 delay-1000 font-light">
            <p>© 2025 Vunaq. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}