import React, { Component } from "react";

export class Newsitem extends Component {
    
  render() {
    let {title, description, imageUrl, newsurl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://dailyhodl.com/wp-content/uploads/2022/11/Drop-for-Two-cryto.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem;
