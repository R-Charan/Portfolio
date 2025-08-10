import React, { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

const AFFILIATIONS = [
  {
    organization: "Robotics and Machine Intelligence Club",
    role: "Vice - President",
    period: "2023 - 2024",
    logo: "/Portfolio/assets/Homepage/RMI.png",
    description:
      "Led a team of 30+ members in organizing workshops, competitions, and research projects. Managed the club's internal affairs and ensured timely delivery of projects.",
  },
  {
    organization: "Synergy, Mechanical Department Symposium",
    role: "Workshop Coordinator",
    period: "2021 - 2022",
    logo: "/Portfolio/assets/Homepage/Synergy.avif",
    description:
      "Coordinated and organized workshops for students during the Mechanical Department Symposium.",
  },
  {
    organization: "Ignitte, NITT",
    role: "Student Mentor",
    period: "2021 - 2022",
    logo: "/Portfolio/assets/Homepage/Ignitte.png",
    description:
      "Volunteered to teach chemistry for underprivileged higher secondary students during their preparation for competitive exams like JEE and NEET.",
  },
];

const AffiliationsSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect mobile screen
  useEffect(() => {
    const updateDeviceType = () => setIsMobile(window.innerWidth < 768);
    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  // Close active card when clicking outside it (mobile only)
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!isMobile || activeCard === null) return;
      const clickedInside = cardRefs.current[activeCard]?.contains(e.target as Node);
      if (!clickedInside) setActiveCard(null);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobile, activeCard]);

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    if (!isMobile) return;
    e.stopPropagation();
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="affiliations" className="bg-white dark:bg-gray-900 py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Affiliations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AFFILIATIONS.map((affiliation, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 cursor-pointer transition-all duration-300 border dark:border-gray-700 overflow-hidden"
              onClick={(e) => handleCardClick(index, e)}
            >
              {/* Main Content */}
              <div
                className={`relative z-10 transition-opacity duration-300 ${
                  isMobile
                    ? activeCard === index
                      ? 'opacity-0'
                      : 'opacity-100'
                    : 'group-hover:opacity-0'
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={affiliation.logo}
                    alt={affiliation.organization}
                    className="w-12 h-12 object-cover rounded-lg mr-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                      {affiliation.organization}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      {affiliation.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{affiliation.period}</span>
                </div>
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 p-6 flex flex-col justify-center items-center text-white transition-all duration-300 ${
                  isMobile
                    ? activeCard === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                    : 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'
                }`}
              >
                <p className="text-sm leading-relaxed text-white/90 mb-4 text-center">
                  {affiliation.description}
                </p>
                <div className="flex items-center justify-center text-blue-100">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{affiliation.period}</span>
                </div>
              </div>

              {/* Tap Indicator (Mobile Only) */}
              {isMobile && (
                <div
                  className={`absolute top-4 right-4 z-20 transition-transform duration-300 ${
                    activeCard === index
                      ? 'text-white rotate-180'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              )}

              {/* Border Animation */}
              <div
                className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                  isMobile
                    ? activeCard === index
                      ? 'border-blue-300/50'
                      : 'border-transparent'
                    : 'border-transparent group-hover:border-blue-300/50'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;