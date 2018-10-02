import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Books';

/* Name comes from props and books that it will render will come from the main page */
class Shelf extends React.Component {
	render() {
		return (
			<div className="bookShelf">
				<h2  className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books.map((book,key) => <Book updateBook={this.props.updateBook} book={book} key={key} />)
						}
					</ol>
				</div>
			</div>
		);
	}
}


export default Shelf;