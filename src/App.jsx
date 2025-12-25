import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import Website from './components/Website';
import theme from './styles/Theme';

const App = () => {
    return (
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <Website />
                </ThemeProvider>
            </StyledEngineProvider>
        </BrowserRouter>
    );
};

export default App;
