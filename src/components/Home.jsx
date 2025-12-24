import React from 'react';
import { Box } from '@mui/material';
import Intro from './Main/Intro';
import About from './Main/About';
import Experience from './Main/Experience';
import Work from './Main/Work';
import Projects from './Main/Projects';
import Contact from './Main/Contact';

const Home = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                minHeight: '100vh',
                zIndex: 1,
            }}
        >
            <Intro />
            <About />
            <Experience />
            <Work />
            <Projects />
            <Contact />
        </Box>
    );
};

export default Home;
