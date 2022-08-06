import React, { useState, useEffect } from 'react';
// import { oneProject } from '../data';
import { useParams } from 'react-router-dom';

function ProjectPage() {
    // console.log(new Intl.DateTimeFormat('en-AU', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date()));
    // console.log(new Intl.DateTimeFormat('en-AU', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date(oneProject.date_created)));
    // console.log(new Intl.DateTimeFormat('en-AU', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(oneProject.date_created)));

    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then(res => res.json())
            .then(data => setProjectData(data))
    }, []) 
    
    console.log(`Title: ${projectData.title}`)

    return (
        <div>
            <h2>{projectData.title}</h2>
            {/* <h3>Created at: {oneProject.date_created}</h3> */}
            <h3>Created at: {new Intl.DateTimeFormat('en-AU', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(projectData.date_created))}</h3>
            <h3>{`Status: ${projectData.is_open ? 'Open for donations' : 'Closed for donations'}`}</h3>
            <h3>{`Goal: $${projectData.goal}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    if (pledgeData.anonymous) {
                        return (       
                            <li>
                                ${pledgeData.amount} from Anonymous
                            </li>
                        );
                    }
                    else {
                        return (       
                            <li>
                                ${pledgeData.amount} from {pledgeData.supporter}
                            </li>
                        );
                    }                    
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;