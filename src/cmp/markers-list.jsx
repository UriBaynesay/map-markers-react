import { MarkerPreview } from "./marker-preview"

export const MarkersList = ({ markers }) => {
  return (
    <section className="markers-list-container">
      <ul className="map-markers-list">
        <li className="marker-preview-container">
          {markers.map((marker) => (
            <MarkerPreview marker={marker} />
          ))}
        </li>
      </ul>
    </section>
  )
}
