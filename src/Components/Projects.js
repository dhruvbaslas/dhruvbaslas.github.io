import React from 'react';
import angular from '../Static/angular.png'
import watson from '../Static/watson.png'
import openstack from '../Static/openstack.png'
import abc from '../Static/abc.png'
import logo from '../logo.svg'

const projects = [
    { image: logo, alt: 'React logo', title: 'Portfolio system', link: 'https://dhruvbaslas.github.io', linkText: 'Live portfolio', description: 'A responsive React portfolio with accessible navigation, theme switching, and a data-first content model.' },
    { image: angular, alt: 'Angular logo', title: 'MEAN microservices platform', description: 'Angular frontend with an Express API and Node.js services querying MongoDB.' },
    { image: openstack, alt: 'OpenStack logo', title: 'Private cloud and storage', description: 'OpenStack private cloud configuration with NextCloud virtual storage and VM deployment.' },
    { image: abc, alt: 'ABC Opticals logo', title: 'ABC Optical showcase', link: 'https://abcopticals.in', linkText: 'Visit ABC Opticals', description: 'An eyewear showcase website powered by Firebase.' },
    { image: watson, alt: 'IBM Watson logo', title: 'IBM Watson chatbot', description: 'A social media chatbot built using IBM Watson.' }
];

function Projects() {
    return (
        <section id="projectsRef" className="section" aria-labelledby="projects-title">
            <div className="section-heading"><div><p className="eyebrow">Selected builds</p><h2 id="projects-title" className="section__title">Projects</h2></div></div>
            <div className="cards">{projects.map(item => <article className="card-item" key={item.title}>
                <img src={item.image} alt={item.alt} />
                <div className="card-item__body"><h3 className="card-item__title">{item.title}</h3>{item.link && <p className="card-item__meta"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkText}</a></p>}<p className="card-item__description">{item.description}</p></div>
            </article>)}</div>
        </section>
    );
}


export default Projects

