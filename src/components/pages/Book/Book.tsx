import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { ButtonFav } from '../../atoms/ButtonFav';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services';
import { Title } from '../../atoms/Title';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';
import { Button } from '../../atoms/Button';
import { ReactComponent as HomeIcon } from '../../../assets/icon/ArrowLeftIcon.svg';
import { getBook, getBookAction, setFavBook } from '../../../core/slices/BookSlice';
import { addToFav, delFromFav, getFavListBooks } from '../../../core/slices/FavBooksSlice';
import { addToBasket } from '../../../core/slices/BasketSlice';

export const BookPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const bookStore = useSelector(getBook);
  const favList = useSelector(getFavListBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    const isbn13 = params?.bookID;
    if (isbn13) {
      dispatch(getBookAction({ isbn13, favList }) as any);
    }
  }, [dispatch, params?.bookID, favList]);

  return (
    <FormTemplate>
      <HomeSt onClick={() => navigate(-1)}>
        <HomeIcon />
      </HomeSt>
      <Title text={bookStore?.title} />
      <BookSt>
        <DivImgSt>
          <ImgSt src={bookStore?.image} />
          <BtnFavSt
            isFav={bookStore?.isFav || false}
            disabled={false}
            onClick={() => {
              dispatch(setFavBook(bookStore));
              if (bookStore?.isFav) {
                dispatch(delFromFav(bookStore?.isbn13));
              } else {
                dispatch(addToFav(bookStore?.isbn13));
              }
            }}></BtnFavSt>
        </DivImgSt>
        <BlockTextSt>
          <PriceSt>{bookStore?.price}</PriceSt>
          <InfoStrSt>
            <Info1St>Authors</Info1St>
            <Info2St>{bookStore?.authors}</Info2St>
          </InfoStrSt>
          <InfoStrSt>
            <Info1St>Publisher</Info1St>
            <Info2St>{bookStore?.publisher}</Info2St>
          </InfoStrSt>
          <InfoStrSt>
            <Info1St>Language</Info1St>
            <Info2St>English</Info2St>
          </InfoStrSt>
          <ButtonSt>
            <Button
              text={'ADD TO CARD'}
              onClick={() => {
                console.log('add to card');
                dispatch(addToBasket(bookStore));
              }}
            />
          </ButtonSt>
        </BlockTextSt>
      </BookSt>
      <TabsSt selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <TabListSt>
          <TabSt>Descripion</TabSt>
          <TabSt>Autors</TabSt>
        </TabListSt>
        <TabPanelSt>{bookStore?.desc}</TabPanelSt>
        <TabPanelSt>{bookStore?.authors}</TabPanelSt>
      </TabsSt>
    </FormTemplate>
  );
};

const HomeSt = styled.div`
  width: 100%;
  display: flex;
  padding-top: 72px;

  svg path {
    fill: ${ColorService.PRIMARY};
  }

  :hover {
    cursor: pointer;
  }
`;

const BookSt = styled.div`
  width: 100%;
  display: flex;
  align-items: space-between;
  padding-bottom: 72px;
  gap: 128px;
`;

const DivImgSt = styled.div`
  display: grid;
  grid-template-columns: 444px 1fr;
`;

const ImgSt = styled.img`
  max-width: 300px;
  min-width: 300px;
  max-height: 350px;
  min-height: 350px;
  object-fit: cover;
  border: 100px solid ${ColorService.ORANGE};
  grid-area: 1 / 1 / 2 / 2;
`;

const BtnFavSt = styled(ButtonFav)`
  grid-area: 1 / 1 / 2 / 2;
`;

const BlockTextSt = styled.div`
  width: 100%;
  border-top: 1px solid ${ColorService.SECONDARY};
`;

const PriceSt = styled.div`
  width: 100%;
  height: 32px;
  color: ${ColorService.PRIMARY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 50px;
  font-weight: 700;

  padding: 24px 0 40px 0;
`;

const InfoStrSt = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Info1St = styled.div`
  width: 100%;

  color: ${ColorService.SECONDARY};
  text-align: left;

  font-family: ${getFontFamily()};
  font-size: 30px;
  font-weight: 400;
`;

const Info2St = styled.div`
  width: 100%;
  height: auto;
  white-space: wrap;

  color: ${ColorService.PRIMARY};
  text-align: right;

  font-family: ${getFontFamily()};
  font-size: 30px;
  font-weight: 400;
`;

const ButtonSt = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const TabsSt = styled(Tabs)`
  font-family: ${getFontFamily()};
  color: ${ColorService.PRIMARY};
  font-size: 30px;
  width: 100%;
`;

const TabListSt = styled(TabList)`
  list-style-type: none;
  display: flex;
  margin: 0;
  border-bottom: 1px solid ${ColorService.SECONDARY};
`;

const TabSt = styled(Tab)`
  margin-right: 4px;
  padding: 4px;
  user-select: none;
  cursor: pointer;
  width: 200px;
  text-align: center;

  &.is-selected {
    color: white;
    background: ${ColorService.PRIMARY};
    border-bottom: 2px solid ${ColorService.PRIMARY};
  }

  &:focus {
    outline: none;
  }
`;

const TabPanelSt = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 4px;
  margin-top: 20px;
  font-family: ${getFontFamily()};
  color: ${ColorService.PRIMARY};
  font-size: 30px;
  text-align: left;

  &.is-selected {
    display: block;
  }
`;
