import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Hotdog from './../data/images/hotdog.gif';

const NotFoundPage = () => {
    return (
        <Box
            sx={(theme) => ({
                marginTop: '9vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                minHeight: '64px',
                color: theme.palette.secondary.textColor,
                fontFamily: '"IBM Plex Serif",Big Caslon,serif',
                backgroundImage: `url(${Hotdog}), linear-gradient(to right, rgb(146, 217, 208), rgb(146, 217, 208))`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                backgroundPosition: '100% 0',
            })}
        >
            <Box
                sx={{
                    maxWidth: '30vw',
                    paddingLeft: '10vw',
                }}
            >
                <Box component="p" sx={{ fontSize: 'clamp(50px,25vh,200px)', margin: 0 }}>
                    {' '}
                    404{' '}
                </Box>
                <p> No es bueno </p>
                <p>
                    You came here, looking for something, and all you get is
                    this silly running hot dog. Not good. Not good, at all.
                </p>
                <p>
                    <Link to="/">Back To Safety</Link>
                </p>
            </Box>
        </Box>
    );
};
export default NotFoundPage;
