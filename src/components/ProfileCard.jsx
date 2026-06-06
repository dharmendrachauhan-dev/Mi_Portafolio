import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import dharmendraImg from '../assets/icon/dharmendra.jpg';

// ==========================================
// 1. SEPARATED DATA CONFIGURATION
// ==========================================
const PROFILE_DATA = {
  aboutMeTag: "About Me",
  heading: "Passionate Backend Developer & AI Enthusiast crafting scalable APIs, intelligent systems, and seamless digital experiences that power modern applications.",
  description: "From secure APIs and authentication to database management and server logic, I create reliable backend systems that deliver fast performance and seamless user experiences.",
  avatarUrl: dharmendraImg,
  contactDetails: [
    { label: "Name:", value: "Dharmendra Chauhan" },
    { label: "Phone:", value: "+91 9967758893", href: "tel:+919967758893"},
    { label: "Email:", value: "dmma359800@gmail.com", href: "mailto:dmma359800@gmail.com" },
    { label: "Twitter:", value: "dharmchauhanji", href: "https://x.com/dharmchauhanji" },
  ],
  buttons: {
    primary: { text: "Contact me", link: "#contact" },
    secondary: { text: "Download my resume", link: "#resume" }
  }
};


export default function ProfileCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Avatar with Geometric Accents */}
        <div className="md:col-span-5 flex justify-center relative select-none">
          {/* Top-Left Orange Circle Accent */}
          <div className="absolute top-4 left-4 w-24 h-24 bg-[#ff6b4a] rounded-full -z-10" />
          
          {/* Main Avatar Container */}
          <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-purple-500 overflow-hidden bg-zinc-800 flex items-center justify-center relative">
            <img 
              src={PROFILE_DATA.avatarUrl} 
              alt={PROFILE_DATA.contactDetails[0].value}
              className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Bottom-Right Yellow Circle Accent */}
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#fcd34d] rounded-full" />
        </div>

        {/* Right Column: Content Section */}
        <div className="md:col-span-7 flex flex-col space-y-6">
          
          {/* "About Me" Badge */}
          <div>
            <span className="px-4 py-1.5 border bg-yellow-500 dark:border-white dark:text-white rounded-full text-xs font-medium tracking-wide text-zinc-800 dark:bg-zinc-900/50">
              {PROFILE_DATA.aboutMeTag}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl dark:text-white lg:text-5xl font-bold tracking-tight leading-tight text-zinc-800">
            {PROFILE_DATA.heading}
          </h1>

          {/* Description Paragraph */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            {PROFILE_DATA.description}
          </p>

          {/* Info Grid Box */}
          <div className="border border-zinc-900 dark:border-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {PROFILE_DATA.contactDetails.map((info, index) => (
              <div key={index} className="flex flex-col space-y-1">
                <span className="text-yellow-500 text-xs font-semibold uppercase tracking-wider">
                  {info.label}
                </span>
                <span
                className="text-zinc-800 dark:text-white text-sm sm:text-base">
                  {info.href ? (
                    <a 
                    href={info.href}
                    className='hover:underline duration-300 hover:text-purple-500'
                    >
                      {info.value}
                    </a>
                  ): (
                    info.value
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* Primary Action Button */}
            <a 
              href={PROFILE_DATA.buttons.primary.link}
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              {PROFILE_DATA.buttons.primary.text}
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Secondary Action Button */}
            <a 
              href={PROFILE_DATA.buttons.secondary.link}
              className="inline-flex items-center gap-2 dark:border-white dark:text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:bg-yellow-500 text-zinc-800 hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-400"
            >
              {PROFILE_DATA.buttons.secondary.text}
              <Download className="w-4 h-4 text-purple-500" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}