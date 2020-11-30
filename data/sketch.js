let popData
let countries;

const mappa = new Mappa('Leaflet');
let trainMap;
let canvas;

let maxDiameter = 0;

const options = {
  lat: 0,
  lng: 0,
  zoom: 2,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  popData = loadTable('worldcities.csv', 'header');
  countries = loadJSON('countries.json')
}

function setup() {
  canvas = createCanvas(windowHeight, windowWidth);
  trainMap = mappa.tileMap(options)

  trainMap.overlay(canvas);

  console.log();


  //console.log(countries);
  // console.log(popData);
}

function draw() {
  clear();
  // const nigeria = trainMap.latLngToPixel(11.396396, 5.076543); 
  // ellipse(nigeria.x, nigeria.y, 20, 20);

  let prev_pix;
  
  for (let row of popData.rows) {
    let country = row.get('iso2').toLowerCase();
    //console.log(country);
    let latlon = countries[country];
    if (latlon) {
      // console.log(latlon);
      let lat = latlon[0];
      let lon = latlon[1];
      const pix = trainMap.latLngToPixel(lat, lon);
      let popCount = row.get ('population')
      let diameter = min(maxDiameter, sqrt (popCount));

      if (prev_pix != undefined && random(10) < 0.1) {
        strokeWeight(0.5);
        stroke(0, 100, 255,10);
        line(prev_pix.x, prev_pix.y, pix.x, pix.y);
      }
      fill(0, 100, 255,10);
      noStroke();
      ellipse(pix.x, pix.y,diameter/50, diameter/50);
      
      prev_pix = pix;
    }


    // console.log(row.get('population'));
  }
  
  maxDiameter = maxDiameter + 150;

}