import { useNavigate, useParams } from 'react-router-dom';
import { Home, Github, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';


interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  github?: string;
  youtube?: string;
}

const PROJECTS: Record<string, ProjectDetail> = {
  'project1': {
    id: 'project1',
    title: 'Grasp Planning on a Robotiq 3 Finger Gripper',
    description: `**Institution**: IIT Madras - VM Robotics Research & Teaching Lab
Duration: May 2023 - December 2023  
Tools: ROS, GraspIt!, MoveIt!, Gazebo, Intel RealSense D455, UR5e, RobotIQ Gripper, MATLAB, Arduino

This project focused on developing grasping and manipulation capabilities using a 3-finger adaptive RobotIQ gripper mounted on a UR5e robotic arm. The goal was to enable autonomous grasping of primitive shapes by integrating perception, grasp planning, motion control, and feedback-based slip detection.

**Key Contributions:**
- Vision-Based Grasp Detection: Used Intel RealSense D455 RGB-D data to extract object geometry for planning.
- Grasp Planning with GraspIt!: Simulated and evaluated stable grasps using the EigenGrasp planner for reduced complexity.
- Motion Execution: Integrated MoveIt! and enabled cross-system ROS node communication to control the UR5e.
- Slip Detection: Implemented Force Sensitive Resistors (FSRs) with Arduino and MATLAB to detect and respond to slip during grasp.
- Mathematical Modeling: Analyzed grasp dynamics including wrenches, friction cones, and quality metrics.
- 3D Model Integration: Automated STL import and scaling for object mesh-based grasp planning.

**Outcome:**
Successfully built an end-to-end robotic grasping pipeline from perception to physical execution, demonstrating robust manipulation and feedback control in real-world conditions.
      
**Internship Report:** The internship report can be accessed [here](https://doi.org/10.5281/zenodo.16679624).
    `,
    images: [
      {
        url: '/Portfolio/assets/Grasp_Planning/UR5e_simulation.webp',
        caption: 'Full Setup in ROS Noetic with Gazebo'
      },
      {
        url: '/Portfolio/assets/Grasp_Planning/Obstacle.webp',
        caption: 'Grasp Planning considering Obstacle Positioning'
      },
      {
        url: '/Portfolio/assets/Grasp_Planning/Cylinder.webp',
        caption: 'Grasp Planning for a cylindrical object'
      }
    ],
    github: 'https://github.com/R-Charan/Grasp_Planning'
  },

  // New project added here
  'project2': {
    id: 'project2',
    title: 'Gait Control of Lower Limb Exoskeleton',
    description: `
## Project Overview

This project presents an innovative underactuated lower limb exoskeleton that achieves remarkable human strength augmentation 
while maintaining natural gait patterns. Our breakthrough 4-DOF approach (hip and knee joints only) provides effective power augmentation 
at reduced complexity and cost compared to traditional 6+ DOF systems.
The exoskeleton employs a hybrid PD + Bang-Bang controller with real-time gait pattern tracking, enabling users to carry heavy loads with 
significantly reduced muscle effort while preserving natural walking biomechanics.

## Technical Stack

**Hardware:**
- BLDC motors with torque and position control
- Inertial Measurement Unit (IMU) for real-time feedback
- Custom microcontroller with integrated motor drivers
- 4-DOF mechanical frame (bilateral hip and knee joints)

**Software:**
- Real-time angle monitoring system
- Speed-to-duty cycle mapping with threshold control
- Custom PCB design for motor control integration

**Control Architecture:**
- Hybrid PD + Bang-Bang control system
- Multi-point ground contact stability
- Motion compensation algorithms

## Notable Achievements

- **400% strength augmentation** validated through comprehensive EMG testing
- **5x peak strength amplification** capability demonstrated
- **Real-time gait control** with stable, repeating gait cycles
- **Successful prototype validation** showing significant reduction in muscle activation during load-bearing tasks
- **Cost-effective approach** making exoskeleton technology more accessible for practical applications

## Research Team
**Project Members:**
- Adithya Venkata Narayanan - 111120001
- R Charan Bhardhwaj - 111120109

**Faculty Guides:**
- Dr. N Siva Shanmugam (Internal Guide)
- Dr. D Ezhilarasi (Co-Guide)

**Thesis:** The thesis can be accessed [here](https://doi.org/10.5281/zenodo.16747860).

**Institution:** National Institute of Technology, Tiruchirapalli (NITT)`,
    images: [
      {
        url: '/Portfolio/assets/Project_Auxilium/Full_Setup.webp',
        caption: 'Full Setup'
      },
      {
        url: '/Portfolio/assets/Project_Auxilium/Single_Leg.webp',
        caption: 'Single Leg'
      },
      {
        url: '/Portfolio/assets/Project_Auxilium/PCB.webp',
        caption: 'PCB design for master slave connection of motors'
      }
    ],
    github: 'https://github.com/R-Charan/Project_Auxilium',
  },

  'project3': {
    id: 'project3',
    title: 'Virya - The Rover',
    description: `
# Project Overview:
This project focuses on developing a rover with rocker bogie suspension mechanism that is capable to traversing any terrain. The skeletal frame was
designed using SolidWorks and the was fabricated using Al extrusion rods. The rover is powered by an Arduino Uno and a 12V battery. The rover is equipped
with IMU sensor to measure the orientation and distance travelled, a kinect camera to detect obstacles, and a servo motor to control the steering. 
The rover uses ideal steering system to make a turn of any desired radius. 

**Technical Stack**
- Arduino Uno
- IMU Signal Processing
- Object Detection
- SolidWorks

**Project Team**
- Sourav Selvaraj
- R Charan Bhardhwaj
- Akhil Kasyap
- Krishna Kishore
- Vallimayl

**Notable Achievements**
- Runner-Up in Sangam Hardware Hackathon '22 - '23, Defence and Space Domain
- Pre-Finalist in Robofest '22 - '23, GUJCOST
    `,
    images: [
      {
        url: '/Portfolio/assets/Virya/Rover_exploded_view.webp',
        caption: 'Rover Exploded View'
      },
      {
        url: '/Portfolio/assets/Virya/Rover_Final_Assembly.webp',
        caption: 'Final Assembly'
      },
      {
        url: '/Portfolio/assets/Virya/Final_Assembly_Alternate.webp',
        caption: 'Final Assembly Alternate View'
      }
    ],
    github: 'https://github.com/RMI-NITT/ROVER/tree/robofest',
  },
  'project4': {
    id: 'project4',
    title: 'Assistance in Navigation for the Visually Impaired',
    description: `
# Project Overview
This project focuses on creating a solution to help the visually impaired navigate with the help of GPS, camera module, ESP32, LiDAR and Jetson Nano. A VQAS
(Visual Question Answer System) based on GPT-2 is deployed on the Jetson nano which can provide a scene description based on user prompt. This allows
visually impaired individuals to navigate to a desired location by providing a description of the environment. The LiDAR is used to detect obstacles
and alert the user. An IMU detects fall and sends an SOS to an emergency contact. This end to end solution aims to make a visually impaired person
more independent and self-sufficient.

## Technical Stack
- Jetson Nano
- ESP32
- LiDAR
- VQAS (Transformer Networks)
- IMU

## Project Team
- R Charan Bhardhwaj
- Adithya Venkata Narayanan
- Shyaam Pon Sundar
- Rigved Sanku
- Vakula Venkatesh
- Rahul Raaghav

## Notable Achievements
- Winner of SIH 2022, Government of India`,
    images: [
      {
        url: '/Portfolio/assets/ANVI/Flowchart.webp',
        caption: 'Proposed Solution'
      },
      {
        url: '/Portfolio/assets/ANVI/SIH Award.webp',
        caption: 'Winning SIH 2022'
      },
      {
        url: '/Portfolio/assets/ANVI/Fall Detected.webp',
        caption: 'Emergency Alert when fall detected'
      }
    ],
    github: 'https://github.com/RMI-NITT/ANVI',
  },
  'project5': {
    id: 'project5',
    title: "AgriBot E-Yantra Robotics Competition '21-'22",
    description: `
# Project Overview
This project is part of the E-Yantra Robotics Competition (EYRC) for the year 2021-2022. The objective of the project is to develop an algorithm 
for a robot to autonomously tranverse the arena and detect ripe fruits using OpenCV using thresholding techniques. Once the fruits are detected, 
MoveIt! package is used to perform a pick and place motion. The robot is equipped with an IntelRealSense camera to detect fruits and perform obstacle 
avoidance.

## Technical Stack
- ROS Noetic
- OpenCV
- Python

## Project Team
- R Charan Bhardhwaj
- Krishna Kishore
- Sunkara Vikash
- Mukilan`,
    images: [

      {
        url: '/Portfolio/assets/AgriBot/Cover_photo.webp',
        caption: 'Simulation in Gazebo of AgriBot picking the fruit'
      }
    ],
    github: 'https://github.com/krishnakvs10/eyrc-2021'
  }
} as const;


