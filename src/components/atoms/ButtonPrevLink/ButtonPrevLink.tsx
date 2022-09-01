import styled from 'styled-components';

import { ColorService } from '../../../services/ColorService';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as PrevLinkIcon } from '../../../assets/icon/ArrowLeftIcon.svg';

export const ButtonPrevLink = () => {
  const navigate = useNavigate();
  return (
    <HomeSt onClick={() => navigate(-1)}>
      <PrevLinkIcon />
    </HomeSt>
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
