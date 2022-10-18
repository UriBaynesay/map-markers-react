import { MarkerPreview } from "./marker-preview"

export const MarkersList = ({ markers , onRemoveMarker }) => {
  return (
    <section className="markers-list-container">
      <ul className="map-markers-list">
        {markers.map((marker) => (
          <li className="marker-preview-container">
            <MarkerPreview marker={marker} key={marker._id} />
            <button onClick={()=>onRemoveMarker(marker)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