function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = id ? PROJECTS[id] : null;
  const navigateBackToPortfolio = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  };

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <nav className="border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="section-shell">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={navigateBackToPortfolio}
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-cyan-300"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Back to portfolio
            </button>
          </div>
        </div>
      </nav>

      <main className="section-shell py-12 sm:py-16">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Project Detail</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">{project.title}</h1>
        </div>

        <div className="mb-12 overflow-x-auto">
          <div className={`flex gap-6 pb-4 ${project.images.length === 1 ? 'justify-start' : ''}`}>
            {project.images.map((image, index) => (
              <figure key={index} className="w-[min(84vw,28rem)] flex-none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <img
                    src={image.url}
                    alt={image.caption}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    width={448}
                    height={336}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-slate-600 transition-colors dark:text-slate-400">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <article className="mb-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="max-w-none text-slate-700 dark:text-slate-200">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
                strong: ({ children }) => <strong className="font-bold text-slate-950 dark:text-white">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                ul: ({ children }) => <ul className="mb-4 list-disc pl-6 leading-7">{children}</ul>,
                ol: ({ children }) => <ol className="mb-4 list-decimal pl-6 leading-7">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                h1: ({ children }) => <h1 className="mb-4 mt-6 text-2xl font-bold text-slate-950 dark:text-white">{children}</h1>,
                h2: ({ children }) => <h2 className="mb-3 mt-6 text-xl font-bold text-slate-950 dark:text-white">{children}</h2>,
                h3: ({ children }) => <h3 className="mb-2 mt-5 text-lg font-semibold text-slate-950 dark:text-white">{children}</h3>,
                h4: ({ children }) => <h4 className="mb-2 mt-4 text-base font-semibold text-slate-950 dark:text-white">{children}</h4>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 underline transition-colors duration-200 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </article>

        <div className="flex flex-wrap items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          )}
          <button
            onClick={navigateBackToPortfolio}
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetail;
