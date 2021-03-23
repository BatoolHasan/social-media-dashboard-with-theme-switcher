// import styled from 'styled-components';

import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

import DashboardCard from './DashboardCard';

// const StyledDashboard = styled.div`
// grid-column:2/span 1;
// display: grid;
// grid-template-columns: repeat(4, auto);
// column-gap:2em;
// `;

const cards = [
    {
        borderTop:"hsl(208, 92%, 53%)",
        socialIcon:facebook,
        socialIconAlt:"Facebook Icon",
        socialHandle:"@nathanf",
        followerNumber:"1987",
        followerText:"Followers",
        arrow:up,
        statText:"12 Today",
        arrowAlt:"Increase"
    },
    {
        socialIcon:twitter,
        borderTop:"hsl(203, 89%, 53%)",
        socialIconAlt:"Twitter Icon",
        socialHandle:"@nathanf",
        followerNumber:"1044",
        followerText:"Followers",
        arrow:up,
        statText:"99 Today",
        arrowAlt:"Increase"
    },
    {
        socialIcon:instagram,
        borderTop:"linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        socialIconAlt:"Instagram Icon",
        socialHandle:"@realnathanf",
        followerNumber:"11k",
        followerText:"Followers",
        arrow:up,
        statText:"1099 Today",
        arrowAlt:"Increase"
    },
    {
        socialIcon:youtube,
        borderTop:"hsl(348, 97%, 39%)",
        socialIconAlt:"Youtube Icon",
        socialHandle:"Nathan F.",
        followerNumber:"8239",
        followerText:"Subscribers",
        arrow:down,
        statText:"144 Today",
        arrowAlt:"Decrease"
    },
]
const ContainerDashboard = ()=>{
    return(
        <>
        {cards.map((card,i)=><DashboardCard key={i} arrowAlt={card.arrowAlt} socialIconAlt={card.socialIconAlt} borderTop={card.borderTop} socialIcon={card.socialIcon} socialHandle={card.socialHandle} followerNumber={card.followerNumber} followerText={card.followerText} arrow={card.arrow} statText={card.statText}/>)}
        </>
    );
}

export default ContainerDashboard;