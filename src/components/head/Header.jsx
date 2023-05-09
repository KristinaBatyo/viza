/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import {ReactComponent as MyButton} from '../image/menu-btn.svg'
import {
  HeaderStyled,
  Nav,
  ContactList,
  ContactItem,
  Mail,
  Number,
  Img,
  MenuBtn,
  //   NavLogo,
} from './Header.styled';
import { MobileMenu } from 'components/mobile-menu/MobileMenu';

export const Head = () => {


  const items = [
    { value: 'Nabizime pro vas', href: '#nabizime' },
    { value: 'Recenze', href: '#recenze' },
    // { value: 'Магазин', href: '/mainss' },
  ];
  const [menuActive, setMenuActive] = useState(false);


  return (
    <HeaderStyled>
      <MenuBtn type="button" onClick={() => setMenuActive(!menuActive)}>
        <MyButton fill="white" />
      </MenuBtn>
      <Nav>
        <a href="/">
          {' '}
          <Img
            src={require('../image/logo.jpg')}
            alt="Tacos With Lime"
            width="140"
          />
        </a>
      </Nav>
      <ContactList>
        <ContactItem>
          <Mail href="mailto:leskablesk1@seznam.cz">leskablesk1@seznam.cz</Mail>
        </ContactItem>
        <ContactItem>
          <Number href="tel:+380961111111">+420 777 043 272</Number>
        </ContactItem>
      </ContactList>
      <MobileMenu active={menuActive} setActive={setMenuActive} items={items} />
    </HeaderStyled>
  );
};


