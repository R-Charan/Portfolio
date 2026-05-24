import { MouseEvent as ReactMouseEvent, useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

export interface Affiliation {
  organization: string;
  role: string;
  period: string;
  logo: string;
  description: string;
}

interface AffiliationsSectionProps {
  affiliations: Affiliation[];
}

const AffiliationsSection = ({ affiliations }: AffiliationsSectionProps) => {
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
    const handleOutsideClick = (e: globalThis.MouseEvent) => {
      if (!isMobile || activeCard === null) return;
      const clickedInside = cardRefs.current[activeCard]?.contains(e.target as Node);
      if (!clickedInside) setActiveCard(null);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobile, activeCard]);

  const handleCardClick = (index: number, e: ReactMouseEvent) => {
    if (!isMobile) return;
    e.stopPropagation();
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="affiliations" className="bg-white py-20 transition-colors dark:bg-slate-950">
      <div className="section-shell">
        <div className="mb-10 text-center">
          <p className="section-kicker">Leadership</p>
          <h2 className="section-title">Affiliations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative min-h-56 overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/20"
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
                  <span className="mr-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={affiliation.logo}
                      alt={affiliation.organization}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </span>
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
                className={`absolute inset-0 bg-slate-950 p-6 flex flex-col justify-center items-center text-white transition-all duration-300 dark:bg-cyan-950 ${
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
