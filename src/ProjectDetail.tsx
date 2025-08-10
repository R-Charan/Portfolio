import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Home, Github, Youtube, ArrowLeft } from 'lucide-react';
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
        url: '/Portfolio/assets/Grasp_Planning/UR5e_simulation.png',
        caption: 'Full Setup in ROS Noetic with Gazebo'
      },
      {
        url: '/Portfolio/assets/Grasp_Planning/Obstacle.png',
        caption: 'Grasp Planning considering Obstacle Positioning'
      },
      {
        url: '/Portfolio/assets/Grasp_Planning/Cylinder.png',
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
        url: '/Portfolio/assets/Project_Auxilium/Full_Setup.png',
        caption: 'Full Setup'
      },
      {
        url: '/Portfolio/assets/Project_Auxilium/Single_Leg.png',
        caption: 'Single Leg'
      },
      {
        url: '/Portfolio/assets/Project_Auxilium/PCB.png',
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
- Runner-Up in Sangam Hardware Hackathon \'22 - \'23, Defence and Space Domain
- Pre-Finalist in Robofest \'22 - \'23, GUJCOST
    `,
    images: [
      {
        url: '/Portfolio/assets/Virya/Rover_exploded_view.gif',
        caption: 'Rover Exploded View'
      },
      {
        url: '/Portfolio/assets/Virya/Rover Final Assembly.jpg',
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
    title: 'AgriBot E-Yantra Robotics Competition \'21-\'22',
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
        url: '/Portfolio/assets/AgriBot/Cover_photo.png',
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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Back
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        </div>

        {/* Image Gallery */}
        <div className="mb-12 overflow-x-auto">
          <div className={`flex pb-4 ${project.images.length === 1 ? 'justify-center' : 'space-x-6'}`}>
            {project.images.map((image, index) => (
              <div key={index} className={`${project.images.length === 1 ? '' : 'flex-none'} w-96`}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center transition-colors">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg p-8 mb-12">
          <div className="prose max-w-none">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-4">{children}</p>,
                strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-semibold mb-2 mt-4">{children}</h3>,
                h4: ({ children }) => <h4 className="text-base font-semibold mb-2 mt-3">{children}</h4>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors duration-200"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-900"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            )}
          </div>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
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