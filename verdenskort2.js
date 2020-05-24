<!DOCTYPE HTML>
<html>
<body>

<style>
body { background-color: #30303d; color: #fff; }
#chartdiv {
  width: 100%;
  height: 600px
}

</style>

<!-- Resources -->
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/maps.js"></script>
<script src="https://www.amcharts.com/lib/4/geodata/worldLow.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/dark.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>

<!-- Chart code -->
<script>
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

var title = chart.titles.create();
title.text = "[bold font-size: 20]Corona Cases per Country[/]\nsource: WorldoMeter";
title.textAlign = "middle";

var mapData = [
  { "id":"AF", "name":"Afghanistan", "value":3392, "color": chart.colors.getIndex(0) },
  { "id":"AL", "name":"Albania", "value":832, "color":chart.colors.getIndex(1) },
  { "id":"DZ", "name":"Algeria", "value":4997, "color":chart.colors.getIndex(2) },
  { "id":"AO", "name":"Angola", "value":36, "color":chart.colors.getIndex(2) },
  { "id":"AR", "name":"Argentina", "value":5208, "color":chart.colors.getIndex(3) },
  { "id":"AM", "name":"Armenia", "value":2782, "color":chart.colors.getIndex(1) },
  { "id":"AU", "name":"Australia", "value":6894, "color":"#8aabb0" },
  { "id":"AT", "name":"Austria", "value":15684, "color":chart.colors.getIndex(1) },
  { "id":"AZ", "name":"Azerbaijan", "value":2127, "color":chart.colors.getIndex(1) },
  { "id":"BH", "name":"Bahrain", "value":3934, 
"color": chart.colors.getIndex(0) },
  { "id":"BD", "name":"Bangladesh", "value":11719, "color": chart.colors.getIndex(0) },
  { "id":"BY", "name":"Belarus", "value":19255, "color":chart.colors.getIndex(1) },
  { "id":"BE", "name":"Belgium", "value":50781, "color":chart.colors.getIndex(1) },
  { "id":"BJ", "name":"Benin", "value":96, "color":chart.colors.getIndex(2) },
  { "id":"BT", "name":"Bhutan", "value":7, "color": chart.colors.getIndex(0) },
  { "id":"BO", "name":"Bolivia", "value":1886, "color":chart.colors.getIndex(3) },
  { "id":"BA", "name":"Bosnia and Herzegovina", "value":1987, "color":chart.colors.getIndex(1) },
  { "id":"BW", "name":"Botswana", "value":23, "color":chart.colors.getIndex(2) },
  { "id":"BR", "name":"Brazil", "value":126611, "color":chart.colors.getIndex(3) },
  { "id":"BN", "name":"Brunei", "value":139, "color": chart.colors.getIndex(0) },
  { "id":"BG", "name":"Bulgaria", "value":1811, "color":chart.colors.getIndex(1) },
  { "id":"KH", "name":"Cambodia", "value":122, "color": chart.colors.getIndex(0) },
  { "id":"CM", "name":"Cameroon", "value":2265, "color":chart.colors.getIndex(2) },
  { "id":"CA", "name":"Canada", "value":63496, "color":chart.colors.getIndex(4) },
  { "id":"TD", "name":"Chad", "value":170, "color":chart.colors.getIndex(2) },
  { "id":"CL", "name":"Chile", "value":23048, "color":chart.colors.getIndex(3) },
  { "id":"CN", "name":"China", "value":82855, "color": chart.colors.getIndex(0) },
  { "id":"CO", "name":"Colombia", "value":8959, "color":chart.colors.getIndex(3) },
  { "id":"CG", "name":"Congo, Rep.", "value":797, "color":chart.colors.getIndex(2) },
  { "id":"CR", "name":"Costa Rica", "value":761, "color":chart.colors.getIndex(4) },
  { "id":"CI", "name":"Cote d'Ivoire", "value":1516, "color":chart.colors.getIndex(2) },
  { "id":"HR", "name":"Croatia", "value":2119, "color":chart.colors.getIndex(1) },
  { "id":"CU", "name":"Cuba", "value":1703, "color":chart.colors.getIndex(4) },
  { "id":"CY", "name":"Cyprus", "value":883, "color":chart.colors.getIndex(1) },
  { "id":"CZ", "name":"Czech Rep.", "value":7974, "color":chart.colors.getIndex(1) },
  { "id":"DK", "name":"Denmark", "value":9938, "color":chart.colors.getIndex(1) },
  { "id":"DJ", "name":"Djibouti", "value":1124, "color":chart.colors.getIndex(2) },
  { "id":"DO", "name":"Dominican Rep.", "value":8807, "color":chart.colors.getIndex(4) },
  { "id":"EC", "name":"Ecuador", "value":29420, "color":chart.colors.getIndex(3) },
  { "id":"EG", "name":"Egypt", "value":7588, "color":chart.colors.getIndex(2) },
  { "id":"SV", "name":"El Salvador", "value":695, "color":chart.colors.getIndex(4) },
  { "id":"GQ", "name":"Equatorial Guinea", "value":439, "color":chart.colors.getIndex(2) },
  { "id":"EE", "name":"Estonia", "value":1713, "color":chart.colors.getIndex(1) },
  { "id":"ET", "name":"Ethiopia", "value":162, "color":chart.colors.getIndex(2) },
  { "id":"FI", "name":"Finland", "value":5573, "color":chart.colors.getIndex(1) },
  { "id":"FR", "name":"France", "value":174191, "color":chart.colors.getIndex(1) },
  { "id":"GA", "name":"Gabon", "value":397, "color":chart.colors.getIndex(2) },
  { "id":"GE", "name":"Georgia", "value":615, "color":chart.colors.getIndex(1) },
  { "id":"DE", "name":"Germany", "value":168162, "color":chart.colors.getIndex(1) },
  { "id":"GH", "name":"Ghana", "value":3091, "color":chart.colors.getIndex(2) },
  { "id":"GR", "name":"Greece", "value":2663, "color":chart.colors.getIndex(1) },
  { "id":"GT", "name":"Guatemala", "value":798, "color":chart.colors.getIndex(4) },
  { "id":"GN", "name":"Guinea", "value":475, "color":chart.colors.getIndex(2) },
  { "id":"GW", "name":"Guinea-Bissau", "value":439, "color":chart.colors.getIndex(2) },
  { "id":"HT", "name":"Haiti", "value":101, "color":chart.colors.getIndex(4) },
  { "id":"HN", "name":"Honduras", "value":1461, "color":chart.colors.getIndex(4) },
  { "id":"HK", "name":"Hong Kong, China", "value":1041, "color": chart.colors.getIndex(0) },
  { "id":"HU", "name":"Hungary", "value":3150, "color":chart.colors.getIndex(1) },
  { "id":"IS", "name":"Iceland", "value":1799, "color":chart.colors.getIndex(1) },
  { "id":"IN", "name":"India", "value":53045, "color": chart.colors.getIndex(0) },
  { "id":"ID", "name":"Indonesia", "value":12438, "color": chart.colors.getIndex(0) },
  { "id":"IR", "name":"Iran", "value":101650, "color": chart.colors.getIndex(0) },
  { "id":"IQ", "name":"Iraq", "value":2480, "color": chart.colors.getIndex(0) },
  { "id":"IE", "name":"Ireland", "value":22248, "color":chart.colors.getIndex(1) },
  { "id":"IL", "name":"Israel", "value":16310, "color": chart.colors.getIndex(0) },
  { "id":"IT", "name":"Italy", "value":214457, "color":chart.colors.getIndex(1) },
  { "id":"JM", "name":"Jamaica", "value":478, "color":chart.colors.getIndex(4) },
  { "id":"JP", "name":"Japan", "value":15965, "color": chart.colors.getIndex(0) },
  { "id":"JO", "name":"Jordan", "value":473, "color": chart.colors.getIndex(0) },
  { "id":"KZ", "name":"Kazakhstan", "value":4502, "color": chart.colors.getIndex(0) },
  { "id":"KE", "name":"Kenya", "value":582, "color":chart.colors.getIndex(2) },
  { "id":"KW", "name":"Kuwait", "value":6289, "color": chart.colors.getIndex(0) },
  { "id":"KG", "name":"Kyrgyzstan", "value":895, "color": chart.colors.getIndex(0) },
  { "id":"LV", "name":"Latvia", "value":900, "color":chart.colors.getIndex(1) },
  { "id":"LB", "name":"Lebanon", "value":750, "color": chart.colors.getIndex(0) },
  { "id":"LR", "name":"Liberia", "value":178, "color":chart.colors.getIndex(2) },
  { "id":"LT", "name":"Lithuania", "value":1428, "color":chart.colors.getIndex(1) },
  { "id":"LU", "name":"Luxembourg", "value":3851, "color":chart.colors.getIndex(1) },
  { "id":"MG", "name":"Madagascar", "value":158, "color":chart.colors.getIndex(2) },
  { "id":"MY", "name":"Malaysia", "value":6428, "color": chart.colors.getIndex(0) },
  { "id":"ML", "name":"Mali", "value":631, "color":chart.colors.getIndex(2) },
  { "id":"MU", "name":"Mauritius", "value":332, "color":chart.colors.getIndex(2) },
  { "id":"MX", "name":"Mexico", "value":27534, "color":chart.colors.getIndex(4) },
  { "id":"MD", "name":"Moldova", "value":4476, "color":chart.colors.getIndex(1) },
  { "id":"ME", "name":"Montenegro", "value":324, "color":chart.colors.getIndex(1) },
  { "id":"MA", "name":"Morocco", "value":5408, "color":chart.colors.getIndex(2) },
  { "id":"MM", "name":"Myanmar", "value":162, "color": chart.colors.getIndex(0) },
  { "id":"NP", "name":"Nepal", "value":100, "color": chart.colors.getIndex(0) },
  { "id":"NL", "name":"Netherlands", "value":41319, "color":chart.colors.getIndex(1) },
  { "id":"NZ", "name":"New Zealand", "value":1489, "color":"#8aabb0" },
  { "id":"NE", "name":"Niger", "value":770, "color":chart.colors.getIndex(2) },
  { "id":"NG", "name":"Nigeria", "value":3145, "color":chart.colors.getIndex(2) },
  { "id":"NO", "name":"Norway", "value":7996, "color":chart.colors.getIndex(1) },
  { "id":"OM", "name":"Oman", "value":2903, "color": chart.colors.getIndex(0) },
  { "id":"PK", "name":"Pakistan", "value":24073, "color": chart.colors.getIndex(0) },
  { "id":"PA", "name":"Panama", "value":7731, "color":chart.colors.getIndex(4) },
  { "id":"PY", "name":"Paraguay", "value":440, "color":chart.colors.getIndex(3) },
  { "id":"PE", "name":"Peru", "value":54819, "color":chart.colors.getIndex(3) },
  { "id":"PH", "name":"Philippines", "value":10004, "color": chart.colors.getIndex(0) },
  { "id":"PL", "name":"Poland", "value":14740, "color":chart.colors.getIndex(1) },
  { "id":"PT", "name":"Portugal", "value":26182, "color":chart.colors.getIndex(1) },
  { "id":"QA", "name":"Qatar", "value":17972, "color": chart.colors.getIndex(0) },
  { "id":"RO", "name":"Romania", "value":14107, "color":chart.colors.getIndex(1) },
  { "id":"RU", "name":"Russia", "value":165929, "color":chart.colors.getIndex(1) },
  { "id":"RW", "name":"Rwanda", "value":268, "color":chart.colors.getIndex(2) },
  { "id":"SA", "name":"Saudi Arabia", "value":31938, "color": chart.colors.getIndex(0) },
  { "id":"SN", "name":"Senegal", "value":1433, "color":chart.colors.getIndex(2) },
  { "id":"RS", "name":"Serbia", "value":9791, "color":chart.colors.getIndex(1) },
  { "id":"SL", "name":"Sierra Leone", "value":225, "color":chart.colors.getIndex(2) },
  { "id":"SG", "name":"Singapore", "value":20198, "color": chart.colors.getIndex(0) },
  { "id":"SI", "name":"Slovenia", "value":1448, "color":chart.colors.getIndex(1) },
  { "id":"SO", "name":"Somalia", "value":873, "color":chart.colors.getIndex(2) },
  { "id":"ZA", "name":"South Africa", "value":7808, "color":chart.colors.getIndex(2) },
  { "id":"ES", "name":"Spain", "value":253682, "color":chart.colors.getIndex(1) },
  { "id":"LK", "name":"Sri Lanka", "value":797, "color": chart.colors.getIndex(0) },
  { "id":"SD", "name":"Sudan", "value":852, "color":chart.colors.getIndex(2) },
  { "id":"SE", "name":"Sweden", "value":23918, "color":chart.colors.getIndex(1) },
  { "id":"CH", "name":"Switzerland", "value":30060, "color":chart.colors.getIndex(1) },
  { "id":"TW", "name":"Taiwan", "value":440, "color": chart.colors.getIndex(0) },
  { "id":"TJ", "name":"Tajikistan", "value":379, "color": chart.colors.getIndex(0) },
  { "id":"TZ", "name":"Tanzania", "value":480, "color":chart.colors.getIndex(2) },
  { "id":"TH", "name":"Thailand", "value":2992, "color": chart.colors.getIndex(0) },
  { "id":"TG", "name":"Togo", "value":128, "color":chart.colors.getIndex(2) },
  { "id":"TT", "name":"Trinidad and Tobago", "value":116, "color":chart.colors.getIndex(4) },
  { "id":"TN", "name":"Tunisia", "value":1025, "color":chart.colors.getIndex(2) },
  { "id":"TR", "name":"Turkey", "value":131744, "color":chart.colors.getIndex(1) },
  { "id":"UG", "name":"Uganda", "value":100, "color":chart.colors.getIndex(2) },
  { "id":"UA", "name":"Ukraine", "value":13691, "color":chart.colors.getIndex(1) },
  { "id":"AE", "name":"United Arab Emirates", "value":15738, "color": chart.colors.getIndex(0) },
  { "id":"GB", "name":"United Kingdom", "value":201101, "color":chart.colors.getIndex(1) },
  { "id":"US", "name":"United States", "value":1263224, "color":chart.colors.getIndex(4) },
  { "id":"UY", "name":"Uruguay", "value":673, "color":chart.colors.getIndex(3) },
  { "id":"UZ", "name":"Uzbekistan", "value":2266, "color": chart.colors.getIndex(0) },
  { "id":"VE", "name":"Venezuela", "value":379, "color":chart.colors.getIndex(3) },
  { "id":"VN", "name":"Vietnam", "value":271, "color": chart.colors.getIndex(0) },
  { "id":"ZM", "name":"Zambia", "value":146, "color":chart.colors.getIndex(2) },
];

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.nonScalingStroke = true;
polygonSeries.strokeWidth = 0.5;
polygonSeries.calculateVisualCenter = true;

var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.data = mapData;
imageSeries.dataFields.value = "value";

var imageTemplate = imageSeries.mapImages.template;
imageTemplate.nonScaling = true

var circle = imageTemplate.createChild(am4core.Circle);
circle.fillOpacity = 0.7;
circle.propertyFields.fill = "color";
circle.tooltipText = "{name}: [bold]{value}[/]";


imageSeries.heatRules.push({
  "target": circle,
  "property": "radius",
  "min": 4,
  "max": 30,
  "dataField": "value"
})

imageTemplate.adapter.add("latitude", function(latitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLatitude;
   }
   return latitude;
})

imageTemplate.adapter.add("longitude", function(longitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLongitude;
   }
   return longitude;
})



}); // end am4core.ready()
</script>

<!-- HTML -->
<div id="chartdiv"></div>
</body>
</html>
