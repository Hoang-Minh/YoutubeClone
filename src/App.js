import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSearch("cars");
  }

  onTermSearch = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: "AIzaSyDSl7Z9MMw-Nxlneopt-WygSUsBlUzrNIE",
        },
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  onSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    const { selectedVideo } = this.state;
    console.log("App - SelectedVideo", selectedVideo);
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onTermSearch={this.onTermSearch}></SearchBar>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}></VideoDetail>
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={this.state.videos}
                onSelectedVideo={this.onSelectedVideo}
              ></VideoList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
