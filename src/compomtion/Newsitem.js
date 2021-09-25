import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { heading, text, urltoimg, newsurl,source,date } = this.props;
        return (

            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!urltoimg?"https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-887657568.jpg?w=600" : urltoimg} className="card img-top" alt="..." />
                    <div className="card-body">
                        <h2>{heading}</h2>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">{source}author on {new Date (date).toGMTString()}</small></p>
                        <a href={newsurl}  rel="stylesheet" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Newsitem
