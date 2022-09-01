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
      <TextSt>{book.authors}</TextSt>
      <PriceSt>{book.price}</PriceSt>
    </CardSt>
  );
};

const CardSt = styled.div`
  width: 445px;
  height: 453px;
  display: inline-block;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
`;

const DivImgSt = styled.div`
  width: 445px;
  min-height: 264px;
  max-height: 264px;
  margin-bottom: 20px;
  background: ${ColorService.BLUE};
`;

const TitleSt = styled.div`
  width: 100%;
  max-height: 64px;
  min-height: 64px;
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;

  padding: 8px 0 8px 0;

  :hover {
    cursor: pointer;
  }
`;

const TextSt = styled.div`
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  color: ${ColorService.SECONDARY};
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  font-family: ${getFontFamily()};
  font-size: 20px;

  padding-bottom: 8px;
`;

const PriceSt = styled.div`
  width: 100%;
  height: 32px;
  color: ${ColorService.PRIMARY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 24px;
  font-weight: 700;

  padding: 8px 0 24px 0;
`;

const ImgSt = styled.img`
  width: 226px;
  min-height: 264px;
  max-height: 264px;
  object-fit: cover;
`;
