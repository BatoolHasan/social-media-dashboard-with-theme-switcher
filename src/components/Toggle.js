import styled from 'styled-components';
// import {useState} from 'react';
import {ThemeContext} from '../theme-context';
const StyledLabel= styled.label`
  position: relative;
  display: inline-block;
  width: 65px;
  height: 30px;
 
`;
const StyledInput= styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + .slider:before {
  -webkit-transform: translateX(-35px);
  -ms-transform: translateX(-35px);
  transform: translateX(-35px);
}
&:not(:checked) + .slider {
  
    background: hsl(230, 22%, 74%);
}
&:checked + .slider::before {
  
    background-color: hsl(230, 17%, 14%);
}

  `;
const StyledSpan= styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  &::before{
    position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  right: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
    border-radius: 50%;
  }`;

const Toggle = ()=>{
    // const [checked, setChecked]=useState(false);

    // function handleChange(){
    //     setChecked(prevState=>!prevState)
    // }
return (
<ThemeContext.Consumer>
{({theme, toggleTheme}) => (
<StyledLabel htmlFor="toggle">
  <StyledInput id="toggle" type="checkbox" checked={theme==='dark'} onChange={toggleTheme}/>
  <StyledSpan className="slider" ></StyledSpan>
</StyledLabel>
 )}
</ThemeContext.Consumer>
);
}

export default Toggle;