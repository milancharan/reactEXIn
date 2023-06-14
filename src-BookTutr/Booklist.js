import React, { Component } from 'react'
import Book from "./Book"
import BookData from "./BookData"

export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books : BookData
        }
    }
    // state = {
    //     books : BookData
    // }

  render() {
    // const books = this.state.books.map(item=>item.book)
    // console.log(books);
    return (
      <div>
        This is Our Booklist.
        {this.state.books.map((item) =>  (<Book key={item.id} info={item} />))}
      </div>
    )
  }
}



// import React from 'react'
// import Book from "./Book"

// export default function Booklist() {
//   return (
//     <div>
//         This is the Booklist.
//         <Book />
//     </div>
//   )
// }
