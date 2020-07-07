import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSearch("cars");
  }, []);

  const onTermSearch = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
        },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.log("Error: ", error);
    }

    console.log("App - onTermSeach", videos);
  };

  const onSelectedVideo = (selectedVideo) => {
    setSelectedVideo(selectedVideo);
  };

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onTermSearch={onTermSearch}></SearchBar>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              onSelectedVideo={onSelectedVideo}
            ></VideoList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
