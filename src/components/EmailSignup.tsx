"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call (you'll need to implement actual backend)
    if (email && email.includes("@")) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full blur-xl" />
        <div className="relative flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-14 px-6 bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-gray-400 rounded-full focus:ring-2 focus:ring-white/50 focus:border-white/50 hover:bg-white/15 transition-all"
            required
          />
          <Button
            type="submit"
            className="h-14 px-8 bg-gradient-to-r from-white/90 to-gray-200/90 hover:from-white hover:to-gray-100 text-black font-semibold rounded-full shadow-lg shadow-white/25 transition-all hover:shadow-white/40"
          >
            Notify Me
          </Button>
        </div>
      </form>
      
      {status === "success" && (
        <p className="mt-4 text-center text-green-300 animate-in fade-in slide-in-from-bottom-2">
          ✓ You're on the list! We'll notify you when we launch.
        </p>
      )}
      
      {status === "error" && (
        <p className="mt-4 text-center text-red-300 animate-in fade-in slide-in-from-bottom-2">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
}