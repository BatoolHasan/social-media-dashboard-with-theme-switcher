import styled from 'styled-components';
import {ThemeContext} from '../theme-context';

const StyledOverviewCard=styled.div`
padding: 2em 2em;
background-color:${props=>props.currentTheme==='dark'?props.theme.Very_Dark_Blue_Top_BG_Pattern: props.theme.Very_Pale_Blue_Top_BG_Pattern};
border-radius:5px;
display:grid;
grid-template-columns: auto auto;
column-gap:2em;
row-gap:2em;

&:hover{
    cursor:pointer;
    background-color:${props=>props.currentTheme==='dark'?props.theme.Dark_Desaturated_Blue_Card_BG: props.theme.Light_Grayish_Blue_Card_BG};

}
`;

const StyledCardTitle=styled.p`
color:${props=>props.currentTheme==='dark'?props.theme.Desaturated_Blue_Text: props.theme.Dark_Grayish_Blue_Text};
font-weight:700;
`;
const StyledCardNumber=styled.p`
font-weight:700;
font-size:2rem;
color:${props=>props.currentTheme==='dark'?props.theme.White_Text: props.theme.Very_Dark_Blue_Text};
align-self:flex-end;
`;

const StyledIcon=styled.img.attrs(props=>{
    return {
    alt:props.alt
    }
    })`
    justify-self:flex-end;
    &.mt-half{
        margin-right:0.5em;
    }
`;

const StyledStatContainer = styled.div`
color:${props=>props.alt==='Decrease'?props.theme.Bright_Red:props.theme.Lime_Green};
display:flex;
justify-content:center;
align-items:center;
font-weight:700;
justify-self:flex-end;
align-self:flex-end;
`;

const OverviewCard = (props)=>{
    return(
        <ThemeContext.Consumer>
        {({theme}) => (
    <StyledOverviewCard currentTheme={theme} className="OverviewCard">
        <StyledCardTitle currentTheme={theme}>{props.cardTitle}</StyledCardTitle>
        <StyledIcon src={props.socialIcon} alt={props.socialIconAlt}/>
        <StyledCardNumber currentTheme={theme}>{props.cardNumber}</StyledCardNumber>
        <StyledStatContainer alt={props.arrowAlt} currentTheme={theme}><StyledIcon className="mt-half" src={props.arrow} alt={props.arrowAlt}/><p>{props.statText}</p></StyledStatContainer>
</StyledOverviewCard>
        )}
        </ThemeContext.Consumer>
);

}
export default OverviewCard;