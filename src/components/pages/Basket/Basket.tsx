import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';
import { Title } from '../../atoms/Title';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import { getBasket, addCount, decCount, delFromBasket } from '../../../core/slices/BasketSlice';
import { LinkPr } from '../../atoms/Link';
import { Button } from '../../atoms/Button';
import { ButtonPrevLink } from '../../atoms/ButtonPrevLink';

export const BasketPage = () => {
  const basketStore = useSelector(getBasket);
  const dispatch = useDispatch();

  return (
    <FormTemplate>
      <ButtonPrevLink />
      <Title text="BASKET" />
      <BasketSt>
        <MainListSt>
          {basketStore?.bookList?.map((book) => (
            <CardSt key={book.book.isbn13}>
              <DivImgSt>
                <ImgSt src={book.book.image} />
              </DivImgSt>
              <AreaDivSt>
                <TitleSt>
                  <LinkPr url={`/books/${book.book.isbn13}`} text={book.book.title}></LinkPr>
                </TitleSt>
                <TextSt>{book.book.authors}</TextSt>
                <TextSt>price: {book.book.price}</TextSt>
                <CountDivSt>
                  <Button
                    text={'+'}
                    onClick={() => {
                      dispatch(addCount(book.book.isbn13));
                    }}
                  />
                  {book.count}
                  <Button
                    text={'-'}
                    onClick={() => {
                      dispatch(decCount(book.book.isbn13));
                    }}
                  />
                </CountDivSt>
                <DelSt
                  onClick={() => {
                    dispatch(delFromBasket(book.book.isbn13));
                  }}>
                  удалить
                </DelSt>
              </AreaDivSt>
              <AmountSt>${book.amount}</AmountSt>
            </CardSt>
          ))}
        </MainListSt>
        <TotalSt> Total: ${basketStore.allAmount}</TotalSt>
      </BasketSt>
    </FormTemplate>
  );
};

const BasketSt = styled.div`
  max-width: 1200px;
  min-width: 1200px;
`;

const MainListSt = styled.div`
  width: 100%;
  gap: 30px;
`;

const TotalSt = styled.div`
  width: 100%;
  max-height: 40px;
  min-height: 40px;
  text-align: right;

  font-family: ${getFontFamily()};
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const CardSt = styled.div`
  width: 100%;
  min-height: 218px;
  max-height: 218px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: start;
  margin-bottom: 20px;
  border-bottom: 1px solid ${ColorService.SECONDARY};
`;

const CountDivSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 40px;
  color: ${ColorService.PRIMARY};
  text-align: center;

  font-family: ${getFontFamily()};
  font-size: 36px;
  font-weight: 500;

  margin-bottom: 15px;
`;

const AreaDivSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 30px 0 30px;
  gap: 10px;
`;

const TitleSt = styled.div`
  width: 100%;
  max-height: 40px;
  min-height: 40px;
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`;

const TextSt = styled.div`
  width: 100%;
  color: ${ColorService.SECONDARY};
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  font-family: ${getFontFamily()};
  font-size: 18px;
`;

const DelSt = styled.div`
  width: 100%;
  color: ${ColorService.SECONDARY};
  text-align: left;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  font-family: ${getFontFamily()};
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;

const AmountSt = styled.div`
  min-width: 200x;
  max-width: 400px;
  color: ${ColorService.PRIMARY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 24px;
  font-weight: 700;

  padding: 8px 0 24px 0;
`;

const DivImgSt = styled.div`
  min-width: 256px;
  max-width: 256px;
  min-height: 198px;
  max-height: 198px;
  background: ${ColorService.BLUE};
`;

const ImgSt = styled.img`
  width: 164px;
  min-height: 190px;
  max-height: 190px;
  object-fit: cover;
`;
