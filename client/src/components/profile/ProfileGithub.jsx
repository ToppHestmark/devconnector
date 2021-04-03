import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);

    const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

    this.state = {
      clientId,
      clientSecret,
      count: 5,
      sort: "created: asc",
      repos: [],
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map((repo) => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h6>
              <Link to={repo.html_url} className="liked" target="_blank">
                {repo.name}
              </Link>
            </h6>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6 badge-container">
            <span className="badge badge-info mr-1">
              <i class="fas fa-star mr-1"></i>
              {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              <i class="fas fa-eye mr-1"></i> {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              <i class="fas fa-code-branch mr-1"></i> {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div ref="myRef">
        <hr re />
        <h3 className="mb-4 text-dark">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
