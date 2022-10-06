import React from 'react';
import ProjectItems from './ProjectItems';
import BreakingBad from '../pics/BreakingBad.png'
import JupiterDeals from '../pics/JupiterDeals.png'
import RetroDash from '../pics/RetroDash.png'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='list'>
                <ProjectItems name='Breaking Bad Info' image={BreakingBad}/>
                <ProjectItems name='Jupiter Deals' image={JupiterDeals}/>
                <ProjectItems name='RetroDash' image={RetroDash}/>
            </div>
        </div>
    );
};

export default Projects; 