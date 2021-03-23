import styled from 'styled-components';
import ContainerDashboard from './ContainerDashboard';
import ContainerOverview from './ContainerOverview';
import Heading from './Heading';
import Subheading from './Subheading';
import Subtitle from './Subtitle';
import Toggle from './Toggle';
import {ThemeContext} from '../theme-context';

import Attribution from "./Attribution";

const StyledContainer = styled.div`
grid-column: 2/ span 1;
margin-top:3em;

display:grid;
grid-template-columns:repeat(4, 1fr);
grid-template-rows:repeat(5, min-content);
column-gap:2em;
row-gap:2em;

@media only screen and (max-width: 1140px) {
    
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows:repeat(9, min-content);
}
@media only screen and (max-width: 650px) {
    
    grid-template-columns:1fr;
    grid-template-rows:repeat(16, min-content);
}
`;

const HeadingContainer = styled.div`
grid-column:1/ span 2;

@media only screen and (max-width: 1140px) {
    
    grid-column:1/ span 1;
}
`;

const ToggleContainer = styled.div`
 grid-column:3/ span 2;
 align-self:center;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 
 @media only screen and (max-width: 1140px) {
     
     grid-column:2/ span 1;
    }
    @media only screen and (max-width: 650px) {
        
        grid-column:1/ span 1;
        justify-content:space-between;
        border-top:1px solid ${props=>props.currentTheme==='dark'? props.theme.Desaturated_Blue_Text: props.theme.Dark_Grayish_Blue_Text};
        padding-top:1em;
}
  `;

  const ToggleText = styled.p`
  color:${props=>props.theme.Desaturated_Blue_Text};
  font-weight:700;
  margin-right:1em;
  font-size:1rem;
  `;
const Container =()=>{
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
        <StyledContainer className="Container">
            <HeadingContainer>
                <Heading/>
                <Subtitle/>
            </HeadingContainer>
            <ToggleContainer currentTheme={theme}>
                <ToggleText>Dark Mode</ToggleText>
                <Toggle/>
            </ToggleContainer>
        <ContainerDashboard/>
        <Subheading/>
        <ContainerOverview/>
        <Attribution/>
        </StyledContainer>
                 )}
                 </ThemeContext.Consumer>
    );
}

export default Container;