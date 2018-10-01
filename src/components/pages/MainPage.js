import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'

import Shelf from '../Shelf';

/* Adds empty array */
class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}

	/* Coming from BooksAPI and causes re-render */
	componentDiDMount() {
		BooksAPI.getAll()
		.then(resp => {
			this.setState({ books: resp });
		});
	}
	/* Filter books and re-add it back */
	updateBook = (book, shelf) => {
		BooksAPI.update(book, shelf)
		.then(resp => {
			book.shelf = shelf;
			this.setState(state => ({
				books: state.books.filter(b => b.id !== book.id).concat([book])
			}));
		});
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
					/* Passing the name of the shelf and all the books to render */
						<Shelf updateBook={this.updateBook} name="Currently Reading" books={this.state.book.filter(b => b.shelf === "currentlyReading")} />
						<Shelf updateBook={this.updateBook} name="want To Read" books={this.state.book.filter(b => b.shelf === "wantToRead")} />
						<Shelf updateBook={this.updateBook} name="Read" books={this.state.book.filter(b => b.shelf === "read")} />
					</div>
				</div>
				<div className="open-search">
					<Link to "/search">Add a book</link>
				</div>
			</div>
		);
	}
}


export default MainPage;