import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';

export enum ETypeInput {
  password = 'password',
  text = 'text',
  number = 'number',
}

interface IInput {
  value: string | number;
  type: ETypeInput;
  error: string;
  labelText: string;
  placeholder: string;
  disabled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export const Input = ({
  value,
  type,
  error,
  labelText,
  placeholder,
  disabled,
  onChange,
  onBlur,
}: IInput) => (
  <LabelStyled>
    {labelText}
    <InputStyled
      value={value}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      hasError={Boolean(error?.length)}
      onBlur={onBlur}
    />
    {error && <TextError>{error}</TextError>}
  </LabelStyled>
);

const LabelStyled = styled.label`
  color: ${ColorService.SECONDARY};
  font-family: ${getFontFamily('semibold')};
  font-size: 24px;
  line-height: 20px;
  text-align: left;
`;

const InputStyled = styled.input<{ hasError: boolean }>`
  width: calc(100% - 10px);
  padding: 18px 0 18px 10px;
  background: ${ColorService.WHITE};
  border: ${({ hasError }) => `2px solid ${hasError ? ColorService.RED : ColorService.GRAY}`};
  font-size: 24px;
  line-height: 28px;
  outline: none;
  margin: 8px 0 0;

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: ${ColorService.GRAY};
  }

  :focus {
    border: 2px solid ${ColorService.PRIMARY};
  }

  :disabled {
    background: ${ColorService.LIGHT};
    border: 2px solid ${ColorService.LIGHT};
  }
`;

const TextError = styled.span`
  color: ${ColorService.RED};
  font-family: ${getFontFamily()};
  font-size: 24px;
  line-height: 28px;
  display: block;
  margin: 16px 0 0;
`;
