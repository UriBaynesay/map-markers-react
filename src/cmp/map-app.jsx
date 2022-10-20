import { useState } from "react"

import { Map } from "./map"
import { MarkersList } from "./markers-list"

export const MapApp = () => {
  const [markers, setMarkers] = useState([])

  const onAddMarker = (marker) => {
    setMarkers([
      ...markers,
      {
        _id: marker.domEvent.timeStamp,
        lat: marker.latLng.lat(),
        lng: marker.latLng.lng(),
      },
    ])
  }

  const onRemoveMarker = (marker) => {
    setMarkers([...markers.filter((m) => m !== marker)])
  }

  return (
    <section className="map-app-container">
      <Map
        onAddMarker={onAddMarker}
        onRemoveMarker={onRemoveMarker}
        markers={markers}
      />
      <MarkersList markers={markers} onRemoveMarker={onRemoveMarker} />
    </section>
  )
}
