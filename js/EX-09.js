// part one
var map1 = new BMap.Map("map1");    
var point1 = new BMap.Point(120.141375,30.257806);    
map1.centerAndZoom(point1, 15);
map1.addControl(new BMap.NavigationControl());   
map1.addControl(new BMap.ScaleControl());    
map1.addControl(new BMap.OverviewMapControl());    
map1.addControl(new BMap.MapTypeControl());        
var marker1 = new BMap.Marker(point1);   
map1.addOverlay(marker1); 
var local = new BMap.LocalSearch(map1, {
  pageCapacity: 8,
  renderOptions: {
    map: map1,
    panel: "result1"
  }
});
local.search("宾馆");
// part two
var map2 = new BMap.Map("map2");    
var point2 = new BMap.Point(120.015015,30.296074);    
map2.centerAndZoom(point2, 17); 
var marker2 = new BMap.Marker(point2);   
map2.addOverlay(marker2); 
var transit = new BMap.TransitRoute(map2, {
  renderOptions: {
    map: map2,
    panel: "result2"
  }
});
transit.search("杭州师范大学仓前校区", "宾馆");   