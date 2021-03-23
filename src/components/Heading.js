import styled from 'styled-components';
import {ThemeContext} from '../theme-context';


const StyledH1 = styled.h1`
font-size:2rem;
color:${props=>props.currentTheme==='dark'?props.theme.White_Text: props.theme.Very_Dark_Blue_Text};
margin-bottom:0.3rem;


@media only screen and (max-width: 1140px) {
    
    font-size:1.6rem;
}
`;


function Heading (){
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
        <StyledH1 currentTheme={theme}>Social Media Dashboard</StyledH1>
        )}
        </ThemeContext.Consumer>
    );
}

export default Heading;