import { Component, h } from '@stencil/core';

@Component({
  tag: 'book-add',
  styleUrl: 'book-add.css'
})
export class BookAdd {
  addBook() {
    return fetch(
      'http://localhost:5001/ajonp-refactr-tech-graphql/us-central1/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `mutation{
            addBook(name: "Test", genre: "Fiction") {
              name
            }
          }`
        })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(responseAsJson => {
        console.log(responseAsJson);
      });
  }
  render() {
    return (
      <ion-button expand="block" onClick={this.addBook}>
        Add Book
      </ion-button>
    );
  }
}
