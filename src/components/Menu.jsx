import React, { useRef, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles(theme => ({
    hamburgerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: '10',
        marginRight: '-15px',
        padding: '15px',
        border: 0,
        backgroundColor: 'transparent',
        color: 'inherit',
        textTransform: 'none',
        transitionTimingFunction: 'linear',
        transitionDuration: '0.15s',
        transitionProperty: 'opacity, filter',
        cursor: 'pointer',
    },
    hamburgerInner: {
        display: 'inline-block',
        position: 'relative',
        width: '30px',
        height: '24px',
    },
    hamburgerIconClose: {
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '30px',
        height: '2px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.textColor,
        transitionDuration: '0.22s',
        transitionProperty: 'transform',
        transitionDelay: '.12s',
        transform: 'rotate(225deg)',
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        '&:before, &:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 'auto',
            right: '0',
            width: '30px',
            height: '2px',
            borderRadius: '4px',
            backgroundColor: theme.palette.primary.textColor,
            transitionTimingFunction: 'ease',
            transitionDuration: '.15s',
            transitionProperty: 'transform',
        },
        '&::before': {
            width: '100%',
            top: '0',
            opacity: '0',
            transition: 'top 0.1s ease-out,opacity 0.1s ease-out 0.12s',
        },
        '&::after': {
            width: '100%',
            bottom: '0',
            transform: 'rotate(-90deg)',
            transition: 'top 0.1s ease-out,opacity 0.1s ease-out 0.12s',
        }
    },
    hamburgerIconOpen: {
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '30px',
        height: '2px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.textColor,
        transitionDuration: '0.22s',
        transitionProperty: 'transform',
        transitionDelay: '0s',
        transform: 'rotate(0deg)',
        transitionTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        '&:before, &:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 'auto',
            right: '0',
            width: '30px',
            height: '2px',
            borderRadius: '4px',
            backgroundColor: theme.palette.primary.textColor,
            transitionTimingFunction: 'ease',
            transitionDuration: '.15s',
            transitionProperty: 'transform',
        },
        '&::before': {
            width: '120%',
            top: '-10px',
            opacity: '1',
            transition: 'top 0.1s ease-in 0.25s,opacity 0.1s ease-in',
        },
        '&::after': {
            width: '80%',
            bottom: '-10px',
            transform: 'rotate(0)',
            transition: 'bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19)',
        }
    },
    sideBarClose: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        padding: '50px 10px',
        width: 'min(75vw, 400px)',
        height: '100vh',
        outline: '0',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 10px 30px -15px #37474f',
        zIndex: '9',
        transform: 'translateX(0vw)',
        visibility: 'visible',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    },
    sideBarOpen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        padding: '50px 10px',
        width: 'min(75vw, 400px)',
        height: '100vh',
        outline: '0',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 10px 30px -15px #37474f',
        zIndex: '9',
        transform: 'translateX(100vw)',
        visibility: 'hidden',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    }
}));
const Menu = () => {
    const classes = useStyles();
    const wrapperRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <Helmet>
                <body className={menuOpen? 'blur' : ''}/>
            </Helmet>
            <div ref={wrapperRef}>
                <div className={classes.hamburgerButton} onClick={toggleMenu} >
                    <div className={classes.hamburgerInner}>
                        <div className={menuOpen ?
                            classes.hamburgerIconClose :
                            classes.hamburgerIconOpen}
                        />
                    </div>
                </div>
                <div className={
                    menuOpen ?
                        classes.sideBarClose :
                        classes.sideBarOpen}
                >
                </div>
            </div>
        </div>
    );
};


export default Menu;