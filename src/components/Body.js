import styled from 'styled-components';
import Container from "./Container";
import {ThemeContext} from '../theme-context';

const StyledBody = styled.div`
display: grid;
grid-template-columns: minmax(4em, 1fr) minmax(auto, 1200px) minmax(4em, 1fr);
height:100vh;
background-color:${props=>props.currentTheme==='dark'?props.theme.Very_Dark_Blue_BG: props.theme.White_BG };
color:${props=> props.theme.White_Text};

@media only screen and (max-width: 1140px) {
    grid-template-columns: minmax(4em, 1fr) minmax(auto, 800px) minmax(4em, 1fr);
    height:100%;
}
@media only screen and (max-width: 550px) {
    grid-template-columns: 2em auto 2em;
}
`;
function Body (){
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
        <StyledBody className="Body" currentTheme={theme}>
           <Container />
          
        </StyledBody>
         )}
         </ThemeContext.Consumer>
    );
}

export default Body;