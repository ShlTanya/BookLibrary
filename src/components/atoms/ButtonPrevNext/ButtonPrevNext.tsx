import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

import { ReactComponent as PrevIcon } from '../../../assets/icon/PrevIcon.svg';
import { ReactComponent as NextIcon } from '../../../assets/icon/NextIcon.svg';

interface IBtn {
  btnType: 'Next' | 'Prev';
  disabled?: boolean;
  onClick: () => void;
}

export const ButtonPrevNext = ({ btnType, disabled, onClick }: IBtn) => (
  <BtnSt onClick={onClick} disabled={disabled}>
    {btnType == 'Next' ? <NextIcon /> : <PrevIcon />}
    <TextSt>{btnType}</TextSt>
  </BtnSt>
);

const BtnSt = styled.button`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  background: TRANSPARENT;
  border: 0px;
  color: ${ColorService.BLACK};
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: ${getFontFamily()};

  svg path {
    fill: ${ColorService.BLACK};
    margin-right: 10px;
  }

  :disabled {
    pointer-events: none;
    color: ${ColorService.SECONDARY};
    svg path {
      fill: ${ColorService.SECONDARY};
    }
  }

  :hover {
    color: ${ColorService.PRIMARY};
    cursor: pointer;
    svg path {
      fill: ${ColorService.PRIMARY};
    }
  }
`;

const TextSt = styled.div`
  user-select: none;
  margin-left: 10px;
`;
