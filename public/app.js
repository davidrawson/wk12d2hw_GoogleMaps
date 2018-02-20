const initialize = function(){


  const center   = {lat: 54.116332, lng: -0.082774};
  const oldLighthouse = {lat: 54.117777, lng: -0.089587};
  const mapDiv = document.getElementById('main-map');

  const mainMap = new MapWrapper( center, mapDiv, 16);

  const scunnyButton = document.querySelector('#scunnyButton')
  scunnyButton.addEventListener('click', mainMap.goToScunny)


  mainMap.addMarker(center);
  mainMap.addInfoWindow(center, newLighthouseString)
  // mainMap.addMarker(oldLighthouse);
  mainMap.addInfoWindow(oldLighthouse, oldLighthouseString)
  mainMap.addClickEvent();
}

// const handleButtonClick = function(){
//   console.log("handleButton click");
//   mainMap.goToScunny()
// };


const newLighthouseString = "The present lighthouse, designed by Samuel Wyatt \nand costing £8,000 to build, was first lit \non 1 December 1806. The current electric fog \nsignal was installed in 1975, \nreplacing older equipment."
const oldLighthouseString = "The first lighthouse, built by Sir John Clayton, \nwas completed in 1674 and is one of \nthe oldest surviving complete lighthouse \nin England. Built from chalk, it was never lit."
document.addEventListener("DOMContentLoaded", initialize)


//scunny
// 53.581066, -0.660172

//new
// 54.116332, -0.082774

//old
// 54.117777, -0.089587
