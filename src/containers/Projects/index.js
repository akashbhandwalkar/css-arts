import React from 'react';
import './index.scss';
import CarWithHearts from '../../components/Projects/DancingCar';
import Villa from '../../components/Projects/Villa';
import BarChart from '../../components/Projects/BarChart';

function Projects(props) {
    return (
        <div className="projects-container">
            <div className="project">
                <CarWithHearts />
            </div>

            <div className="project">
                <Villa />
            </div>

            <div className="project">
                <BarChart />
            </div>
        </div>
    );
}

export default Projects;