import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

interface IBtn {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ text, disabled, onClick }: IBtn) => {
  return (
    <BtnSt onClick={onClick} disabled={disabled}>
      <TextSt>{text}</TextSt>
    </BtnSt>
  );
};

const BtnSt = styled.button`
  padding: 10px 16px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  border: 0px;
  background: ${ColorService.PRIMARY};
  color: ${ColorService.WHITE};
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  font-family: ${getFontFamily()};
  gap: 10px;

  :disabled {
    background: ${ColorService.SECONDARY};
    pointer-events: none;
  }

  :hover {
    background: ${ColorService.PRIMARY2};
    cursor: pointer;
  }
`;

const TextSt = styled.div`
  user-select: none;
`;
