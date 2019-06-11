import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'book-list',
  styleUrl: 'book-list.css'
})
export class BookList {
  @State() books = [];
  componentWillLoad() {
    return this.callApi(`{ books { name } }`);
  }
  callApi(query: string) {
    return fetch(
      'http://localhost:5001/ajonp-refactr-tech-graphql/us-central1/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(responseAsJson => {
        this.books = responseAsJson.data.books;
      });
  }
  render() {
    return this.books.map(book => <p>{book.name}</p>);
  }
}
