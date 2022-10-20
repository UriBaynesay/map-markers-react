import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"


const center = {
  lat: -3.745,
  lng: -38.523,
}

function _Map({ onAddMarker, markers, onRemoveMarker }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCNv4OkuFcFX30VsoIv9bOiWVAmfON1oyM",
  })

  return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={15}
      onRightClick={onAddMarker}
      mapContainerClassName="map-container"
    >
      <>
        {markers.map((marker) => {
          return <Marker key={marker._id} position={marker} onClick={()=>onRemoveMarker(marker)}></Marker>
        })}
      </>
    </GoogleMap>
  ) : (
    <></>
  )
}

export const Map = React.memo(_Map)
