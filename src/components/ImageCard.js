import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;

    this.setState({ span: Math.ceil(height / 10 + 1) });
  };
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  render() {
    const { urls, description } = this.props.src;

    return (
      <>
        <img
          style={{ gridRowEnd: `span ${this.state.span}` }}
          src={urls.regular}
          ref={this.imageRef}
          alt={description}
        />
      </>
    );
  }
}

export default ImageCard;
