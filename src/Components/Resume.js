import React from 'react';
import resumepdf from '../Static/resume.pdf'

function Resume() {
    return (
        <section id="resumeRef" className="section resume-section" aria-labelledby="resume-title">
            <div className="section-heading"><div><p className="eyebrow">The short version</p><h2 id="resume-title" className="section__title">Resume</h2></div><a className="button button--primary" href={resumepdf} target="_blank" rel="noopener noreferrer">View full resume <i className="bi bi-arrow-up-right" /></a></div>
            <div className="resume-panel">
                <div><span className="resume-panel__label">Current focus</span><h3>Metadata-driven Lakehouse engineering</h3><p>Designing governed, observable data products across Azure, Databricks, and PySpark.</p></div>
                <div className="resume-panel__aside"><span className="resume-panel__label">Core strength</span><strong>Architecture to operations</strong><span className="resume-panel__label">Available for</span><strong>Data platform leadership</strong></div>
            </div>
        </section>
    );
}


export default Resume

