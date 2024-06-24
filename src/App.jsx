// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "React" }
];

const BookList = ({ books }) => {
  return (
		<ul>
			{books.map((book) => {
		return <li key={book.id}>{book.name}</li>;
			})}
		</ul>
  );
};

const App = () => {
  return (
    <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};



export default App
