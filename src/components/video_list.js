import React from 'react';
import VideoListItem from './video_list_item';

const VideoLista = (props) => {
  const videos = props.videos;

  const videoItems = videos.map((video) => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
  });

  return(
    <div className="row">
      <div className="col s12 m12 l12">
        <ul>
          {videoItems}
        </ul>
      </div>
    </div>
  );
}

export default VideoLista;
