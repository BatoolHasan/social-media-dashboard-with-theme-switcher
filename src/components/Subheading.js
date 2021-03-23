import styled from 'styled-components';
import {ThemeContext} from '../theme-context';


const StyledH2 = styled.h2`
font-size:1.5rem;
color:${props=>props.currentTheme==='dark'?props.theme.White_Text:props.theme.Dark_Grayish_Blue_Text};
grid-column: 1/ span 4;
align-self:flex-end;
margin-top:1em;

@media only screen and (max-width: 1140px) {
    
    grid-column:1/ span 2;
}
@media only screen and (max-width: 650px) {
    
    grid-column:1/ span 1;
}
`;


function Subheading (){
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
        <StyledH2 currentTheme={theme}>Overview - Today</StyledH2>
        )}
        </ThemeContext.Consumer>
    );
}

export default Subheading;