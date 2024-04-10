import React from 'react'
const Leafletmaps = React.lazy(() => import("../../../shared/data/map/leafletmaps"), {
  ssr: false
});

import Seo from '../../../shared/layout-components/seo/seo'
const leafletsmap = () => {
  return (
    <div>
      <Seo title="Leaflet Maps" />
      <Leafletmaps />

    </div>
  )
}
leafletsmap.layout = "Contentlayout"
export default leafletsmap