import React, { Component } from 'react'
import NewsItem from './NewsItem';


export class News extends Component {
    articles=[
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Adela Suliman",
        "title": "Polio virus detected in London sewage; no cases reported - The Washington Post",
        "description": "Traces of type 2 vaccine-derived poliovirus were detected during routine surveillance of sewage in London.",
        "url": "https://www.washingtonpost.com/world/2022/06/23/uk-polio-virus-london-sewage/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YUPOPZHS4EI6ZLAWR67XDFGNPA.jpg&w=1440",
        "publishedAt": "2022-06-23T18:43:37Z",
        "content": "Placeholder while article actions load\r\nLONDON The United Kingdom has declared a rare national incident after traces of the highly contagious poliovirus were found in sewage in London, the government… [+4739 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Jennifer Hassan",
        "title": "U.S. artistic swimmer who fainted underwater at world championships rescued by coach - The Washington Post",
        "description": "« I had to jump in because the lifeguards weren’t doing it, » said coach Andrea Fuentes, who rescued Anita Alvarez.",
        "url": "https://www.washingtonpost.com/sports/2022/06/23/anita-alvarez-swimmer-faint-world-championships/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TECDHIXSIII6ZLAWR67XDFGNPA.jpg&w=1440",
        "publishedAt": "2022-06-23T18:37:39Z",
        "content": "Placeholder while article actions load\r\nTwo-time Olympics swimmer Anita Alvarez fainted and sank to the bottom of the pool during Wednesdays World Aquatics Championships in Budapest. Her coach on Tea… [+3007 chars]"
        }
    ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=c3abb2dbe4b5430eaae6242de90e357f"
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData)
        this.setState({
            articles : parsedData.articles
        })
    }
    
  render() {
    return (
      
        <div className='container my-5'>
            <h3>Daily Bugle-Headlines on fire</h3>
            <div className="row my-4">
                {this.state.articles.map((element)=>{
                    return(<div className="col-md-4">
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} newsUrl={element.url} imageUrl={element.urlToImage}/>
                </div>)
                })}
                
            </div>

        </div>
    )
  }
}

export default News
