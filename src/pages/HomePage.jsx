import React, { useState, useEffect } from 'react';
//import { allProjects } from '../data';
import ProjectCard from '../components/ProjectCard';

function HomePage() {
    const [projectData, setProjectData] = useState([]);

    // When we load our HomePage, we render all projects in the 
    // projectData array. This is by default empty. However, we have
    // projects in our Heroku database that we deployed and made 
    // accessible last subject with Python. We can now get those projects
    // by making a get request and storing the result in our projectData state

    // When we mount our Application, we want to store the contents
    // of allProjects in our state 
    useEffect(() => {
        // When we mount our HomePage, I want to get our 
        // projects from out DRF API that we created in our
        // DRF module.

        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then(res => res.json())
            .then(data => setProjectData(data))
    }, [])

    return (
        <div id="project-list">
            {projectData.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default HomePage;