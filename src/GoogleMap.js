import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
    width: "100%",
    height: "100%"
};
class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [
                { lat: 47.49855629475769, lng: -122.14184416996333 },
                { latitude: 47.359423, longitude: -122.021071 },
                { latitude: 47.5524695, longitude: -122.0425407 }
            ]
        };
    }
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: store.latitude,
                        lng: store.longitude
                    }}
                    onClick={() => console.log("Clicked me..!")}
                />
            );
        });
    };
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8"
})(MapContainer);