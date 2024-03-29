import React, { Component } from 'react'
import NewsItem from './NewsItem';
import SpinnerLoad from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps={
        pageSize:18 ,
        country:"in",
        category:"general"
    }
    static propTypes={
        pageSize:PropTypes.number,
        country:PropTypes.string,
        category:PropTypes.string,
    }
    constructor(){
        super();
        this.state={
            articles:[],
            loading:true,
            page:1,
            maxPage:1,
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3abb2dbe4b5430eaae6242de90e357f&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData=await data.json();
        let ttlArt=parsedData.totalResults;
        let mp= Math.ceil(ttlArt/18)
        this.setState({
            articles : parsedData.articles,
            maxPage : mp,
            loading:false
        })
        console.log(mp);
    }
    handleNextClick=async()=>{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3abb2dbe4b5430eaae6242de90e357f&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page:this.state.page+1,
            articles : parsedData.articles,
            loading : false,
        })
    }
    handlePrevClick=async()=>{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3abb2dbe4b5430eaae6242de90e357f&pageSize=${this.props.pageSize}&page=${this.state.page-1}`
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({
            page:this.state.page-1,
            articles : parsedData.articles,
            loading : false,
        })
    }
    
  render() {
    return (
      
        <div className='container my-5'>
            <div className="text-center">
            <h1>Daily Bugle-Headlines on fire</h1>
            {this.state.loading && <SpinnerLoad/>}
            </div>
            <div className="row my-4">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return(<div className="col-md-4">
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} newsUrl={element.url} imageUrl={element.urlToImage}/>
                </div>)
                })}
                
            </div>
            
            <div className='d-flex justify-content-between'>
                <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                <span>{this.state.page}</span>
                <button type="button" disabled={this.state.page+1>this.state.maxPage} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
            </div>

        </div>
    )
  }
}

export default News
