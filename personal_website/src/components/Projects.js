import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Projects = () => {

    const [ projects, setProjects ] = useState([])

        useEffect(() => {
            axios
                .get('https://api.github.com/users/pennebakers/repos')
                .then((response) => {
                    setProjects(response.data)
                })
        }, [])
        
        console.log(projects)
    return(
        <div className="projects-container">
            <div className="cards-container">
                <div>
                    {projects.map(response => 
                    <h1 className="cards">{response.name}</h1>)}
                </div>
            </div>
        </div>
    )
}

export default Projects