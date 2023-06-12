import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
import { useEffect } from 'react';

const News = (props) => {

  const[articles,setArticles] = useState([])
  const[loading,setLoading] = useState(true)
  const[page,setPage] = useState(1)
  const[totalResults,setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  

  // bgModeChange = ()=>{
  //   if(this.state.bgMode === 'light'){
  //       this.setState({
  //         bgModemode : 'dark',
  //       })
  //     }
  //     else{
  //       this.setState({
  //         bgModemode : 'light',
  //       })
  //     }
  // }

  const updateNews = async()=>{
    console.log("cdm")
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    // this.setState({loading : true})
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(50)
    console.log(parsedData)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults,loading:false})
    props.setProgress(100)
  }


  // async componentDidMount(){
  //   this.updateNews();
  // }

  useEffect(()=>{
    updateNews();
    document.title = `${capitalizeFirstLetter(props.category)}-NewsMonkey`

    // eslint-disable-next-line
  },[])

  const fetchMoreData = async () => {
    // this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page +1)
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    // this.setState({loading : true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    // this.setState({articles : this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults})
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  // handleNextClick = async()=>{

  //   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){

  //   console.log("Next");
  //   console.log("cdm")
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e0adf3696182435696fb8da94b97899d&page=${this.state.page + 1}&pageSize=${props.pageSize}`
  //   this.setState({loading: true})
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   // console.log(parsedData)
  //   this.setState({
  //     articles : parsedData.articles,
  //     page : this.state.page + 1,
  //     loading: false
  //   })
  // }
    // this.setState({page: this.state.page+1})
    // this.updateNews();
  // }

  // handlePrevClick = async()=>{
    // console.log("Prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e0adf3696182435696fb8da94b97899d&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // // console.log(parsedData)
    // this.setState({
    //   articles : parsedData.articles,
    //   page : this.state.page - 1
    // })
  //   this.setState({page: this.state.page-1})
  //   this.updateNews();
  // }

    
    return (
      <>
      
      {/* <div className="container my-3" > */}
        <h1 className="text-center" style={{margin : '90px  0px', marginTop : '90px'} }>NewsMonkey - Top {capitalizeFirstLetter(props.category)}   Headlines </h1>

        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title?element.title.slice(0,55):""} description = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date = {element.publishedAt
} source = {element.source.name}/>
              </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      {/* </div> */}
      {/* <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
      
      </>
    )
    }


export default News
// e0adf3696182435696fb8da94b97899d

News.defaultProps = {
  country : 'in',
  pageSize : 8,
  category : 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
}