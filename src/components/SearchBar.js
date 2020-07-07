import React from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onInputSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.onTermSearch(searchTerm);
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.onInputSubmit}>
          <TextField
            fullWidth
            label="Search..."
            onChange={this.onInputChange}
            value={this.state.searchTerm}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
