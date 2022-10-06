import React from 'react'
import { useParams } from 'react-router-dom'
import { projectInfo } from './ProjectInfo'
import Github from '@material-ui/icons/GitHub'
import '../styles/ProjectDetail.css'

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projectInfo[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt='project pic'/>
            <p>Skills: {project.skill}</p>
            <Github />
        </div>
    );
};

export default ProjectDetail;