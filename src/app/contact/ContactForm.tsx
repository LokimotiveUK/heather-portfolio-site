'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "88f7be93-6849-4b02-b92c-7f37f89b0d2e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Message sent successfully!', {
          description: "Thank you! I will get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error('Failed to send message', {
          description: data.message || "Please try again later.",
        });
      }
    } catch (err) {
      toast.error('Something went wrong', {
        description: "Please try again or email me directly.",
      });
    }
    
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="relative">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2" htmlFor="name">Name</label>
        <input required className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:outline-none focus:ring-0 placeholder-on-surface-variant/30 transition-colors" id="name" name="name" placeholder="Your full name" type="text" />
      </div>
      <div className="relative">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2" htmlFor="email">Email</label>
        <input required className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:outline-none focus:ring-0 placeholder-on-surface-variant/30 transition-colors" id="email" name="email" placeholder="email@example.com" type="email" />
      </div>
      <div className="relative">
        <label className="block text-[10px] tracking-[0.2em] uppercase text-primary mb-2" htmlFor="message">Message</label>
        <textarea required className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant py-4 font-headline text-xl focus:border-primary focus:outline-none focus:ring-0 resize-none placeholder-on-surface-variant/30 transition-colors" id="message" name="message" placeholder="Project details or inquiry..." rows={4}></textarea>
      </div>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-xs text-on-surface-variant/60 max-w-xs uppercase tracking-widest leading-loose">
          By sending this message, you acknowledge that your data will be handled with professional discretion.
        </p>
        <button 
          className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-headline uppercase tracking-[0.2em] text-sm hover:bg-primary-container transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
