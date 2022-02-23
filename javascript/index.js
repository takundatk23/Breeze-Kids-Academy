//jshint esversion: 6
window.addEventListener('scroll', ()=>{  //
  let header = this.document.querySelector('nav');
  let windowPosition =window.scrollY > 100;
  header.classList.toggle('scrolling-active', windowPosition);
});

function dynamicDate() {
  const year = new Date().getFullYear();
  document.getElementById("foot-copyright").innerHTML = "Copyright &copy " + year + " Breeze Kids Academy" + "<br>" + "All Rights Reserved" ;
}

const parallax = document.querySelector('.block-kid'); //parallax effect code
window.addEventListener('scroll', ()=>{
  let offset = window.pageYOffset;  //Yoffset is how much you scroll in the Y axis
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

$(window).on('beforeunload', function() {  //hide body and scroll to the top, some beatiful jquery
  $('body').hide();
  $(window).scrollTop(0);
});


/* --------OPENLAYERS MAP------------------- */

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([31.143125, -29.536851]),
    zoom: 16.5
  })
});

var layer = new ol.layer.Vector({
  source: new ol.source.Vector({
      features: [
          new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.fromLonLat([31.143125, -29.536851]))
          })
      ]
  })
});
map.addLayer(layer);

/*--------------- test features---- */
map.on('wheel', function(){
  hello
});

/* ----------------pop up feature---------------- */
var container = document.getElementById('popup');
 var content = document.getElementById('popup-content');
 var closer = document.getElementById('popup-closer');

 var overlay = new ol.Overlay({
     element: container,
     autoPan: true,
     autoPanAnimation: {
         duration: 250
     }
 });
 map.addOverlay(overlay);

 closer.onclick = function() {
     overlay.setPosition(undefined);
     closer.blur();
     return false;
 };

 map.on('singleclick', function (event) {
  if (map.hasFeatureAtPixel(event.pixel) === true) {
      var coordinate = event.coordinate;

      /* content.innerHTML = '<b>Hello world!</b><br />I am a popup.'; */
      overlay.setPosition(coordinate);
  } else {
      overlay.setPosition(undefined);
      closer.blur();
  }
});

content.innerHTML = '<b>Breeze Kids Academy</b><br />2328 Mkhonto Groove burbreeze';
 overlay.setPosition(ol.proj.fromLonLat([31.143369, -29.536851]));


 /* ------------RESPONISVENESS TOOGLE BUTTON -------------*/
 const toggleButton = document.querySelector('.menu-toggler');
 const navbar = document.querySelector('.right-side');
 const ul = document.querySelector('ul');

 toggleButton.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
 });

ul.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
 });










   

