import LinkComponent from '../Link';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaHeart} from 'react-icons/fa';
import { FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,DevelopedBy } from './styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
        <SocialMediaWrap>
          <LinkComponent href="/">
            <SocialLogo>Pizza</SocialLogo>
          </LinkComponent>
          <DevelopedBy>
            <p>Developed with <FaHeart/> by André Luiz </p>
          </DevelopedBy>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank"><FaFacebook/></SocialIconLink>
            <SocialIconLink href="/" target="_blank"><FaInstagram/></SocialIconLink>
            <SocialIconLink href="/" target="_blank"><FaTwitter/></SocialIconLink>
            <SocialIconLink href="/" target="_blank"><FaLinkedin/></SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;