import React, { Component } from 'react';

/* Referenced Maeva's walkthrough */ 

class Book extends Component {
  
  	bookManagement (e) {
  		this.props.moveBook(
      		this.props.book, e.target.value
      	)
  	}
	render () {
      let bookThumbnail = this.props.book.imageLinks ?
          this.props.book.imageLinks.thumbnail : '';
    	return (
        	<div className="book">
               <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookThumbnail}"` }}></div>
                 <div className="book-shelf-changer">
                 	<select
						onChange={(e) => (
                        	this.bookManagement(e)
                        )}
						value={this.props.currentShelf}
					>
                    	<option value="move" disabled>Move to...</option>
                    	<option value="currentlyReading">Currently Reading</option>
                    	<option value="wantToRead">Want to Read</option>
                    	<option value="read">Read</option>
                    	<option value="none">None</option>
                    </select>
                 </div>
               </div>
               <div className="book-title">{this.props.book.title}</div>
               <div className="book-authors">{this.props.book.authors}</div>  
            </div>  
        );
    }
}

export default Book; 