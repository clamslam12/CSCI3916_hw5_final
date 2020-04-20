import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap'
import {retrieveMovieList} from "../actions/movielistAction";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {result: [] }

    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(retrieveMovieList(localStorage.getItem('token'))).then(res=> {

            if(this.state.result !== res) {
                this.setState({result:res})

            }
            }
        )


    }


    render(){
        return (
            <div className="grid-container">
                {this.state.result.map((item,i) =>
                    <div key={i} className="item">
                        <a href= {"/movie?title="+ item.movie}><img width="300" height="169" src={item.image} alt="MovieList"/></a>
                        <b>{item.movie}</b>
                            <p><Glyphicon glyph={'star'}/>{item.rating.toFixed(2)} &nbsp;</p>

                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(MovieList);