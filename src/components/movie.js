import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {retrieveMovie} from "../actions/movielistAction";
import {Glyphicon} from "react-bootstrap";
import Comment from "../components/comment"

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {movie: {Title:"",yearReleased:"",image:"",reviews:[]} , rating:""}

    }

    componentDidMount(){
        let title = queryString.parse(this.props.location.search).title
        localStorage.setItem('title',title)
        const {dispatch} = this.props;
        dispatch(retrieveMovie(localStorage.getItem('token'))).then(res=> {

                if(this.state.movie !== res.results) {
                    this.setState({movie: res.results, rating:res.rating})
                    console.log(this.state.movie)
                }
            }
        )
    }



    render(){
        return (
            <div>
                {typeof (this.state.movie) === "undefined" ? <div>Sorry , we don't have any information here</div>:
                    (
                    <div className="row">

                        <div className="column left">
                            <b>{this.state.movie.Title}</b>
                            <br/>
                            <b>{this.state.movie.yearReleased}</b>
                            <p><Glyphicon glyph={'star'}/>{parseFloat(this.state.rating).toFixed(2)} &nbsp;</p>
                            <img  width="100" height="40" src={this.state.movie.image} alt={this.state.movie.Title}/>

                        </div>
                        {typeof (this.state.movie.reviews) === "undefined" ? <div>No reviews</div> :
                            <div className="column right">
                                {this.state.movie.reviews.map((item, i) =>

                                    <div key={i}>
                                        <i style={{fontSize: 30}}>{item.review}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub
                                        style={{fontSize: 30}}>{item.author_name}</sub>
                                    </div>
                                )
                                }
                            </div>

                        }
                        <div className="column left">
                            <Comment/>
                        </div>
                    </div>
                )
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(Movie);