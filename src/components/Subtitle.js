import styled from 'styled-components';
import {ThemeContext} from '../theme-context';


const StyledH3 = styled.h3`
font-size:1rem;
color:${props=>props.currentTheme==='dark'?props.theme.Desaturated_Blue_Text:props.theme.Dark_Grayish_Blue_Text};
`;


function Subtitle (){
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
        <StyledH3 currentTheme={theme}>Total Followers: 23,004</StyledH3>
        )}
        </ThemeContext.Consumer>
    );
}

export default Subtitle;