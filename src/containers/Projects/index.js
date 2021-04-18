import React from 'react';
import './index.scss';
import CarWithHearts from '../../components/Projects/DancingCar';
import Villa from '../../components/Projects/Villa';

function Projects(props) {
    return (
        <div className="projects-container">
            <div className="display-inline">
                <CarWithHearts />
                <Villa />
            </div>
            
        </div>
    );
}

export default Projects;