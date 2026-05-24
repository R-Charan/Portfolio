import { FormEvent, useRef, useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronLeft, ChevronRight, Menu, X, Briefcase, GraduationCap } from 'lucide-react';
import AffiliationsSection, { Affiliation } from './components/AffiliationsSection';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  skills: string;
}

interface Skill {
  name: string;
  icon: string;
}

interface CareerItem {
  title?: string;
  company?: string;
  degree?: string;
  institution?: string;
  duration: string;
  description: string;
  skills?: string;
  gpa?: string;
  coursework?: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'affiliations', label: 'Affiliations' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojbnvlv';
const HOME_SCROLL_STORAGE_KEY = 'portfolio-home-scroll-y';

const saveHomeScrollPosition = () => {
  sessionStorage.setItem(HOME_SCROLL_STORAGE_KEY, String(window.scrollY));
};

// Replace these with your actual information
const PERSONAL_INFO = {
  name: "R Charan Bhardhwaj",
  title: "Robotics Engineer",
  photo: "/Portfolio/assets/Homepage/Cover Photo.jpg",
  about: "I work at the intersection of control systems, embedded design, and \
  robotics to create assistive technologies that move with purpose and adapt to people. Whether it's a smart gripper or a wearable exoskeleton, I care about building systems that respond, not just react.",
  linkedin: "https://www.linkedin.com/in/r-charan-bhardhwaj",
  github: "https://github.com/R-Charan",
  email: "rcharanbhardhwaj@gmail.com",
  phone: "+91 7598565710",
  location: "Chennai, India"
};

const PROJECTS: Project[] = [
  {
    id: "project1",
    title: "Grasp Planning",
    description: "Grasp Planning Executed on a Robotiq 3 Finger Underactuated Gripper mounted a UR5e Cobot to pick and place objects.",
    image: "/Portfolio/assets/Grasp_Planning/Grasp_Planning_Cover.webp",
    github: "https://github.com/R-Charan/Grasp_Planning",
    skills: "ROS Noetic, Python, C++, Grasp Kinematics"
  },
  {
    id: "project2",
    title: "Gait Control of Lower Limb Exoskeleton",
    description: "Control the gait of a lower limb exoskeleton to facilitate better gait patterns for people with weaker lower body strength",
    image: "/Portfolio/assets/Project_Auxilium/Full_Setup.webp",
    github: "https://github.com/R-Charan/Project_Auxilium",
    skills: "Embedded Systems, SolidWorks, MATLAB"
  },
  {
    id: "project3",
    title: "Virya - The Rover",
    description: "Build a Rover with 6 wheels and Adjustable Rocker-Bogie Suspension and Ideal steering to do data collection for terrain mapping when deployed on extra-terrestrial surfaces.",
    image: "/Portfolio/assets/Virya/Cover.webp",
    github: "https://github.com/RMI-NITT/ROVER/tree/robofest",
    skills: "Arduino IDE, SolidWorks, ROS Noetic"
  },
  {
    id: "project4",
    title: "Assistance in Navigation for the Visually Impaired",
    description: "A solution proposed to help the visually impaired navigate with the help of camera module, ESP32, LiDAR and Jetson Nano.",
    image: "/Portfolio/assets/ANVI/VQAS.webp",
    github: "https://github.com/RMI-NITT/ANVI",
    skills: "Arduino IDE, Deep Learning"
  },
  {
    id: "project5",
    title: "AgriBot",
    description: "Developed an algorithm for a robot to autonomously transverse the arena and detect ripe fruits using OpenCV using thresholding techniques.",
    image: "/Portfolio/assets/AgriBot/Cover_photo.webp",
    github: "https://github.com/krishnakvs10/eyrc-2021",
    skills: "ROS Noetic, OpenCV, Python"
  }
];

const SKILLS: Record<string, Skill[]> = {
  "Programming Languages": [
    {
      name: "Embedded C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
    },
    {
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      name: "MATLAB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg"
    }
  ],
  "Machine Learning and Computer Vision": [
    {
      name: "TensorFlow",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "PyTorch",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg"
    },
    {
      name: "OpenCV",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg"
    }
  ],
  "Frameworks": [
    {
      name: "ROS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ros/ros-original.svg"
    },
    {
      name: "ROS 2",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ros/ros-original.svg"
    },
    {
      name: "Gazebo",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gazebo/gazebo-original.svg"
    },
    {
      name: "MuJoCo",
      icon: "https://avatars.githubusercontent.com/u/8596759?s=200&v=4"
    }
  ],
  "Embedded Systems": [
    {
      name: "Arduino",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original.svg"
    },
    {
      name: "Raspberry Pi",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg"
    },
    {
      name: "Espressif's IDF",
      icon: "https://avatars.githubusercontent.com/u/9460735?s=200&v=4"
    }
  ],
  "Project Management": [
    {
      name: "Jira",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg"
    },
    {
      name: "Confluence",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg"
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
    }
  ]
};

const HOBBIES = [
  "Photography",
  "Chess",
  "Reading",
  "Flautist",
  "Badminton"
];

const AFFILIATIONS: Affiliation[] = [
  {
    organization: "Robotics and Machine Intelligence Club",
    role: "Vice - President",
    period: "2023 - 2024",
    logo: "/Portfolio/assets/Homepage/RMI.png",
    description: "Led a team of 30+ members in organizing workshops, competitions, and research projects. Managed the club's internal affairs and ensured timely delivery of projects."
  },
  {
    organization: "Synergy, Mechanical Department Symposium",
    role: "Workshop Coordinator",
    period: "2021 - 2022",
    logo: "/Portfolio/assets/Homepage/Synergy.avif",
    description: "Coordinated and organized workshops for students during the Mechanical Department Symposium."
  },
  {
    organization: "Ignitte, NITT",
    role: "Student Mentor",
    period: "2021 - 2022",
    logo: "/Portfolio/assets/Homepage/Ignitte.png",
    description: "Volunteered to teach chemistry for underprevileged higher secondary students during their preparation competitive exams like JEE and NEET."
  },
];

const WORK_EXPERIENCE: CareerItem[] = [
  {
    title: "Mechatronics Engineer",
    company: "Thryv Mobility Pvt Ltd",
    duration: "May 2024 - Present",
    description: "Designing an inclusive and portable exercise platform for wheelchair and non-wheelchair users.",
    skills: "BLDC Motors, Control Systems, PCB Design, Embedded Systems, System Modeling"
  },
];

const EDUCATION: CareerItem[] = [
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "National Institute of Technology, Tiruchirapalli",
    duration: "Dec 2020 - May 2024",
    description: "Vice President @ Robotics Club",
    gpa: "8.67/10",
    coursework: "Mechanics, Mechatronics, Industrial Robotics, Deep Learning"
  },
];

