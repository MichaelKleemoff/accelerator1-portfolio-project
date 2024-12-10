import React from 'react';
import Project from './Project';
import './ProjectSection.css';

function ProjectSection({ projects }) {
	return (
		<section id='projects' className='projects-section'>
			<ul className='project-list'>
				{projects.map((project, index) => (
					<Project key={index} className='project-item' project={project} />
				))}
			</ul>
		</section>
	);
}

export default ProjectSection;
