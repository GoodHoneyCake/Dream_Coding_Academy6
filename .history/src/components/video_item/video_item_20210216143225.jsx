import React from "react";

const VideoItem = ({ video: {video.snippet} }) => (
  <li>
    <img src={video.snippet.thumbnails.medium.url} alt="video thumbnails" />
    <div>
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
