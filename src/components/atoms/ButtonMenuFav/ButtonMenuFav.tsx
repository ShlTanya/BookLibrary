import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';

import { ReactComponent as FavIcon } from '../../../assets/icon/FavIcon.svg';

interface IBtnMenuFav {
  hasFav: boolean;
  onClick: () => void;
}

export const ButtonMenuFav = ({ hasFav, onClick }: IBtnMenuFav) => {
  return (
    <BtnSt onClick={onClick}>
      <FavIcon />
      {hasFav && <CircleDiv />}
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

  :hover {
    cursor: pointer;
  }
`;

const CircleDiv = styled.div`
  position: absolute;
  top: 12px;
  left: 30px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid ${ColorService.WHITE};
  background: ${ColorService.RED};
`;
