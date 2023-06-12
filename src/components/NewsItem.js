import React, { Component } from 'react'

const NewsItem = (props)=> {
  // constructor(){
  //   super();
  //   console.log("This is a constructor")
  // }
  
    let {title,description,imageUrl,newsUrl,author,date,source } = props;
    return (
      <div>
        
        <div className="my-3">
        <div className="card">
          <div style = {{display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'}}>
        <span className="badge rounded-pill bg-danger">{source} 
              </span>
              </div>
              <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/06/09/1600x900/space-1728186_640_1685508037976_1686297451585.jpg":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
              </div>
</div>
      </div>
      </div>
    )
  
}

export default NewsItem
