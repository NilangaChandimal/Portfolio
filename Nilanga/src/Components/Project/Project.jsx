import React from "react";
import "./Project.css";
import image1 from "../../assets/lms.png"
import image2 from "../../assets/insuarance.png"
import image3 from "../../assets/plant.png"
import image4 from "../../assets/cow.png"
import image5 from "../../assets/spicy.png"
import image6 from "../../assets/service.png"
import image7 from "../../assets/shop.png"
import image8 from "../../assets/todo.png"
import image9 from "../../assets/vlog.png"

function Project() {
  let projects = [
    {
      "id": 1,
      "image": image1,
      "title": "Imperial Wisdom LMS",
      "description": "A university Learning Management System (LMS) developed as part of a group project. It is based on a pre-designed template, which I customized and enhanced to improve functionality and user experience.",
      "category": "Group Project"
    },
    {
      "id": 2,
      "image": image2,
      "title": "Car Rental System with Online Reservation",
      "description": "An Insurance Management System integrated with a car rental platform. Built using a template, I developed this project further, incorporating multiple email configurations for notifications and communication.",
      "category": "Group Project"
    },
    {
      "id": 3,
      "image": image3,
      "title": "Sri Lankan Agricultural Plant Disease Detection Using CNN",
      "description": "A university research project utilizing Convolutional Neural Networks (CNN) with TensorFlow and Keras. This system can identify plant species and detect diseases, leveraging Vision Transformer (ViT) technology for enhanced accuracy.",
      "category": "Individual Project"
    },
    {
      "id": 4,
      "image": image4,
      "title": "Bovine Identification Using Nose Prints and CNN",
      "description": "A research proposal from my university studies focused on identifying cattle using nose prints. Implemented with TensorFlow, Keras, and Vision Transformer (ViT) technology, this system enables cow identification and data storage.",
      "category": "Individual Project"
    },
    {
      "id": 5,
      "image": image5,
      "title": "Spicy Food Management System",
      "description": "A Laravel-based food management system styled with Tailwind CSS. The project is deployed on a live server at www.mcspicyproduct.com, offering efficient management of food inventory and sales.",
      "category": "Individual Project"
    },
    {
      "id": 6,
      "image": image6,
      "title": "Service Provider System",
      "description": "A Laravel and Tailwind CSS-based platform that connects service providers with customers. It features four main user panels, real-time chat functionality, and robust security measures for user registration.",
      "category": "Individual Project"
    },
    {
      "id": 7,
      "image": image7,
      "title": "Grocery Store Management System",
      "description": "A comprehensive system for managing grocery store operations. It includes admin and cashier roles, where the admin has full access to services while the cashier has limited access. The system manages transactions, sales, loans, inventory, and more.",
      "category": "Individual Project"
    },
    {
      "id": 8,
      "image": image8,
      "title": "To-Do Application",
      "description": "A task management application built using Laravel and APIs. The main page is accessible to all users, but additional features require authentication. Users must log in to access the full functionality of the system.",
      "category": "Individual Project"
    },
    {
      "id": 9,
      "image": image9,
      "title": "Vlog Page",
      "description": "A simple vlog page developed using HTML5, CSS, and JavaScript, designed to showcase video content with an engaging user interface.",
      "category": "Individual Project"
    }
  ];

  return (
    <div id="project">
      <div className="project-container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div className="project-item" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <h4>{project.category}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
