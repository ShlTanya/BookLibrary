import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { NewBooksPage } from './components/pages/NewBooks/NewBooks';
import { BasketPage } from './components/pages/Basket/Basket';
import { FavBooksPage } from './components/pages/FavBooks/FavBooks';
import { SearchBooksPage } from './components/pages/SearchBooks/SearchBooks';
import { BookPage } from './components/pages/Book/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="newbooks" element={<NewBooksPage />} />
          <Route path="searchbooks" element={<SearchBooksPage />} />
          <Route path="my" element={<FavBooksPage />} />
          <Route path="/books/:bookID" element={<BookPage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="/" element={<NewBooksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
