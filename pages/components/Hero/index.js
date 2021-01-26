import {useState} from 'react';
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
            <HeroP>Pronto em 60 segundos</HeroP>
            <HeroBtn>Peça Agora</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;