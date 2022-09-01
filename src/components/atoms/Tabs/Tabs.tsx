import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { LinkPr } from '../Link';

interface ITab {
  title: string;
  addTitle: string;
  url: string;
}

interface ITabs {
  list: ITab[];
  activeTabUrl: string;
}

export const Tabs = ({ list, activeTabUrl }: ITabs) => (
  <TabSt>
    <ListSt>
      {list.map(({ title, addTitle, url }) => (
        <Li key={url}>
          <LinkSt active={activeTabUrl == url}>
            <LinkPrSt url={url} text={`${title}${addTitle}`} />
          </LinkSt>
        </Li>
      ))}
    </ListSt>
  </TabSt>
);

const TabSt = styled.div`
  width: 100%;
  padding: 0 0 10px 0;
`;

const ListSt = styled.ul`
  color: ${ColorService.WHITE};
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: flex-start;
  gap: 36px;
  border-bottom: 2px solid ${ColorService.GRAY};
`;

const Li = styled.li``;

const LinkSt = styled.div<{ active: boolean }>`
  position: relative;
  top: 2px;
  font-size: 28px;
  line-height: 40px;
  display: block;
  border-bottom: ${({ active }) =>
    `2px solid  ${active ? ColorService.RED : ColorService.TRANSPARENT}`};
`;

const LinkPrSt = styled(LinkPr)``;
