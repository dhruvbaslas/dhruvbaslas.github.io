import React from 'react';
import Contact from './Contact';
import Experience from './Experience';
import Certifications from './Certifications';
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home';

function Root() {
    return (
        <>
            <Home />
            <Resume />
            <Experience />
            <Certifications />
            <Projects />
            <Contact />
        </>
    );
}

export default Root

