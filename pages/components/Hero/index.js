import React,{useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './styles';
function Hero() {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <>
      <HeroContainer>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;