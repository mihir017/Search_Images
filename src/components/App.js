import React from "react";
// import axios from "axios";
import unsplash from "../Api/UnsplashApi";
import ImageSearch from "./ImageSearch";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { images: [] };
  }

  onSearchInput = async (searchValue) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: searchValue },
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <ImageSearch onSubmit={this.onSearchInput} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
