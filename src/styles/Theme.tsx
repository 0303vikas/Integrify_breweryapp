import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5'
        },
        secondary:{
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc'
        },
        error:{
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f'
        },
        warning:{
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00'
        },
        info:{
            main: '#29b6f6',
            light: '#4fc3f7',
            dark: '#0288d1'
        },
        success:{
            main: '#66bb6a',
            light: '#81c784',
            dark: '#388e3c'
        }
    }

})