function App() {
  const navigate = useNavigate();
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsContainerRef.current) {
      const scrollAmount = 420;
      const scrollPosition = direction === 'left'
        ? projectsContainerRef.current.scrollLeft - scrollAmount
        : projectsContainerRef.current.scrollLeft + scrollAmount;

      projectsContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus('sending');

    const subject = `${contactForm.name || 'Portfolio Contact'} - WEBSITE`;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          _replyto: contactForm.email,
          _subject: subject,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setContactForm({ name: '', email: '', message: '' });
      setContactStatus('sent');
    } catch {
      setContactStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg border border-slate-200 bg-white/95 p-2 shadow-md backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-900/95"
        aria-label="Open navigation"
      >
        <Menu className="h-6 w-6 text-slate-700 dark:text-slate-200" />
      </button>

      <div className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden dark:border-slate-800 dark:bg-slate-900 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-4 top-4 rounded-lg p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6 text-slate-700 dark:text-slate-200" />
          </button>
          <div className="mt-10 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <nav className="fixed left-0 right-0 top-0 z-40 hidden border-b border-slate-200 bg-white/90 backdrop-blur md:block dark:border-slate-800 dark:bg-slate-950/85">
        <div className="section-shell">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-semibold text-slate-950 dark:text-white"
            >
              {PERSONAL_INFO.name}
            </button>
            <div className="flex items-center gap-6">
              <div className="flex gap-5">
                {NAV_ITEMS.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-4 right-4 z-50 rounded-full border border-slate-200 bg-white p-2 shadow-lg md:hidden dark:border-slate-800 dark:bg-slate-900">
        <DarkModeToggle />
      </div>

      <main className="pt-16">
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/Portfolio/assets/Homepage/Background.webp')" }}
        >
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,47,73,0.86),rgba(15,23,42,0.62),rgba(15,23,42,0.48))]" />
          <div className="section-shell relative z-10 py-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  {PERSONAL_INFO.title}
                </p>
                <h1 className="text-4xl font-bold text-white sm:text-6xl">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                  {PERSONAL_INFO.about}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://drive.google.com/file/d/1Rp0ik2txbLHpt3TsWaiKfsctHayQGuUO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/20 transition-colors hover:bg-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Resume
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-200" />
                    {PERSONAL_INFO.location}
                  </span>
                  <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${PERSONAL_INFO.email}`}>
                    <Mail className="h-4 w-4 text-cyan-200" />
                    {PERSONAL_INFO.email}
                  </a>
                  <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}>
                    <Phone className="h-4 w-4 text-cyan-200" />
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={PERSONAL_INFO.name}
                  width={320}
                  height={320}
                  className="aspect-square w-64 rounded-full border-4 border-white/90 object-cover object-[center_0%] shadow-2xl shadow-slate-950/50 sm:w-80"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-slate-50 py-20 transition-colors dark:bg-slate-900">
          <div className="section-shell">
            <div className="mb-10 text-center">
              <p className="section-kicker">Background</p>
              <h2 className="section-title">Work Experience & Education</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-5 flex items-center text-xl font-bold text-slate-900 dark:text-white">
                  <Briefcase className="mr-2 h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                  Work Experience
                </h3>
                {WORK_EXPERIENCE.map((job, index) => (
                  <article key={index} className="surface-card p-6">
                    <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">{job.duration}</p>
                    <h4 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{job.title}</h4>
                    <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">{job.company}</p>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">{job.description}</p>
                    {job.skills && <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Skills: {job.skills}</p>}
                  </article>
                ))}
              </div>
              <div>
                <h3 className="mb-5 flex items-center text-xl font-bold text-slate-900 dark:text-white">
                  <GraduationCap className="mr-2 h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                  Education
                </h3>
                {EDUCATION.map((edu, index) => (
                  <article key={index} className="surface-card p-6">
                    <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">{edu.duration}</p>
                    <h4 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{edu.degree}</h4>
                    <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">{edu.institution}</p>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">{edu.description}</p>
                    {edu.gpa && <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">GPA: {edu.gpa}</p>}
                    {edu.coursework && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Relevant Coursework: {edu.coursework}</p>}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white py-20 transition-colors dark:bg-slate-950">
          <div className="section-shell">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Selected Work</p>
                <h2 className="section-title">Projects</h2>
              </div>
              <div className="hidden gap-2 sm:flex">
                <button
                  onClick={() => scrollProjects('left')}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  aria-label="Scroll projects left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollProjects('right')}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  aria-label="Scroll projects right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div ref={projectsContainerRef} className="hide-scrollbar overflow-x-auto pb-4">
              <div className="flex min-w-max gap-6">
                {PROJECTS.map((project) => (
                  <article key={project.id} className="surface-card flex w-[min(84vw,390px)] flex-none flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl">
                    <button
                      onClick={() => {
                        saveHomeScrollPosition();
                        navigate(`/projects/${project.id}`);
                      }}
                      className="block text-left"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        width={390}
                        height={208}
                        className="h-52 w-full object-cover"
                      />
                    </button>
                    <div className="flex flex-1 flex-col p-6">
                      <button
                        onClick={() => {
                          saveHomeScrollPosition();
                          navigate(`/projects/${project.id}`);
                        }}
                        className="text-left text-xl font-semibold text-slate-950 transition-colors hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300"
                      >
                        {project.title}
                      </button>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                      <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">Skills/Concepts: {project.skills}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          onClick={() => {
                            saveHomeScrollPosition();
                            navigate(`/projects/${project.id}`);
                          }}
                          className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
                        >
                          Details
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-50 py-20 transition-colors dark:bg-slate-900">
          <div className="section-shell">
            <div className="mb-10 text-center">
              <p className="section-kicker">Toolkit</p>
              <h2 className="section-title">Skills & Expertise</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <section key={category} className="surface-card p-6">
                  <h3 className="border-b border-slate-200 pb-3 text-xl font-semibold text-slate-900 dark:border-slate-800 dark:text-white">
                    {category}
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex min-h-14 items-center gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white p-1.5 shadow-sm">
                          <img
                            src={skill.icon}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            width={32}
                            height={32}
                            className="h-7 w-7 object-contain"
                          />
                        </span>
                        <span className="text-base font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <AffiliationsSection affiliations={AFFILIATIONS} />

        <section id="hobbies" className="bg-slate-50 py-20 transition-colors dark:bg-slate-900">
          <div className="section-shell">
            <div className="mb-10 text-center">
              <p className="section-kicker">Outside Work</p>
              <h2 className="section-title">Hobbies</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {HOBBIES.map((hobby) => (
                <div key={hobby} className="surface-card p-5 text-center">
                  <span className="text-base font-semibold text-slate-700 dark:text-slate-200">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20 transition-colors dark:bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Get In Touch</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
              Interested in discussing about anything or exploring collaboration opportunities?
              </p>
            </div>
            <form onSubmit={handleContactSubmit} className="surface-card mt-10 p-6 text-left sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={(event) => {
                      setContactForm((form) => ({ ...form, name: event.target.value }));
                      setContactStatus('idle');
                    }}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={(event) => {
                      setContactForm((form) => ({ ...form, email: event.target.value }));
                      setContactStatus('idle');
                    }}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={contactForm.message}
                  onChange={(event) => {
                    setContactForm((form) => ({ ...form, message: event.target.value }));
                    setContactStatus('idle');
                  }}
                  className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Write your message here..."
                />
              </label>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={contactStatus === 'sending'}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  <Mail className="h-4 w-4" />
                  {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
              {contactStatus === 'sent' && (
                <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
                  Message sent. I will get it in my inbox.
                </p>
              )}
              {contactStatus === 'error' && (
                <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
                  Something went wrong. Please try again or reach out on LinkedIn.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
