import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        useNextVariants: true,
    },
    pallete: {
        primary: {
            light: '#5c67a3',
            main: '#3f4771',
            dark: '#2e355b',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff79b0',
            main: '#ff4081',
            dark: '#c70055',
            contrastText: '#000'
        },
        openTitle: '#3f4771',
        protectedTitle: pink['400'],
        type: 'light'
    }
});

export default theme;
