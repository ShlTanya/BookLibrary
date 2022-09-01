import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';

interface ILink {
  text: string;
  onNewPage?: boolean;
  url: string;
}

export const LinkPr = ({ text, url, onNewPage }: ILink) => (
  <StyledLink to={url} target={onNewPage ? '_blank' : ''}>
    {text}
  </StyledLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${getFontFamily()};
  color: ${ColorService.PRIMARY};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
    color: ${ColorService.SECONDARY};
  }
`;
