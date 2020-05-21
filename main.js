$(document).ready(function(){
  var map = L.map('map').setView([52.526300, 13.447692], 10);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  $("#draw").click(function(){
    console.log("ok");
    L.circle([$("#first-east").val(), $("#first-west").val()], $("#first-distance").val()).addTo(map);
    L.circle([$("#second-east").val(), $("#second-west").val()], $("#second-distance").val()).addTo(map);
  });

});
