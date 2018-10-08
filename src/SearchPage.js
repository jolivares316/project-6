import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';


class SearchPage extends Component {
  state = {
  	query: '',
    bookSearches: []
  }
  updateQuery=(query) => {
  	this.setState({
    	query: query
    })
    this.updateBookSearches(query);
  }
  updateBookSearches = (query) => {
    if (query) {
    	BooksAPI.search(query).then((bookSearches) => {
        this.setState({ bookSearches })
        })
      	.catch ( () => this.setState({ bookSearches: [] })
               );
    } else {
    		this.setState({ bookSearches: [] });
    }
  	
  }

  render () {

    	return (
        	<div className="search-books">
            	<div className="search-books-bar">
              		<Link to="/" 
             			className="close-search" 
             		>Close</Link>
              		<div className="search-books-input-wrapper">
                		<input 
							type="text" 
							placeholder="Search by title or author" 
							value={this.state.query} 
							onChange={(event) => this.updateQuery(event.target.value)}
					/>
              		</div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
						{this.state.bookSearches.map(bookSearches => {
                         	let shelf = "none";
                         	this.props.books.map(book => (
                         		book.id === bookSearches.id ?
                         		shelf = book.shelf : ''
                         	));
                        	return (
                         			<li key={bookSearches.id}>
									<Book
										book={bookSearches}
										moveBook={this.props.moveBook}
										currentShelf={shelf}
									/>
									</li>
                         			);
                        })
                         		
                        	
						}
					</ol>
            	</div>
          	</div>
        );
    }
}

export default SearchPage; 