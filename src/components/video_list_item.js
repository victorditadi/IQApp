import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl      = video.snippet.thumbnails.high.url;
  const titleVideo    = video.snippet.title;
  const channelTitle  = video.snippet.channelTitle;
  // const dataPublish   = video.snippet.publishedAt;

  return(
    <div style={{cursor: 'pointer'}} className="col s12 m12 l11 offset-l1" onClick={() => onVideoSelect(video)}>
        <div className="card-panel grey lighten-5 z-depth-1" >
          <div className="row valign-wrapper">
            <div className="col s6">
              <img src={imageUrl} height={100} width={120} alt=""/>
            </div>
            <div className="col s10">
              <h6><strong>{titleVideo}</strong></h6>
              <span className="black-text">
                  {channelTitle}<br/>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default VideoListItem;
