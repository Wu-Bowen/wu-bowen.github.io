import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Side from './Side';
import configs from './../config';

const Email = ({ isHome }) => {
    return (
        <Side isHome={isHome} orientation="right">
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        display: 'block',
                        width: '1px',
                        height: '80px',
                        margin: '0 auto',
                        backgroundColor: theme.palette.secondary.main,
                    },
                })}
            >
                <Box
                    component="a"
                    href={`mailto:${configs.email}`}
                    sx={(theme) => ({
                        margin: '40px auto',
                        padding: '10px',
                        letterSpacing: '0.1em',
                        writingMode: 'vertical-rl',
                        fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
                        lineHeight: '18px',
                        color: theme.palette.secondary.main,
                        textDecoration: 'none',
                        '&:hover, &:focus': {
                            transform: 'translateY(-5px)',
                            color: theme.palette.primary.textColor,
                        },
                    })}
                >
                    {configs.email}
                </Box>
            </Box>
        </Side>
    );
};
Email.propTypes = {
    isHome: PropTypes.bool,
};

export default Email;
