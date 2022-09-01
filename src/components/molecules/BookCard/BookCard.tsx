import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';
import { IBook } from '../../../types/Books';
import { LinkPr } from '../../atoms/Link';

interface IBookCard {
  book: IBook;
}

export const BookCard = ({ book }: IBookCard) => {
  return (
    <CardSt>
      <DivImgSt>
        <ImgSt src={book.image} />
      </DivImgSt>
      <TitleSt>
        <LinkPr url={`/books/${book.isbn13}`} text={book.title}></LinkPr>
      </TitleSt>
      <PriceSt>{book.price}</PriceSt>
    </CardSt>
  );
};

const CardSt = styled.div`
  width: 445px;
  height: 410px;
  display: inline-block;
  flex-direction: column;
  box-sizing: border-box;
  border: 2px solid ${ColorService.BLUE};
`;

const DivImgSt = styled.div`
  width: 445px;
  min-height: 264px;
  max-height: 264px;
  margin-bottom: 20px;
  background: ${ColorService.BLUE};
  margin: -2px 0 0 -2px;
`;

const TitleSt = styled.div`
  width: 100%;
  max-height: 64px;
  min-height: 64px;
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;

  padding: 8px 8px 8px 8px;

  :hover {
    cursor: pointer;
  }
`;

const PriceSt = styled.div`
  width: 100%;
  height: 32px;
  color: ${ColorService.PRIMARY};
  text-align: right;

  font-family: ${getFontFamily()};
  font-size: 32px;
  font-weight: 700;
`;

const ImgSt = styled.img`
  width: 226px;
  min-height: 264px;
  max-height: 264px;
  object-fit: cover;
`;
