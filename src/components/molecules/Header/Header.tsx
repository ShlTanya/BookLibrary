import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';

import { ButtonMenuBasketL } from '../../logicalcomp/ButtonMenuBasketL';
import { ButtonMenuUser } from '../../atoms//ButtonMenuUser';
import { ButtonMenuFavL } from '../../logicalcomp/ButtonMenuFavL';

export const Header = () => {
  return (
    <HeaderSt>
      <DivLeftSt>
        <DivTxt>BOOKSTORE</DivTxt>
      </DivLeftSt>
      <DivRightSt>
        <ButtonMenuFavL />
        <ButtonMenuBasketL />
        <ButtonMenuUser
          onClick={() => {
            throw new Error('Function not implemented.');
          }}
        />
      </DivRightSt>
    </HeaderSt>
  );
};

const HeaderSt = styled.header`
  color: ${ColorService.PRIMARY};
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
`;

const DivLeftSt = styled.div`
  height: 100%;
  display: flex;
`;

const DivRightSt = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const DivTxt = styled.div`
  font-family: ${getFontFamily()};
  font-size: 38px;
  margin-top: auto;
  margin-bottom: auto;
`;
