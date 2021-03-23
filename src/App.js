import './App.scss';
import {ThemeProvider} from 'styled-components';
import Body from "./components/Body";
import {useState} from 'react';
import { ThemeContext} from "./theme-context";
const theme = {
Lime_Green: "hsl(163, 72%, 41%)",
Bright_Red:" hsl(356, 69%, 56%)",
Facebook: "hsl(208, 92%, 53%)",
Twitter: "hsl(203, 89%, 53%)",
Instagram: "linear-gradient(hsl(37, 97%, 70%) to hsl(329, 70%, 58%))",
YouTube:" hsl(348, 97%, 39%)",
Toggle_Dark: "linear-gradient (hsl(210, 78%, 56%) to hsl(146, 68%, 55%))",
Toggle_Light: "hsl(230, 22%, 74%)",
Very_Dark_Blue_BG: "hsl(230, 17%, 14%)",
Dark_Desaturated_Blue_Card_BG: "hsl(231, 16%, 23%)",
Very_Dark_Blue_Top_BG_Pattern: "hsl(228, 28%, 20%)",
Desaturated_Blue_Text: "hsl(228, 34%, 66%)",
White_Text: "hsl(0, 0%, 100%)",
White_BG: "hsl(0, 0%, 100%)",
Very_Pale_Blue_Top_BG_Pattern: "hsl(225, 100%, 98%)",
Light_Grayish_Blue_Card_BG: "hsl(227, 47%, 96%)",
Dark_Grayish_Blue_Text: "hsl(228, 12%, 44%)",
Very_Dark_Blue_Text: "hsl(230, 17%, 14%)",
};


function App() {
  const toggleTheme = () => {
    // setCurrentTheme(prevState => ({...prevState, theme:prevState.theme === 'dark'? 'light': 'dark'}));
    setCurrentTheme(prevState => {
      // console.log(prevState.theme);
      return {...prevState, theme:prevState.theme === 'dark'? 'light': 'dark'};
    });
  };
  const [currentTheme, setCurrentTheme] = useState({theme:'light', toggleTheme});

  return (
    <ThemeContext.Provider value={currentTheme}>

    <ThemeProvider theme={theme}>
    <Body/>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
