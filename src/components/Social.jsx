import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import configs from '../config';
import Side from './Side';
import Icon from './Icons/Icons';

const Social = ({ isHome }) => {
    return (
        <Side isHome={isHome} orientation="left">
            <Box
                component="ul"
                sx={(theme) => ({
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '0',
                    padding: '0',
                    listStyle: 'none',
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
                {configs.socialMedia &&
                    configs.socialMedia.map(({ url, name }, i) => (
                        <Box
                            component="li"
                            key={i}
                            sx={(theme) => ({
                                width: '20px',
                                paddingLeft: '10px',
                                marginBottom: '10px',
                                '& svg': {
                                    color: theme.palette.secondary.main,
                                },
                                '&:last-of-type': {
                                    marginBottom: '40px',
                                },
                                '&:hover, &:focus': {
                                    transform: 'translateY(-3px)',
                                    '& svg': {
                                        color: theme.palette.primary.textColor,
                                    },
                                },
                            })}
                        >
                            <a
                                href={url}
                                aria-label={name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name={name} />
                            </a>
                        </Box>
                    ))}
            </Box>
        </Side>
    );
};

Social.propTypes = {
    isHome: PropTypes.bool,
};

export default Social;
