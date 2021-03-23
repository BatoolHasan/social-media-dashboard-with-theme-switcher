import styled from 'styled-components';
import {ThemeContext} from '../theme-context';

const StyledDashboardCard=styled.div`
margin-top:1.5em;
padding: 3em 2em;
padding-bottom:2em;
background-color:${props=>props.currentTheme==='dark'?props.theme.Very_Dark_Blue_Top_BG_Pattern: props.theme.Very_Pale_Blue_Top_BG_Pattern};
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position: relative;
border-radius:5px;
overflow:hidden;
&:before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    border-radius:5px;
    height:4px;
    width:100%;
    background:${props=>props.borderTop};
}
&:hover{
    cursor:pointer;
    background-color:${props=>props.currentTheme==='dark'?props.theme.Dark_Desaturated_Blue_Card_BG: props.theme.Light_Grayish_Blue_Card_BG};

}
`;

const StyledSocialContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:${props=>props.currentTheme==='dark'?props.theme.Desaturated_Blue_Text: props.theme.Dark_Grayish_Blue_Text};
margin-bottom:2em;
font-weight:700;
`;
const StyledFollowerContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:${props=>props.currentTheme==='dark'?props.theme.White_Text: props.theme.Very_Dark_Blue_Text};
`;

const FollowerNumber = styled.p`
font-size:3.5rem;
font-weight:700;
`;
const FollowerText = styled.p`
letter-spacing:5px;
font-weight:lighter;
color:${props=>props.currentTheme==='dark'?props.theme.Desaturated_Blue_Text: props.theme.Dark_Grayish_Blue_Text};
text-transform:uppercase;
`;

const StyledStatContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:2em;
color:${props=>props.arrowAlt==='Decrease'?props.theme.Bright_Red:props.theme.Lime_Green};
font-weight:700;
`;

const StyledIcon=styled.img.attrs(props=>{
    return {
    alt:props.alt
    }
    })`
margin-right:0.5em;
`;

const DashboardCard = (props)=>{
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
    <StyledDashboardCard currentTheme={theme} className="DashboardCard" borderTop={props.borderTop}>
    <StyledSocialContainer currentTheme={theme}><StyledIcon src={props.socialIcon} alt={props.socialIconAlt}/> {props.socialHandle}</StyledSocialContainer>
    <StyledFollowerContainer currentTheme={theme}><FollowerNumber currentTheme={theme}>{props.followerNumber}</FollowerNumber><FollowerText>{props.followerText}</FollowerText></StyledFollowerContainer>
    <StyledStatContainer arrowAlt={props.arrowAlt}><StyledIcon src={props.arrow} alt={props.arrowAlt}/><p>{props.statText}</p></StyledStatContainer>
</StyledDashboardCard>
         )}
         </ThemeContext.Consumer>
);

}
export default DashboardCard;