import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitComment} from "../actions/submitComment";


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {message:"",rating:""}
    }

   handleMessage(e){
       e.preventDefault();
       this.setState({message : e.target.value})
   }
   handleRating(e){
       e.preventDefault();
       this.setState({rating : e.target.value})
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
           this.setState({message:"",rating:""})
           this.props.updateReview()
       })

    }
    render(){
        return (

            <div className="comment">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="center">
                        <label>
                            Comment:
                            <input style={{width:"30vw"}} placeholder="Write a comment..." type="text" name="comment" value={this.state.message} onChange={this.handleMessage.bind(this)} required/>
                        </label>
                        <label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;Rating:
                            <input style={{width:"10vw"}}type="number" min="0" max="5" name="rating" value={this.state.rating} onChange={this.handleRating.bind(this)} required/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Comment);