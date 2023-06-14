import React, { Component } from 'react'

export default class Book extends Component {
    render() {
      console.log(this.props);
    const { img, title, Author } = this.props.info
    return (
      <article className="book">
        <img src={img} width='150'></img>
        <div>
            <h4>Title: { title }</h4>
            <h6>Author: { Author }</h6>
        </div>
      </article>
    )
  }
}


// import React from 'react'

// export default function Book() {
//   return (
//     <article>
//         <h3>Book : </h3>
//         <h3>Author : </h3>
//     </article>
//   )
// }
