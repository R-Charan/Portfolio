import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, ChevronLeft, ChevronRight, Menu, X, Calendar } from 'lucide-react';

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
    image: "/Portfolio/assets/AgriBot/Cover.jpeg",
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
    logo: "/Portfolio/assets/Homepage/RMI.png"
  },
  {
    organization: "Chess Team, NITT",
    role: "Member",
    period: "2023 - 2024",
    logo: "/Portfolio/assets/Homepage/NITT.png"
  },
  {
    organization: "Synergy, Mechanical Department Symposium",
    role: "Workshop Coordinator",
    period: "2021 - 2022",
    logo: "/Portfolio/assets/Homepage/Synergy.avif"
  },
  {
    organization: "Ignitte, NITT",
    role: "Student Mentor",
    period: "2021 - 2022",
    logo: "/Portfolio/assets/Homepage/Ignitte.png"
  },
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
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md md:hidden"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Navigation Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          <div className="mt-8 space-y-4">
            {['home', 'projects', 'skills', 'affiliations', 'hobbies', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {['home', 'projects', 'skills', 'affiliations', 'hobbies', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 capitalize hover:text-blue-600"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section - Full Height */}
        <section
          id="home"
          className="relative bg-cover bg-center min-h-[calc(100vh-4rem)] flex items-center"
          style={{ backgroundImage: "url('/Portfolio/assets/Homepage/Background.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold text-white text-center md:text-left">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed">
                  {PERSONAL_INFO.about}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 flex items-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1bwJzd-vFea0b1D6AThBjXqKVGcbwfeiJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 flex items-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </div>
              </div>
              <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full transform translate-x-2 translate-y-2"></div>
                  <img
                    src={PERSONAL_INFO.photo}
                    alt={PERSONAL_INFO.name}
                    className="relative rounded-full w-64 h-64 object-cover object-[center_0%] shadow-lg border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Starts below the viewport */}
        <section id="projects" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Projects</h2>
            <div className="relative">
              <button
                onClick={() => scrollProjects('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div
                ref={projectsContainerRef}
                className="overflow-x-auto pb-4 hide-scrollbar"
              >
                <div className="flex space-x-6 min-w-max">
                  {PROJECTS.map((project) => (
                    <div
                      key={project.id}
                      className="w-[400px] flex-none bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <button
                          onClick={() => navigate(`/projects/${project.id}`)}
                          className="block text-xl font-semibold text-gray-900 hover:text-blue-600 transition duration-300"
                        >
                          {project.title}
                        </button>
                        <p className="mt-2 text-gray-500 line-clamp-3">{project.description}</p>

                        {/* New Skills Line */}
                        <p className="mt-2 text-sm text-gray-700 font-medium">
                          Skills/Concepts: {project.skills}
                        </p>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
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
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Skills & Expertise</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div key={category} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        <span className="text-lg text-gray-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations Section */}
        <section id="affiliations" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Affiliations</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {AFFILIATIONS.map((affiliation, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={affiliation.logo}
                      alt={affiliation.organization}
                      className="w-12 h-12 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{affiliation.organization}</h3>
                      <p className="text-gray-600">{affiliation.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{affiliation.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Hobbies</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {HOBBIES.map((hobby, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
                  <span className="text-lg text-gray-700 font-medium">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact Me</h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gray-600" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg text-blue-600 hover:text-blue-800">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gray-600" />
                <span className="text-lg text-gray-700">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gray-600" />
                <span className="text-lg text-gray-700">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;