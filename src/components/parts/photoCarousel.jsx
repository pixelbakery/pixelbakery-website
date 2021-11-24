import React, { useEffect } from "react";
import Flickity from "react-flickity-component";
import photos from "../../data/about-studioviews";

const flickityOptions = {
  wrapAround: true,
  pageDots: true,
  lazyLoad: true,
  autoPlay: 5000,
  pauseAutoPlayOnHover: false,
};

class Carousel extends React.Component {
  componentDidMount = () => {
    // You can register events in componentDidMount hook
    this.flkty.on("settle", () => {
      console.log(`current index is ${this.flkty.selectedIndex}`);
    });
  };
  render() {
    return (
      <Flickity
        options={flickityOptions}
        className={"carousel "} // default ''
        flickityRef={(c) => (this.flkty = c)}
      >
        {this.props.photos.map((photo) => (
          <div
            className=' overflow-hidden bg-blue carousel-cell'
            key={photo.name}
          >
            <div className='relative w-full h-full'>
              <img className=' object-center object-cover ' src={photo.url} />
            </div>
          </div>
        ))}
      </Flickity>
    );
  }
}

export default Carousel;
