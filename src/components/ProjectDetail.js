import React from 'react'
import { useParams } from 'react-router-dom'
import { projectInfo } from './ProjectInfo'
import GithubIcon from '@material-ui/icons/GitHub';

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projectInfo[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt='project pic'/>
            <p>Skills: {project.skill}</p>
            <GithubIcon />
        </div>
    );
};

export default ProjectDetail;