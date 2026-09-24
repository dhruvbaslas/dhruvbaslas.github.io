import React from 'react'
const experience = [
    { period: 'Feb 2025 - Present', company: 'JD Software Pvt. Ltd.', role: 'Senior Data Engineer', outcome: 'Built a metadata-driven Bronze / Silver / Gold Lakehouse in Azure Databricks, improving pipeline processing speed by 40%.', tools: 'Azure Databricks, ADF, ADLS, Unity Catalog, PySpark' },
    { period: 'Aug 2024 - Jan 2025', company: 'Accenture | UnitedHealth Group', role: 'Data Engineer, Team Lead', outcome: 'Connected Airflow, Databricks APIs, and ADLS to deliver analytics-ready Delta data for 50+ downstream consumers, reducing data availability SLAs by 30%.', tools: 'Apache Airflow, Databricks, ADLS, Delta Lake' },
    { period: 'Sep 2020 - Jul 2024', company: 'Accenture | UBS', role: 'Data Engineer, Analyst to Team Lead', outcome: 'Architected metadata-driven pipelines processing 500 GB+ of daily mainframe and Oracle data, while reducing deployment overhead by 50% through Azure DevOps CI/CD.', tools: 'ADF, AutoSys, PySpark, Oracle, Azure DevOps' }
];

function Experience() {
    return (
        <section id="experienceRef" className="section" aria-labelledby="experience-title">
            <div className="section-heading"><div><p className="eyebrow">Where I have made an impact</p><h2 id="experience-title" className="section__title">Experience</h2></div><span className="section-count">01 / 03</span></div>
            <div className="timeline">{experience.map(item => <article className="timeline-item" key={item.company}>
                <div className="timeline-item__period">{item.period}</div>
                <div className="timeline-item__body"><p className="timeline-item__company">{item.company}</p><h3>{item.role}</h3><p className="timeline-item__outcome">{item.outcome}</p><p className="timeline-item__tools">{item.tools}</p></div>
            </article>)}</div>
        </section>
    );
}


export default Experience

