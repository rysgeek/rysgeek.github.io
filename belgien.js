let table;
let count=5;

function preload() {

table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');

}

function setup() {

createCanvas(windowWidth,windowHeight);

background(0,100,200);


Belgium = table.findRow('Belgium','Country/Region');

textSize(60);

fill(200);

frameRate(10);

xmax = table.getColumnCount();

ymax = Belgium.arr[xmax-1];

}

function draw(){
    
text("Antal smittede i Belgien",100,100);    
noStroke();

x = windowWidth/4+count*(windowWidth/(2*xmax));

y = windowHeight/1.2-Belgium.arr[count]*(windowHeight/(2*ymax));

fill(255);

ellipse(x, y, 5,5);

count +=1;

if (count>table.getColumnCount()-1){

count = table.getColumnCount()-1;

} 

}
