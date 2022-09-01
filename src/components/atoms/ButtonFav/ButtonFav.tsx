import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';

import { ReactComponent as FavIcon } from '../../../assets/icon/FavIcon.svg';

interface IBtnFav {
  isFav: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const ButtonFav = ({ isFav, disabled, onClick }: IBtnFav) => {
  return (
    <BtnSt onClick={onClick} disabled={disabled} isFav={isFav}>
      <FavIcon />
    </BtnSt>
  );
};

const BtnSt = styled.button<{ isFav: boolean }>`
  width: 56px;
  height: 56px;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ColorService.PRIMARY};

  svg path {
    stroke: ${ColorService.WHITE};
    fill: ${({ isFav }) => `${isFav ? ColorService.WHITE : ColorService.PRIMARY}`};
  }

  :disabled {
    background: ${ColorService.SECONDARY};
    pointer-events: none;
    svg path {
      stroke: ${ColorService.WHITE};
      fill: ${ColorService.SECONDARY};
    }
  }

  :hover {
    cursor: pointer;
    svg path {
      stroke: ${ColorService.RED};
      fill: ${({ isFav }) => `${isFav ? ColorService.RED : ColorService.PRIMARY}`};
      };
    }
  }
`;
