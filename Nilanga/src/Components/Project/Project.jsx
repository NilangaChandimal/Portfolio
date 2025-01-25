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
          }
    ]

    return (
        <div id="project">
            <div className="project-container">
                <h2>Projects</h2>
                <p>
                    {projects.map((project) => (
                        <p key={project.id}>
                            <img src={project.image} alt={project.title} />
                            <div>
                                <div className="title">{project.title}</div>
                                <div className="description">{project.description}</div>
                            </div>
                        </p>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default Project
