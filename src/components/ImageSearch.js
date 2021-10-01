import React from "react";

class ImageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }

  onInputSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchInput);
    // console.log(this.state.searchInput);
  };
  onInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <div className="ui container segment" style={{ marginTop: "20px" }}>
        <form onSubmit={this.onInputSubmit} className="ui form">
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={(e) => this.onInputChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ImageSearch;
