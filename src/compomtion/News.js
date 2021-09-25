import React, { Component } from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types'



export class News extends Component {
    // static defaultprops ={
    //     country : 'in',
    //     pageSzie:8,
    // }
    // static PropTypes = {
    //     country : PropTypes.string,
    //     pageSzie:PropTypes.number,
    // }

    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            totalResults: 0,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c0afb6cb313408a958740e703a37cc1&page=${this.state.page}&pageSzie=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();


        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false });
        console.log(this.state.articles);
    }


    // handelprevclick = async () => {
    //     console.log("prev")
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9c0afb6cb313408a958740e703a37cc1&page=${this.props.page + 1}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     this.setState({ loading: true })

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedata.articles,
    //         loading: false,
    //         totalResults :parsedata.totalResults,


    //     });

    // }
    // handelnextclick = async () => {
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))



    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9c0afb6cb313408a958740e703a37cc1&page=${this.props.page + 1}&pageSize=${this.props.pageSize}`;
    //         let data = await fetch(url);
    //         let parsedata = await data.json();
    //         this.setState({loading:true})
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedata.articles,
    //             loading:false,

    //         });
    //         console.log("next");


    // }
    fetchData = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c0afb6cb313408a958740e703a37cc1&page=${this.state.page+1}&pageSzie=${this.props.pageSize}`;
     
        let data = await fetch(url);
        let parsedata = await data.json();


        this.setState({ articles: this.state.articles.concat(parsedata.articles), 
            totalResults: parsedata.totalResults, 
            page:this.state.page+1 });
        console.log(this.state.articles);
    }
    render() {

        return (
            <>
                <h2 className="text-center">News Of Cricket</h2>
            {this.state.loading && <Spinner className="text-center" />}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                   
                    
                    >
                 
                    <div className="contanier">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return (<div className="mx-3 my-3 col-md-3" key={element.url}>
                                    <Newsitem heading={element.title ? element.title : ""} text={element.description} urltoimg={element.urlToImage}
                                        newsurl={element.url} source={element.source.name} date={element.publishedAt} />
                                </div>)
                            })}
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.handelprevclick}>Priviouas</button>
                    <button type="button" className="btn btn-outline-dark " onClick={this.handelnextclick}>Next</button>
                </div> */}

                </InfiniteScroll>
            </>
        )
    }
}

export default News
