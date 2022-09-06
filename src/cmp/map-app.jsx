import { useState } from "react"

import { Map } from "./map";
import { MarkersList } from "./markers-list"

export const MapApp=()=>{
    const [markers,setMarkers]=useState([])

    const onAddMarker=(marker)=>{
        setMarkers([...markers,marker])
    }

    return <section className="map-app-container">
        <MarkersList markers={markers}/>
        <Map onAddMarker={onAddMarker}/>
    </section>
}