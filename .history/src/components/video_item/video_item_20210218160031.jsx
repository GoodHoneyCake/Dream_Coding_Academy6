import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet }, onVideoClick }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p lassName={styles.title}>{snippet.title}</p>
        <p lassName={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
