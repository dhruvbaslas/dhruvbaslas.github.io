import React from 'react';

const contacts = [
    ['mailto:dhruvbaslas@gmail.com', 'envelope-fill', 'Email Dhruv'],
    ['https://www.linkedin.com/in/dhruvbaslas/', 'linkedin', 'LinkedIn profile'],
    ['https://github.com/dhruvbaslas', 'github', 'GitHub profile'],
    ['https://twitter.com/dhruvbaslas', 'twitter', 'Twitter profile'],
    ['https://www.instagram.com/dhruvbaslas/?hl=en', 'instagram', 'Instagram profile']
];

function Contact() {

    return (
        <section id="contactRef" className="section contact-section" aria-labelledby="contact-title">
            <p className="eyebrow">Have a data problem worth solving?</p>
            <h2 id="contact-title" className="contact-title">Let's build a clearer path from source to insight.</h2>
            <p className="contact-copy">I am open to conversations about data engineering, platform architecture, and teams building trustworthy systems at scale.</p>
            <div className="contact-actions">
                <a className="button button--primary" href="https://www.linkedin.com/in/dhruvbaslas/" target="_blank" rel="noopener noreferrer">Let's connect on LinkedIn <i className="bi bi-arrow-up-right" /></a>
                <ul className="contact-list">
                    {contacts.slice(0, 1).concat(contacts.slice(2)).map(([url, icon, label]) => <li key={icon}><a href={url} target={url.startsWith('mailto:') ? undefined : '_blank'} rel={url.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={label}><i className={`bi bi-${icon}`} /></a></li>)}
                </ul>
            </div>
        </section>
    );
}


export default Contact

