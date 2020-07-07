import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = ({ onTermSearch }) => {
  const [term, setTerm] = useState("");

  const onInputSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    onTermSearch(term);
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={onInputSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={(event) => setTerm(event.target.value)}
          value={term}
        ></TextField>
      </form>
    </Paper>
  );
};

export default SearchBar;
