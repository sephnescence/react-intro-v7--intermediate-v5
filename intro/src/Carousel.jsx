import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    image: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //   handleIndexClick() {
  //     // this is actually undefined. Don't do methods like this
  //     console.log(this)
  //   }

  handleIndexClick = (e) => {
    // Do it this way instead. JS scope will capture this as Carousel correctly
    this.setState({
      // dataset refers to all data- things. It's a DOM method
      // Caution that this will come back as a string
      // `active: e.target.dataset.index,`
      // So do this instead. Referred to as a unary plus
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="Animal Hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // The below eslit rule will disabled a11y's error about needing a keyboard handler, assumedly for tab targeting / space handling
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
