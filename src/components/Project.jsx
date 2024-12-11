import React from 'react';
import './Project.css';

function Project({ project }) {
	return (
		<li className={`project-card project-card-${project.id}`}>
			<section className='project-card-img'>
				<img src={project.projectImg} alt={project.title} />
			</section>

			<section className='project-card-content'>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<div className='contact-me'>
					<a href='https://github.com/MichaelKleemoff/accelerator1-portfolio-project'>
						Live Site
					</a>
				</div>
			</section>
		</li>
	);
}

export default Project;
