import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) {
    return "Loading...";
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const { snippet } = video;

  return (
    <React.Fragment>
      <Paper elevation={6}>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              border: "0",
            }}
            title="Video Player"
            src={videoSrc}
            allowfullscreen
          />
        </div>
      </Paper>
      <Paper elevation={6}>
        <Typography variant="h4">
          {snippet.title} - {snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">{snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
