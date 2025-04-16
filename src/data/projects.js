import pro1 from "../assets/images/project5.jpg";
import pro2 from "../assets/images/project6.jpg"
import pro3 from "../assets/images/project4.png"
import pro4 from "../assets/images/project3.jpg"
import pro5 from "../assets/images/project1.jpg"
import pro6 from "../assets/images/Project2.jpg"

export const projects = [
    {
      id: 1,
      title: "Advanced E-commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: pro1,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://example.com/demo1",
      codeLink: "https://github.com/yourusername/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
      image: pro2,
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "https://example.com/demo2",
      codeLink: "https://github.com/yourusername/taskapp",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with geolocation and interactive maps.",
      image: pro3,
      tags: ["JavaScript", "OpenWeather API", "Chart.js"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://github.com/yourusername/weather",
      featured: false
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, comments, and user profiles.",
      image: pro4,
      tags: ["React", "Express", "PostgreSQL"],
      demoLink: "https://example.com/demo4",
      codeLink: "https://github.com/yourusername/blog",
      featured: true
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A mobile-first application for tracking workouts and nutrition with progress visualization.",
      image: pro5,
      tags: ["React Native", "Firebase", "D3.js"],
      demoLink: "https://example.com/demo5",
      codeLink: "https://github.com/yourusername/fitness",
      featured: false
    },
    {
      id: 6,
      title: "Movie Recommendation Engine",
      description: "AI-powered movie recommendation system based on user preferences and viewing history.",
      image: pro6,
      tags: ["Python", "TensorFlow", "React"],
      demoLink: "https://example.com/demo6",
      codeLink: "https://github.com/yourusername/movies",
      featured: false
    }
  ];