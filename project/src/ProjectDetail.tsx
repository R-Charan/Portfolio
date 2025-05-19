import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Home, Github, Youtube, ArrowLeft } from 'lucide-react';

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
    title: 'Grasp Planning',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Features:
      • Feature 1: Description of feature 1
      • Feature 2: Description of feature 2
      • Feature 3: Description of feature 3

      Technologies Used:
      • React.js
      • Node.js
      • MongoDB
      • Docker

      The project was developed with scalability in mind, implementing best practices and modern architecture patterns.
      It includes comprehensive testing, CI/CD pipeline integration, and detailed documentation.
    `,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Main Dashboard'
      },
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Code Editor Interface'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Analytics Dashboard'
      }
    ],
    github: 'https://github.com/yourusername/project2',
    youtube: 'https://youtube.com/watch?v=demo'
  },

  // New project added here
  'project2': {
    id: 'project2',
    title: 'Gait Control of Lower Limb Exoskeleton',
    description: `
      A weather station built using ESP32 and various environmental sensors. The device collects temperature, humidity, and air pressure data and sends it to a cloud dashboard in real-time.

      Features:
      • Real-time data collection and upload
      • Web dashboard with live charts
      • Power-efficient design for solar-powered operation

      Technologies Used:
      • ESP32 (ESP-IDF)
      • InfluxDB + Grafana
      • MQTT over WiFi
      • Docker (for dashboard hosting)
    `,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Device Deployed in Field'
      },
      {
        url: 'https://images.unsplash.com/photo-1603781566382-1a53ed6fc2b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Web Dashboard - Real-time Data'
      }
    ],
    github: 'https://github.com/yourusername/weather-station',
    youtube: 'https://youtube.com/watch?v=weatherdemo'
  },
  'project3': {
    id: 'project3',
    title: 'Virya - The Rover',
    description: `
      A weather station built using ESP32 and various environmental sensors. The device collects temperature, humidity, and air pressure data and sends it to a cloud dashboard in real-time.

      Features:
      • Real-time data collection and upload
      • Web dashboard with live charts
      • Power-efficient design for solar-powered operation

      Technologies Used:
      • ESP32 (ESP-IDF)
      • InfluxDB + Grafana
      • MQTT over WiFi
      • Docker (for dashboard hosting)
    `,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Device Deployed in Field'
      },
      {
        url: 'https://images.unsplash.com/photo-1603781566382-1a53ed6fc2b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Web Dashboard - Real-time Data'
      }
    ],
    github: 'https://github.com/yourusername/weather-station',
    youtube: 'https://youtube.com/watch?v=weatherdemo'
  },
  'project4': {
    id: 'project4',
    title: 'Assistance in Navigation for the Visually Impaired',
    description: `
      A weather station built using ESP32 and various environmental sensors. The device collects temperature, humidity, and air pressure data and sends it to a cloud dashboard in real-time.

      Features:
      • Real-time data collection and upload
      • Web dashboard with live charts
      • Power-efficient design for solar-powered operation

      Technologies Used:
      • ESP32 (ESP-IDF)
      • InfluxDB + Grafana
      • MQTT over WiFi
      • Docker (for dashboard hosting)
    `,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Device Deployed in Field'
      },
      {
        url: 'https://images.unsplash.com/photo-1603781566382-1a53ed6fc2b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Web Dashboard - Real-time Data'
      }
    ],
    github: 'https://github.com/yourusername/weather-station',
    youtube: 'https://youtube.com/watch?v=weatherdemo'
  },
  'project5': {
    id: 'project5',
    title: 'AgriBot',
    description: `
      A weather station built using ESP32 and various environmental sensors. The device collects temperature, humidity, and air pressure data and sends it to a cloud dashboard in real-time.

      Features:
      • Real-time data collection and upload
      • Web dashboard with live charts
      • Power-efficient design for solar-powered operation

      Technologies Used:
      • ESP32 (ESP-IDF)
      • InfluxDB + Grafana
      • MQTT over WiFi
      • Docker (for dashboard hosting)
    `,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Device Deployed in Field'
      },
      {
        url: 'https://images.unsplash.com/photo-1603781566382-1a53ed6fc2b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
        caption: 'Web Dashboard - Real-time Data'
      }
    ],
    github: 'https://github.com/yourusername/weather-station',
    youtube: 'https://youtube.com/watch?v=weatherdemo'
  }
} as const;


function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = id ? PROJECTS[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-blue-600"
            >
              <Home className="w-5 h-5 mr-1" />
              Home
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        </div>

        {/* Image Gallery */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {project.images.map((image, index) => (
              <div key={index} className="flex-none w-96">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="prose max-w-none">
            {project.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
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
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Watch Demo
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