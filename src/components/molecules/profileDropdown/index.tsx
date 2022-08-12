import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from '../../../api/auth/authentication';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES } from '../../../constants/fonts';
import { DPIconLogout } from '../../../icons';

const ProfileDropDown = () => {
  //   const navigate = useNavigate();

  return (
    <ProfileDropDownWraper>
      <ProfileDropdownItem onClick={logoutUser}>
        <span>
          <DPIconLogout />
        </span>
        <p>Logout</p>
      </ProfileDropdownItem>
    </ProfileDropDownWraper>
  );
};

export default ProfileDropDown;

const ProfileDropDownWraper = styled.div`
  position: absolute;
  top: 65px;
  right: 32px;
  width: 12.7rem;
  padding-top: 1.2rem;
  padding-left: 0.5rem;
  background-color: ${COLORS.white};
`;

const ProfileDropdownItem = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: ${FONTSIZES.lg};
  margin-bottom: 1.2rem;
  cursor: pointer;

  &:hover {
    color: ${COLORS['grey-500']};
  }
`;
