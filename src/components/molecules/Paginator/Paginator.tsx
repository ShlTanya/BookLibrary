import styled from 'styled-components';
import { ButtonPrevNext } from '../../atoms/ButtonPrevNext/ButtonPrevNext';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';

interface IPaginator {
  pageCount: number;
  selPageNo: number;
  onPageClick: (newPageNo: number) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Paginator = ({
  pageCount,
  selPageNo,
  onPageClick,
  onPrevClick,
  onNextClick,
}: IPaginator) => {
  return (
    <DivSt>
      <ButtonPrevNext
        disabled={selPageNo ? 1 == selPageNo : false}
        btnType="Prev"
        onClick={() => onPrevClick()}></ButtonPrevNext>
      <DivPagesSt>
        {selPageNo != 1 && <PSt onClick={() => onPageClick(1)}>1</PSt>}
        {selPageNo - 1 > 2 && <PSt>...</PSt>}
        {selPageNo - 1 > 1 && <PSt onClick={() => onPageClick(selPageNo - 1)}>{selPageNo - 1}</PSt>}
        <PSelSt>{selPageNo}</PSelSt>
        {selPageNo + 1 < pageCount && (
          <PSt onClick={() => onPageClick(selPageNo + 1)}>{selPageNo + 1}</PSt>
        )}
        {selPageNo + 1 < pageCount - 1 && <PSt>...</PSt>}
        {selPageNo != pageCount && pageCount > 0 && (
          <PSt onClick={() => onPageClick(pageCount)}>{pageCount}</PSt>
        )}
      </DivPagesSt>
      <ButtonPrevNext
        disabled={selPageNo ? selPageNo >= pageCount : false}
        btnType="Next"
        onClick={() => onNextClick()}></ButtonPrevNext>
    </DivSt>
  );
};

const DivSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const DivPagesSt = styled.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${ColorService.PRIMARY};
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  letter-spacing: 0.05em;
  font-family: ${getFontFamily()};
  gap: 20px;
`;

const PSt = styled.p`
  :hover {
    color: ${ColorService.PRIMARY};
    font-family: ${getFontFamily('bold')};
    cursor: pointer;
  }
`;

const PSelSt = styled.p`
  font-weight: 700;
  font-size: 25px;
  color: ${ColorService.RED};
  font-family: ${getFontFamily('bold')};
`;
