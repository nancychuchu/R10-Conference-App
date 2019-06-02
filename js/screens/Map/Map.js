import React from "react";
import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";
import MapPin from "../../assets/images/map_pin.png";

const Map = ({ longitude, latitude }) => {
  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return (
    <MapView region={region} height="100%" width="100%">
      <Marker coordinate={{ latitude, longitude }} image={MapPin} />
    </MapView>
  );
};

export default Map;
