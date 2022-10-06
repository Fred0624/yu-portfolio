import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItems = ({image, name, id}) => {
    const navigate = useNavigate()
    return (
        <div className='projectItems' onClick={() => {
            navigate("/project/" + id)
        }}>
            <div style={{backgroundImage: `url(${image})`}} className='projectImage' />
            <h1> {name} </h1>
        </div>
    );
};

export default ProjectItems;