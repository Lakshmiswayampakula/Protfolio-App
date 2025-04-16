import { 
    FaCode, 
    FaMobile, 
    FaServer, 
    FaPalette, 
    FaShoppingCart, 
    FaChartLine 
  } from 'react-icons/fa';
  
  export const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and responsive design principles.",
      icon: FaCode,
      features: [
        "Front-end development with React",
        "Responsive and mobile-first design",
        "Performance optimization",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: FaMobile,
      features: [
        "React Native for cross-platform apps",
        "Native iOS and Android development",
        "App Store optimization",
        "Push notifications and offline support"
      ]
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust and scalable backend solutions with secure APIs and database integration.",
      icon: FaServer,
      features: [
        "RESTful API development",
        "GraphQL implementation",
        "Database design and optimization",
        "Authentication and authorization"
      ]
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design solutions that balance aesthetics with functionality.",
      icon: FaPalette,
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing"
      ]
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce development with payment integration and inventory management.",
      icon: FaShoppingCart,
      features: [
        "Custom e-commerce platforms",
        "Payment gateway integration",
        "Product catalog management",
        "Order processing systems"
      ]
    },
    {
      id: 6,
      title: "Analytics & SEO",
      description: "Data-driven solutions for improving website visibility and user engagement.",
      icon: FaChartLine,
      features: [
        "SEO optimization",
        "Analytics implementation",
        "Conversion rate optimization",
        "Performance monitoring"
      ]
    }
  ];