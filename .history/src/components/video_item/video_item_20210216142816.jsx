import React from "react";

const VideoItem = (props) => (
  <li>
    <img
      src={props.video.items.snippet.thumbnails.medium.url}
      alt="video thumbnails"
    />
    {props.video.items.snippet.title}
  </li>
);

export default VideoItem;
