import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';

import { ReactComponent as UserIcon } from '../../../assets/icon/UserIcon.svg';

interface IBtnUser {
  onClick: () => void;
}

export const ButtonMenuUser = ({ onClick }: IBtnUser) => {
  return (
    <BtnSt onClick={onClick}>
      <UserIcon />
    </BtnSt>
  );
};

const BtnSt = styled.button`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background: ${ColorService.WHITE};

  svg path {
    stroke: ${ColorService.PRIMARY};
  }
`;
