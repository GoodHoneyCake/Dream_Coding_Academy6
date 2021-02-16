import React from "react";

const VideoItem = (props) => (
  <li>
    <img
      src={props.video.sinppet.thumbnails.medium.url}
      alt={"video thumbnail"}
    />
    {props.video.snippet.title}
  </li>
);

export default VideoItem;
