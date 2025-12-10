// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ---- validation ----
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Enter your name';
    if (!formData.email.trim()) newErrors.email = 'Enter your email';
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Enter your phone number';
    if (!formData.message.trim()) newErrors.message = 'Enter a message';
    return newErrors;
  };

  // ---- handle submit ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateForm();
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'cf136688-972c-47e3-aa49-3791f480a430');
    formDataToSend.append('replyto', 'sender'); // ← autoresponder enabled
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('replyto', 'sender');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });
      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Something went wrong. Try again.');
      }
    } catch (error) {
      alert('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-24 px-6 bg-gray-50 border-t border-gray-200"
      >
        {/* TITLE */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Us
          </span>
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-6">
              Have a project idea or need help growing your business online?
              Drop a message — we’ll get back to you shortly.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-3 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white shadow hover:bg-pink-600 hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white shadow hover:bg-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-white shadow hover:bg-sky-500 hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
            </div>

            {/* GOOGLE MAPS */}
            <div className="mt-8 rounded-lg overflow-hidden shadow">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11623330123!2d72.7410992!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b4f4f0d17%3A0x2a66c486d1825d3f!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1697000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* NAME */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* PHONE */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone Number"
                className={`w-full p-4 rounded-lg border ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.phone}
                </motion.p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className={`w-full p-4 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {errors.message && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* THANK YOU POPUP */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative z-10 max-w-lg mx-6 bg-white rounded-2xl shadow-2xl p-8 text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Thank you!
              </h4>
              <p className="text-gray-600 mb-6">
                Your message has been sent. We'll contact you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
