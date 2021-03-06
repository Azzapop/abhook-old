import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Commit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commit: {
        url: '',
        avatar_url: '',
        sha: ''
      }
    };
  }

  componentWillMount() {
    const query = axios.get('https://api.github.com/repos/Azzapop/personal_website/commits');
    query.then((result) => {
      const { data } = result;
      const commit = _.find(data, (datum) => { return datum.commit.author.name === "Azzapop" });
      this.setState({
        loading: false,
        commit: {
          url: commit.html_url,
          avatar_url: commit.author.avatar_url,
          sha: commit.sha
        }
      });
    }).catch((error) => {
      console.log('ERR:', error);
    });
  }

  render() {
    const { loading, commit } = this.state;
    if (loading) return <p>loading latest commit</p>;
    else return (
      <a target='_blank' href={ commit.url }>
        <img className='img' src={ commit.avatar_url } alt='profile image'/>
        <div className='details'>
          <span className='name'>Aaron Hook</span>
          <span className='commit'>{ commit.sha }</span>
        </div>
      </a>
    );
  }
}

export default Commit;
