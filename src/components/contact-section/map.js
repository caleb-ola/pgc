import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

// const mapStyles = {
//   width: "80%",
//   height: "600px",
//   position: "relative !important",
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           lat: -1.2884,
//           lng: 36.8233,
//         }}
//         className="mx-auto w-50 map"
//         style={{ width: "100%", height: "500px", position: "relative" }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyA3joqF4XnwAvuAm2yjShXzNFVyn7c4Evs",
// })(MapContainer);

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2041.8802851840187!2d4.263607492109493!3d8.146699423828036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d058442f8db%3A0x565f641aba0e667a!2sRCCG%20Heaven&#39;s%20Gate%20Parish%2C%20Ire%20Akari%2C%20Ogbomoso!5e0!3m2!1sen!2sng!4v1627384720854!5m2!1sen!2sng"
        width="100%"
        height="500px"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
