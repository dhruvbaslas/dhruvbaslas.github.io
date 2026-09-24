import React from 'react';

function Home() {
    return (
        <section id="homeRef" className="section hero" aria-labelledby="home-title">
            <div className="hero__content">
                <p className="eyebrow"><span className="status-dot" /> Data Engineer | Azure + Databricks</p>
                <h1 id="home-title" className="hero__title">Dhruv Baslas</h1>
                <p className="hero__role">Data Engineer building dependable data platforms.</p>
                <p className="hero__text"><strong>About me:</strong> I have 6 years of experience designing scalable ETL/ELT pipelines, Lakehouse architectures, and governed data systems for global teams.</p>
                <div className="hero__actions">
                    <a className="button button--primary" href="#experienceRef">Explore my work <i className="bi bi-arrow-down-right" /></a>
                    <a className="button button--quiet" href="https://www.linkedin.com/in/dhruvbaslas/" target="_blank" rel="noopener noreferrer">Let's connect <i className="bi bi-arrow-up-right" /></a>
                </div>
            </div>
            <div className="hero__metrics" aria-label="Career highlights">
                <div><strong>6</strong><span>years building data systems</span></div>
                <div><strong>500 GB+</strong><span>daily data processed</span></div>
                <div><strong>40%</strong><span>pipeline speed improvement</span></div>
            </div>
            <div className="skill-strip" aria-label="Core technologies">
                {['Azure', 'Databricks', 'PySpark', 'Delta Lake', 'ADF', 'Unity Catalog', 'SQL'].map(skill => <span key={skill}>{skill}</span>)}
            </div>
        </section>
    );
}


export default Home

