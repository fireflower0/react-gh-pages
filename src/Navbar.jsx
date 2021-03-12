import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div``;

const NavContent = styled.span`
  padding: 10px;
`;

const Navbar = () => {
  const navContents = [{
    id: 1,
    path: '/',
    label: 'Home'
  }, {
    id: 2,
    path: '/about',
    label: 'About'
  }];

  const makeNavContent = (content) => (
    <NavContent key={content.id} >
      <Link to={content.path} >{content.label}</Link>
    </NavContent>
  );

  return (
    <FormWrapper>
      {navContents.map(makeNavContent)}
    </FormWrapper>
  );
};

export default Navbar;
