import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../store/actions";

import PostForm from "./PostForm";
import { Spinner } from "../common";
import PostFeed from "./PostFeed";
import "./Posts.scss";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  getPosts: PropTypes.func.isRequired,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
