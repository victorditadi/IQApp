import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return (
      <div style={{marginTop: 20}}>
          <h5 className="center-align valign" style={{fontSize: 30, opacity: 0.5}}>Escolha um Video...</h5>
      </div>
    );
  }

  const titleVideo        = video.snippet.title;
  const descriptionVideo  = video.snippet.description;
  const videoId           = video.id.videoId;
  const url               = `//www.youtube.com/embed/${videoId}`;

  return(
    <div className="col s12 m12 l12">
      <div className="card">
        <div className="card-image video-container">
          <iframe width="900" height="580" src={url} frameBorder="0" allowFullScreen></iframe>
          <div><strong>{titleVideo}</strong></div>
        </div>
        <div className="card-content">
          <div>{descriptionVideo}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
