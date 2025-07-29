import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Send, Heart } from 'lucide-react';
import { sendEmail } from '@/lib/sendEmail';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await sendEmail({
        name: formState.name,
        email: formState.email,
        message: formState.message,
      });
      setSent(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
    setSending(false);
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
              <input type="text" id="name" name="name" className="pixel-input mt-2" required value={formState.name} onChange={handleChange} />
            </div>
            <div className="group relative">
              <label htmlFor="email" className="pixel-font text-xl text-[var(--pixel-accent-2)]">Email:</label>
              <input type="email" id="email" name="email" className="pixel-input mt-2" required value={formState.email} onChange={handleChange} />
            </div>
            <div className="group relative">
              <label htmlFor="message" className="pixel-font text-xl text-[var(--pixel-accent-3)]">Message:</label>
              <textarea id="message" name="message" className="pixel-textarea mt-2" required value={formState.message} onChange={handleChange}></textarea>
            </div>
            <div className="text-center">
              <Button type="submit" className="pixel-button bg-[var(--pixel-accent-4)] group" disabled={sending}>
                <Send className="w-5 h-5 mr-2 group-hover:animate-ping" />
                {sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
                <Heart className="w-5 h-5 ml-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              {error && <div className="text-red-500 mt-2">{error}</div>}
              {sent && <div className="text-green-500 mt-2">Message sent successfully!</div>}
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;