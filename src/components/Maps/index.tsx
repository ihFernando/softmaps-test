import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

import { IMaps } from './models'

import { MapWrap, Map } from './styled'

const TOKEN = process.env.REACT_APP_API_MAPBOX_KEY

const Maps: React.FC<IMaps> = ({ latitude, longitude, zoom }: IMaps) => {
  const mapContainerRef = useRef(null)
  mapboxgl.accessToken = TOKEN

  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom
  })

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [viewport.longitude, viewport.latitude as number],
      zoom
    })

    map.on('move', () => {
      setViewport({
        longitude: Number(map.getCenter().lng.toFixed(4)),
        latitude: Number(map.getCenter().lat.toFixed(4)),
        zoom: Number(map.getZoom().toFixed(2))
      })
    })

    return () => map.remove()
  }, [viewport])

  useEffect(
    () =>
      setViewport({
        latitude,
        longitude,
        zoom
      }),
    [latitude, longitude, zoom]
  )

  return (
    <MapWrap>
      <Map ref={mapContainerRef} />
    </MapWrap>
  )
}

export default Maps
