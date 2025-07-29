import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Send, Heart } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = `Message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // IMPORTANT: Replace with your actual email address
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact">
      <div className="container mx-auto max-w-3xl px-4">
        <SectionTitle>Contact.msg</SectionTitle>
        <motion.div
          className="pixel-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <label htmlFor="name" className="pixel-font text-xl text-[var(--pixel-accent-1)]">Name:</label>
              <input type="text" id="name" name="name" className="pixel-input mt-2" required />
            </div>
            <div className="group relative">
              <label htmlFor="email" className="pixel-font text-xl text-[var(--pixel-accent-2)]">Email:</label>
              <input type="email" id="email" name="email" className="pixel-input mt-2" required />
            </div>
            <div className="group relative">
              <label htmlFor="message" className="pixel-font text-xl text-[var(--pixel-accent-3)]">Message:</label>
              <textarea id="message" name="message" className="pixel-textarea mt-2" required></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" className="pixel-button bg-[var(--pixel-accent-4)] group">
                <Send className="w-5 h-5 mr-2 group-hover:animate-ping" />
                Send Message
                <Heart className="w-5 h-5 ml-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;