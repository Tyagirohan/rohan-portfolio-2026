import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolio';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
        // Fallback: Open email client
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setStatus({
          type: 'success',
          message: 'Opening your email client...'
        });
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email
        },
        publicKey
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please email me directly at ' + personalInfo.email
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section bg-gradient-to-b from-pcb-dark to-pcb-green/20 py-20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace mx-auto mb-4" />
          <p className="text-gray-400 font-mono text-lg">
            Establish Connection • Send Signal
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-pcb"
            >
              <h3 className="text-2xl font-bold text-pcb-gold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center flex-shrink-0 group-hover:bg-pcb-copper/40 transition-all">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono mb-1">Email</div>
                    <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center flex-shrink-0 group-hover:bg-pcb-copper/40 transition-all">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono mb-1">Phone</div>
                    <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-mono mb-1">Location</div>
                    <div className="text-white">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-pcb"
            >
              <h3 className="text-2xl font-bold text-pcb-gold mb-6">
                Connect Online
              </h3>
              
              <div className="space-y-3">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-pcb-dark/50 rounded-lg border border-pcb-copper/30 hover:border-pcb-gold transition-all group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">GitHub</div>
                    <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors">
                      @{personalInfo.links.github.split('/').pop()}
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-pcb-dark/50 rounded-lg border border-pcb-copper/30 hover:border-pcb-gold transition-all group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">💼</span>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors">
                      View Profile
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card-pcb">
              <h3 className="text-2xl font-bold text-pcb-gold mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pcb-dark border border-pcb-copper/50 rounded-lg focus:outline-none focus:border-pcb-gold text-white transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pcb-dark border border-pcb-copper/50 rounded-lg focus:outline-none focus:border-pcb-gold text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-pcb-dark border border-pcb-copper/50 rounded-lg focus:outline-none focus:border-pcb-gold text-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-pcb-dark border border-pcb-copper/50 rounded-lg focus:outline-none focus:border-pcb-gold text-white transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-lg border ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border-green-500 text-green-400'
                      : 'bg-red-500/20 border-red-500 text-red-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>✈️</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

