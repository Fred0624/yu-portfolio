import React from 'react'
import { useParams } from 'react-router-dom'
import { projectInfo } from './ProjectInfo'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import '../styles/ProjectDetail.css'

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projectInfo[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <a href={project.live}>
            <img src={project.image} alt='project pic'/>
            </a>
            <p className='linkToLive'>click the pic to go to the live site</p>
            <p>Skills: {project.skill}</p>
            <Link href={project.link}>
            <GitHubIcon />
            </Link>
        </div>
    );
};

export default ProjectDetail;