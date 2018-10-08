import React from 'react'
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';
import { Route } from 'react-router-dom';


import * as BooksAPI from './BooksAPI';
import './App.css'

/* Referenced Maeva's walkthrough */ 

class BooksApp extends React.Component {
  state = {
    books: [] 
  }
  gettingBooks () {
  	BooksAPI.getAll().then((books) => {
     this.setState({ books: books })
   }) 
  }
   componentDidMount () {
   		this.gettingBooks()
  }

  moveBook = (book, shelf) => {
  	BooksAPI.update(book, shelf)
      BooksAPI.getAll().then((books) => {
       this.setState({ books: books })
    }) 
  }

  render() {
    return (
      <div className="app">
       <Route exact path="/" render={() => (
    		<MainPage 
      		books={this.state.books}
      		moveBook={this.moveBook}
      	/>
		)} />

		<Route path="/search" render={() => (
    		<SearchPage 
       		moveBook={this.moveBook}
			books={this.state.books}
       		/> 
		)} />
      </div>
    )
  }
}

export default BooksApp
