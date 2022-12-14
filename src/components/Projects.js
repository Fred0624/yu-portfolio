import React from 'react'
import ProjectItems from './ProjectItems'
import { projectInfo } from './ProjectInfo'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='list'>
                {projectInfo.map((project, idx) => {
                    return <ProjectItems id={idx} name={project.name} image={project.image}/>
                })}
            </div>
        </div>
    );
};

export default Projects; 