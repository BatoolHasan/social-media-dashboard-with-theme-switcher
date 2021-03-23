// import styled from 'styled-components';

import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

import OverviewCard from './OverviewCard';
// import ContainerDashboard from './ContainerDashboard';

// const StyledOverview = styled.div`
// grid-column:2/span 1;
// display: grid;
// grid-template-columns: repeat(4, auto);
// column-gap:2em;
// row-gap:2em;
// `;

const cards = [
    {
        cardTitle:"Page Views",
        socialIcon:facebook,
        socialIconAlt:"Facebook icon",
        cardNumber:"87",
        arrow:up,
        arrowAlt:"Increase",
        statText:"3%",
    },
    {
        cardTitle:"Likes",
        socialIcon:facebook,
        socialIconAlt:"Facebook icon",
        cardNumber:"52",
        arrow:down,
        arrowAlt:"Decrease",
        statText:"2%",
    },
    {
        cardTitle:"Likes",
        socialIcon:instagram,
        socialIconAlt:"Instagram icon",
        cardNumber:"5462",
        arrow:up,
        arrowAlt:"Increase",
        statText:"2257%",
    },
    {
        cardTitle:"Profile Views",
        socialIcon:instagram,
        socialIconAlt:"Instagram icon",
        cardNumber:"52k",
        arrow:up,
        arrowAlt:"Increase",
        statText:"1375%",
    },
    {
        cardTitle:"Retweets",
        socialIcon:twitter,
        socialIconAlt:"Twitter icon",
        cardNumber:"117",
        arrow:up,
        arrowAlt:"Increase",
        statText:"303%",
    },
    {
        cardTitle:"Likes",
        socialIcon:twitter,
        socialIconAlt:"Twitter icon",
        cardNumber:"507",
        arrow:up,
        arrowAlt:"Increase",
        statText:" 553%",
    },
    {
        cardTitle:"Likes",
        socialIcon:youtube,
        socialIconAlt:"Youtube icon",
        cardNumber:"107",
        arrow:down,
        arrowAlt:"Decrease",
        statText:" 19%",
    },
    {
        cardTitle:" Total Views",
        socialIcon:youtube,
        socialIconAlt:"Youtube icon",
        cardNumber:"1407",
        arrow:down,
        arrowAlt:"Decrease",
        statText:" 12%",
    }
]
const ContainerOverview = ()=>{
    return(
        <>
            {cards.map((card, i)=><OverviewCard key={"overview"+i} cardTitle={card.cardTitle} socialIcon={card.socialIcon} socialIconAlt={card.socialIconAlt} cardNumber={card.cardNumber} arrow={card.arrow} arrowAlt={card.arrowAlt} statText={card.statText}/>)}
        </>
    );
}

export default ContainerOverview;