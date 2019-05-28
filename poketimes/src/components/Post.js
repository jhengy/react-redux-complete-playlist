import React, { Component } from "react"
import { connect } from "react-redux"

class Post extends Component {
  // event handler for button click event=> delete particular post
  handleClick = () => {
    // deletePost is a functional prop with associated redux store
    this.props.deletePost(this.props.post.id)
    // history is a prop with associated router
    this.props.history.push("/")
  }
  render() {
    // implementing deletePost ==> need to dispatch deletePost Action to reduxReducer
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )

    return <div className="container">{post}</div>
  }
}

// mapping redux state to props(argument: state and ownProps): return an object containing the props definition
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

// map dispatch action to props: (argument: dispatch function(takes in an action object))
// returns the function prop for dispatch action
const mapDispatchToProps = dispatch => {
  return {
    // payload happens to contain type and id fields
    deletePost: id => dispatch({ type: "DELETE_POST", id: id })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
