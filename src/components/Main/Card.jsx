import { MdFavorite } from "react-icons/md";

import React, { Component } from "react";

export default class Card extends Component {
  state = { fav: false };

  

  render() {
    const { title, desc, image } = this.props;
  
  const toggleFavorite = ()=>{
    this.setState({fav:!this.state.fav})
  }
    return (
      <div className="card">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="img-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="card-over">
          <p>{desc}</p>
        </div>

        <MdFavorite size={30} className="icon" color={this.state.fav?"red":""} onClick={toggleFavorite} />
      </div>
    );
  }
}