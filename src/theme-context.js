import React from 'react';

export const ThemeContext = React.createContext({
    theme:'light',// default value is light
    toggleTheme:() => {}
});