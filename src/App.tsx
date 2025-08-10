import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, ChevronLeft, ChevronRight, Menu, X, Calendar, Briefcase, GraduationCap, Githu } from 'lucide-react';

// Replace these with your actual information
const PERSONAL_INFO = {
  name: "R Charan Bhardhwaj",
  title: "Robotics Engineer",
  photo: "/Portfolio/assets/Homepage/Cover Photo.jpg",
  about: "I work at the intersection of control systems, embedded design, and \
  robotics to create assistive technologies that move with purpose and adapt to people. Whether it’s a smart gripper or a wearable exoskeleton, I care about building systems that respond, not just react.",
  linkedin: "https://www.linkedin.com/in/r-charan-bhardhwaj",
  github: "https://github.com/R-Charan",
  email: "rcharanbhardhwaj@gmail.com",
  phone: "+91 7598565710",
  location: "Chennai, India"
};

const PROJECTS = [
  {
    id: "project1",
    title: "Grasp Planning",
    description: "Grasp Planning Executed on a Robotiq 3 Finger Underactuated Gripper mounted a UR5e Cobot to pick and place objects.",
    image: "/Portfolio/assets/Grasp_Planning/Grasp_Planning_Cover.png",
    github: "https://github.com/R-Charan/Grasp_Planning",
    skills: "ROS Noetic, Python, C++, Grasp Kinematics"
  },
  {
    id: "project2",
    title: "Gait Control of Lower Limb Exoskeleton",
    description: "Control the gait of a lower limb exoskeleton to facilitate better gait patterns for people with weaker lower body strength",
    image: "/Portfolio/assets/Project_Auxilium/Full_Setup.png",
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
    image: "/Portfolio/assets/AgriBot/Cover_photo.png",
    github: "https://github.com/krishnakvs10/eyrc-2021",
    skills: "ROS Noetic, OpenCV, Python"
  }
];

const SKILLS = {
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

const AFFILIATIONS = [
  {
    organization: "Robotics and Machine Intelligence Club",
    role: "Vice - President",
    period: "2023 - 2024",
    logo: "/Portfolio/assets/Homepage/RMI.png",
    description: "Led a team of 30+ members in organizing workshops, competitions, and research projects. Managed the club's internal affairs and ensured timely delivery of projects."
  },
  // {
  //   organization: "Chess Team, NITT",
  //   role: "Member",
  //   period: "2023 - 2024",
  //   logo: "/Portfolio/assets/Homepage/NITT.png",
  //   description: "Represented the institute in inter-collegiate chess tournaments. Achieved consistent top rankings and contributed to team strategy development and training sessions."
  // },
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

const WORK_EXPERIENCE = [
  {
    title: "Mechatronics Engineer",
    company: "Thryv Mobility Pvt Ltd",
    duration: "May 2024 - Present",
    description: "Designing an inclusive and portable exercise platform for wheelchair and non-wheelchair users.",
    skills: "BLDC Motors, Control Systems, PCB Design, Embedded Systems, System Modeling"
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "National Institute of Technology, Tiruchirapalli",
    duration: "Dec 2020 - May 2024",
    description: "Vice President @ Robotics Club",
    gpa: "8.67/10",
    coursework: "Mechanics, Mechatronics, Industrial Robotics, Deep Learning"
  },
  // Add more education entries
];

function App() {
  const navigate = useNavigate();
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md md:hidden transition-colors"
      >
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Mobile Navigation Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out z-50 md:hidden`}>
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          <div className="mt-8 space-y-4">
            {['home', 'experience & education', 'projects', 'skills', 'affiliations', 'hobbies', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg capitalize transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-40 hidden md:block transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {['home', 'experience & education', 'projects', 'skills', 'affiliations', 'hobbies', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <div className="block">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
          <DarkModeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section - Full Height */}
        <section
          id="home"
          className="relative bg-cover bg-center min-h-[calc(100vh-4rem)] flex items-center"
          style={{ backgroundImage: "url('/Portfolio/assets/Homepage/Background.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 dark:from-black/80 dark:to-black/60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold text-white text-center md:text-left">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl text-gray-200 dark:text-gray-300 leading-relaxed">
                  {PERSONAL_INFO.about}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 dark:hover:text-blue-400 flex items-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1bwJzd-vFea0b1D6AThBjXqKVGcbwfeiJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 dark:hover:text-blue-400 flex items-center transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                  <a
                    href="https://github.com/R-Charan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 dark:hover:text-blue-400 flex items-center transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Github
                  </a>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full transform translate-x-2 translate-y-2"></div>
                  <img
                    src={PERSONAL_INFO.photo}
                    alt={PERSONAL_INFO.name}
                    className="relative rounded-full w-64 h-64 object-cover object-[center_0%] shadow-lg border-4 border-white dark:border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience & education" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-colors">Work Experience & Education</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Experience Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors">
                  <Briefcase className="w-6 h-6 mr-2" />
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {WORK_EXPERIENCE.map((job, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">{job.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors">{job.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors">{job.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300 transition-colors">{job.description}</p>
                      {job.skills && (
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                            <span className="font-medium">Skills:</span> {job.skills}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center transition-colors">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education
                </h3>
                <div className="space-y-6">
                  {EDUCATION.map((edu, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">{edu.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors">{edu.duration}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors">{edu.description}</p>
                      {edu.gpa && <p className="text-gray-700 dark:text-gray-300 transition-colors">GPA: {edu.gpa}</p>}
                      {edu.coursework && (
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                            <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white dark:bg-gray-900 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors">Projects</h2>
            <div className="relative">
              <button
                onClick={() => scrollProjects('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg z-10 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              <div
                ref={projectsContainerRef}
                className="overflow-x-auto pb-4 hide-scrollbar"
              >
                <div className="flex space-x-6 min-w-max">
                  {PROJECTS.map((project) => (
                    <div
                      key={project.id}
                      className="w-[400px] flex-none bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <button
                          onClick={() => navigate(`/projects/${project.id}`)}
                          className="block text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                        >
                          {project.title}
                        </button>
                        <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-3 transition-colors">{project.description}</p>

                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">
                          Skills/Concepts: {project.skills}
                        </p>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => scrollProjects('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg z-10 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors">Skills & Expertise</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg transition-colors">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 pb-3 border-b border-gray-200 dark:border-gray-600 transition-colors">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors duration-200">
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        <span className="text-lg text-gray-700 dark:text-gray-300 transition-colors">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AffiliationsSection AFFILIATIONS={AFFILIATIONS} />

        {/* Hobbies Section */}
        <section id="hobbies" className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors">Hobbies</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {HOBBIES.map((hobby, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-200">
                  <span className="text-lg text-gray-700 dark:text-gray-300 font-medium transition-colors">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white dark:bg-gray-900 py-16 transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors">Get In Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center transition-colors">
              <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
                Interested in discussing about anything or exploring collaboration opportunities?
              </p>
              <div className="flex justify-center">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;