import { ButtonMenuFav } from '../../atoms/ButtonMenuFav';
import { getFavListBooks } from '../../../core/slices/FavBooksSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ButtonMenuFavL = () => {
  const navigate = useNavigate();
  const favList = useSelector(getFavListBooks);
  const hasFav = favList?.length > 0;

  return (
    <ButtonMenuFav
      hasFav={hasFav}
      onClick={() => {
        navigate('/my', { replace: true });
      }}
    />
  );
};
