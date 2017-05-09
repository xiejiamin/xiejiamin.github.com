var map = new BMap.Map("map");    
var point = new BMap.Point(120.015015,30.296074);    
map.centerAndZoom(point, 17);
map.enableScrollWheelZoom();
map.addControl(new BMap.OverviewMapControl({
    isOpen: true
}));
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 
map.setCurrentCity("杭州");       
var marker = new BMap.Marker(point);   
map.addOverlay(marker);
var transit = new BMap.TransitRoute(map, {
  pageCapacity: 6,
  renderOptions: {
    map: map,
    panel: "result"
  }
});
transit.search("杭州师范大学仓前校区", "宾馆");   