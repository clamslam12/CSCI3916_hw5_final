import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap'
import {searchMovie} from "../actions/movielistAction";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {result: [] , search:""}

    }


    handleSearch(e){
        e.preventDefault()
        this.setState({search:e.target.value})
        const {dispatch} = this.props;
        console.log("Send search",e.target.value)
        dispatch(searchMovie(localStorage.getItem('token'),e.target.value)).then(res=> {
                console.log("Get search")
                if(this.state.result !== res) {
                    this.setState({result:res})

                }
            }
        )

    }
    render(){
        return (
            <div className="grid-container">
                <label>
                    <input style={{width:"30vw"}} placeholder="Find a movie..." type="text" name="comment" value={this.state.message} onChange={this.handleSearch.bind(this)}/>
                </label>
                <br/>
                {this.state.result.map((item,i) =>
                    <div key={i} className="item">
                        <a href= {"/movie?title="+ item.Title}><img width="300" height="169" src={item.image} alt="MovieList"/></a>
                        <b>{item.movie}</b>

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