import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoLista from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBO-z8CQ8jz7I92JxAI-mwyIljz-Y_P7Zs';


class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('hermes e renato');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }


  render() {
    return (
      <div className="row" style={{marginTop: 20}}>
        <div className="row">
        <div className="col s12 m12 l12">
          <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        </div>
      </div>
        <div className="row">
          <div className="col s12 m6 l6">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col s12 m6 l6">
            <div className="col s12 m12 l11 offset-l1 center-align">
              <span style={{fontSize: 28, opacity: 0.5}}>Videos Relacionados</span>
            </div>
            <VideoLista
              onVideoSelect ={(selectedVideo) => this.setState({selectedVideo})}
              videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}



ReactDOM.render(<App/>, document.querySelector('.container'));
