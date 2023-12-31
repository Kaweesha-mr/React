import React, { Component, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BookCOntext } from '../context/BookContext';


const BookList = () => {

  const {isLightTheme,light,dark} = useContext(ThemeContext);
  const{books} = useContext(BookCOntext)

  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
          )
        })}

      </ul>
    </div>);
}


export default BookList;