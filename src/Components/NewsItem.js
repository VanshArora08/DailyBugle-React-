import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card grid-md-4" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,45)}...</h5>
            <p className="card-text">{description.slice(0,85)}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
