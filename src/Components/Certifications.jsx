import React from 'react';

const certifications = [
    {
        title: 'Azure Data Engineer Associate',
        issuer: 'Microsoft Certified | DP-203',
        date: 'Current credential',
        url: 'https://www.credly.com/badges/00ab6b23-689b-4ed0-87e3-54df9bb128f5/public_url'
    },
    {
        title: 'Azure Data Fundamentals',
        issuer: 'Microsoft Certified | DP-900',
        date: 'Current credential',
        url: 'https://www.credly.com/badges/95fa9635-dc8d-46c8-9481-3823f88d6a44/public_url'
    },
    {
        title: 'Azure Fundamentals',
        issuer: 'Microsoft Certified | AZ-900',
        date: 'January 2021',
        url: 'https://www.credly.com/badges/29034a28-a2cb-498c-875f-070d6c900938'
    },
    {
        title: 'Power Platform Fundamentals',
        issuer: 'Microsoft Certified | PL-900',
        date: 'Current credential',
        url: 'https://www.credly.com/badges/c122dfee-3dad-4463-be11-1a85670bde3d'
    },
    {
        title: 'Cloud Computing & Virtualization Graduate',
        issuer: 'IBM Certified',
        date: 'May 2020',
        url: 'https://www.credly.com/badges/2378c8bd-d48e-4489-a213-7b5c4b3904ac'
    }
];

function Certifications() {
    return (
        <section id="certificationsRef" className="section" aria-labelledby="certifications-title">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">Proof points</p>
                    <h2 id="certifications-title" className="section__title">Credentials & recognition</h2>
                </div>
            </div>
            <div className="credentials-grid">
                <div className="credential-list">
                    {certifications.map(item => (
                        <article className="credential" key={item.title}>
                            <i className="bi bi-patch-check-fill" />
                            <div>
                                <h3>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.title} <i className="bi bi-arrow-up-right credential__link-icon" />
                                    </a>
                                </h3>
                                <p>{item.issuer}</p>
                                <span>{item.date}</span>
                            </div>
                        </article>
                    ))}
                </div>
                <article className="achievement">
                    <p className="eyebrow">Selected achievement</p>
                    <h3>First Place Winner, IBM Hackathon</h3>
                    <p>Innovated a next-generation architecture for a legacy ATM system with Innovaccer and IBM Bengaluru.</p>
                    <div className="achievement__publication">
                        <i className="bi bi-journal-text" />
                        <span>Published: Framework for Encryption and Authentication Cryptosystem<br /><small>Issue Vol. 29 No. 10s (2020), pp. 4572-4576</small><a className="publication-link" href="https://sersc.org/journals/index.php/IJAST/article/view/22011" target="_blank" rel="noopener noreferrer">Read paper <i className="bi bi-arrow-up-right" /></a></span>
                    </div>
                </article>
            </div>
        </section>
    );
}


export default Certifications

