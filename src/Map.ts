import { useLocalStorage } from "@vueuse/core"

export type Marker = {
  longitude: number
  latitude: number
}

export const userMarker = useLocalStorage<Marker>('USER_MARKER', {
  longitude: 0,
  latitude: 0
})

export const nearbyMarkers = useLocalStorage<Marker[]>('NEARBY_MARKERS', [])