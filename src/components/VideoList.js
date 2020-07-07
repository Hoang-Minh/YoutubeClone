import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderContent = () => {
    return videos.map((video) => (
      <VideoItem
        key={video.etag}
        video={video}
        onSelectedVideo={onSelectedVideo}
      ></VideoItem>
    ));
  };

  return (
    <Grid container spacing={10}>
      {renderContent()}
    </Grid>
  );
};

export default VideoList;
