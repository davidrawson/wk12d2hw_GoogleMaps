const initialize = function(){

  const center   = {lat: 54.116332, lng: -0.082774};
  const oldLighthouse = {lat: 54.117777, lng: -0.089587};
  const mapDiv = document.getElementById('main-map');

  const mainMap = new MapWrapper( center, mapDiv, 16);
  const handleButtonClick = function(){
    mainMap.googleMap.setCenter({lat: 53.580034, lng: -0.658477})
  };
  const scunnyButton = document.querySelector('#scunnyButton');
  scunnyButton.addEventListener('click', handleButtonClick);

  mainMap.addMarker(oldLighthouse);
  mainMap.addInfoWindow(oldLighthouse, oldLighthouseString)
  mainMap.addMarker(center);
  mainMap.addInfoWindow(center, newLighthouseString)
  mainMap.addClickEvent();
}

const newLighthouseString = "The new lighthouse was designed by Samuel Wyatt and costing £8,000 to build."
const oldLighthouseString = "The first lighthouse, built by Sir John Clayton, was completed in 1674."
document.addEventListener("DOMContentLoaded", initialize)
