import { ButtonMenuBasket } from '../../atoms/ButtonMenuBasket';
import { getBasket } from '../../../core/slices/BasketSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ButtonMenuBasketL = () => {
  const navigate = useNavigate();
  const basket = useSelector(getBasket);
  const hasPurchases = basket?.bookList.length > 0;

  return (
    <ButtonMenuBasket
      hasPurchases={hasPurchases}
      onClick={() => {
        navigate('/basket', { replace: true });
      }}
    />
  );
};
