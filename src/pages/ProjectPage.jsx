import React from 'react';
import { oneProject } from '../data';

function ProjectPage() {
    return (
        <div>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            {/* <h3>Created at: {new Intl.DateTimeFormat('en-AU', {year: 'numeric', month: 'long', day: 'numeric'})}</h3> */}
            <h3>{`Status: ${oneProject.is_open ? 'Open for donations' : 'Closed for donations'}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {oneProject.pledges.map((pledgeData, key) => {
                    if (pledgeData.anonymous) {
                        return (       
                            <li>
                                {pledgeData.amount} from Anonymous
                            </li>
                        );

                    }
                    else {
                        return (       
                            <li>
                                {pledgeData.amount} from {pledgeData.supporter}
                            </li>
                        );
                    }
                    
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;