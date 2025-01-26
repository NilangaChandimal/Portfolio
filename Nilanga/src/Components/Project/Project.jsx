import React from 'react'
import './Project.css'

function Project() {
    let projects = [
        {
            "id": 1,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "title": "Rent a Car System with online reservation",
            "description": "It is a University group project. It's used to VB.NET. We can book the vehicle through this application.",
            "category": "Group Project"
        },
        {
            "id": 2,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "title": "Rent a Car System with online reservation",
            "description": "It is a University group project. It's used to VB.NET. We can book the vehicle through this application.",
            "category": "Group Project"
        },
        {
            "id": 3,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "title": "Rent a Car System with online reservation",
            "description": "It is a University group project. It's used to VB.NET. We can book the vehicle through this application.",
            "category": "Group Project"
        },
        {
            "id": 4,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "title": "Rent a Car System with online reservation",
            "description": "It is a University group project. It's used to VB.NET. We can book the vehicle through this application.",
            "category": "Group Project"
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
