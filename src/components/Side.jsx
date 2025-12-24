import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loaderDelay } from '../utils/index';
import { Box, Slide } from '@mui/material';

const Side = ({ children, isHome, orientation }) => {
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        if (!isHome) {
            return;
        }
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, [isHome]);

    return (
        <Box
            sx={{
                width: '40px',
                position: 'fixed',
                bottom: '0',
                left: orientation === 'left' ? '15px' : 'auto',
                right: orientation === 'left' ? 'auto' : '0px',
                zIndex: '10',
                display: { xs: 'none', md: 'block' },
            }}
        >
            <Slide in={isMounted} timeout={1000} direction={'up'}>
                {children}
            </Slide>
        </Box>
    );
};

Side.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string.isRequired,
    isHome: PropTypes.bool,
};

export default Side;
