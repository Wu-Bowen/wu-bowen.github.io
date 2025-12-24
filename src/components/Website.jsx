import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Email from './Email';
import Social from './Social';
import Home from './Home';
import Loader from './Loader';
import Footer from './Footer';
import NotFoundPage from './Pages/404';
import { Route, Routes } from 'react-router-dom';

const Website = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {isLoading ? (
                <Loader finishLoading={() => setIsLoading(!isLoading)} />
            ) : (
                <Box
                    sx={{
                        padding: '0px',
                        margin: '0px',
                        minHeight: '100%',
                        width: '100%',
                        lineHeight: '1.3',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Navbar isHome={true} />
                    <Email isHome={true} />
                    <Social isHome={true} />
                    <div className={'content'}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                    <Footer />
                </Box>
            )}
        </>
    );
};
export default Website;
