import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [48, 58],
  iconAnchor: [24, 58],

  popupAnchor: [170, 10]
})

export default mapIcon;