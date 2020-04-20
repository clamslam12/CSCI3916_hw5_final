import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitComment} from "../actions/submitComment";


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {message:""}
    }

   handleMessage(e){
       e.preventDefault();
       this.setState({message : e.target.value})
   }
   handleSubmit(e){
       e.preventDefault();
       //Dispatch information to back end
       const {dispatch} = this.props;
       let title = localStorage.getItem('title')
       let comment  = e.target.elements.comment.value
       let rating   = e.target.elements.rating.value
       let data = {title:title,review:comment,rating:rating}
       let token = localStorage.getItem('token')
       dispatch(submitComment(token,data)).then( res=>{
           this.setState({message:""})
       })
    }
    render(){
        return (

            <div className="comment">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Comment:
                        <input type="text" name="comment" value={this.state.message} onChange={this.handleMessage.bind(this)} required/>
                    </label>
                    <label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;Rating:
                        <input type="number" min="0" max="5" name="rating" required/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Comment);