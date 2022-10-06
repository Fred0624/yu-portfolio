import React from 'react';

const ProjectItems = ({image, name}) => {
    return (
        <div className='projectItems'>
            <div style={{backgroundImage: `url(${image})`}} className='projectImage' />
            <h1> {name} </h1>
        </div>
    );
};

export default ProjectItems;