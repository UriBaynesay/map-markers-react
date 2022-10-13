import React from "react"
import { GoogleMap, useJsApiLoader,Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "70vh",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

function _Map({ onAddMarker, markers }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCNv4OkuFcFX30VsoIv9bOiWVAmfON1oyM",
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onRightClick={onAddMarker}
    >
      <>
        {markers.map((marker) => {
          return <Marker position={marker}></Marker>
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  )
}

export const Map = React.memo(_Map)