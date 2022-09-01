import { Tabs } from '../../atoms/Tabs';
import { getFavListBooks } from '../../../core/slices/FavBooksSlice';
import { useSelector } from 'react-redux';

interface IFormTemplate {
  activeTabUrl: string;
}

export const MainTabs = ({ activeTabUrl }: IFormTemplate) => {
  const favList = useSelector(getFavListBooks);

  const cnt = favList.length;

  let tabs = [
    { title: 'New books', addTitle: '', url: '/newbooks' },
    { title: 'My favorites', addTitle: `(${cnt})`, url: '/my' },
    { title: 'Search', addTitle: '', url: '/searchbooks' },
  ];

  return <Tabs list={tabs} activeTabUrl={activeTabUrl}></Tabs>;
};
