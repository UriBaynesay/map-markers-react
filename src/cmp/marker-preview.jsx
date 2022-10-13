export const MarkerPreview = ({ marker }) => {
  return (
    <article className="marker-preview">
      <h1 className="marker-cords">
        {marker.lat.toFixed(3)},{marker.lng.toFixed(3)}
      </h1>
    </article>
  )
}
