import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form submitted successfully');
        toast.success('Thank for Your Submission');
        e.target.reset();
      } else {
        setResult('Thank for your submission');
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 pt-5 pb-25 text-gray-700 dark:text-white dark:bg-slate-900"
    >
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 px-4 sm:gap-5 w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div
            className="flex pl-3 rounded-lg border border-gray-300
            dark:border-gray-600"
          >
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email</p>
          <div
            className="flex pl-3 rounded-lg border border-gray-300
            dark:border-gray-600"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            name="message"
            placeholder="Enter your message"
            className="w-full
            p-3 text-sm outline-none rounded-lg border border-gray-300 
            dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 
        rounded-full cursor-pointer bg-orange-400 hover:scale-103 transition-all"
        >
          Submit
        </button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
