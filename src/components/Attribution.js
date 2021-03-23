import styled from 'styled-components';
import {ThemeContext} from '../theme-context';

const StyledAttribution = styled.div`
margin-top:1em;
margin-bottom:1em;
grid-column: 1/ span 4;
text-align:center;
color:${props=>props.currentTheme==='dark'?props.theme.White_Text: props.theme.Very_Dark_Blue_Text};

& a:link, & a:visited{
    text-decoration:none;
    font-weight:700;
}
& a:link{
    color:${props=>props.theme.Facebook};
}
& a:visited{
    color:${props=>props.theme.Lime_Green};
}

@media only screen and (max-width: 1140px) {
    
    grid-column:1/ span 2;
}
@media only screen and (max-width: 650px) {
    
    grid-column:1/ span 1;
}
`;

const Attribution = ()=>{
   
    return (  <ThemeContext.Consumer>
    {({theme}) => (<StyledAttribution className="attribution" currentTheme={theme}>
    Challenge by <a href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H" target="_blank" rel="noopenner noreferrer">Frontend Mentor</a>. 
    Coded by <a href="https://www.github.com">Batool Hasan</a>.
    </StyledAttribution>
    )}
    </ThemeContext.Consumer>)
};

export default Attribution;