


// 9. Point in Circle and outside Rectangle

function insideKandOutsideR(pointX, pointY, circleX, circleY){
var radiusP = Math.sqrt((Math.pow(pointX - circleX, 2) + Math.pow(pointY - circleY, 2)));
var circleRadius = 3;
var inK = radiusP <= circleRadius;
var outR = (((pointX > -1) && (pointX < 5)) && ((pointY > -1) && (pointY < 1)));
if(inK == true && outR == false)
{
  console.log("yes");
 }
 else
 {
  console.log("no");
 }
 
}
insideKandOutsideR(1, 4, 1, 1);
insideKandOutsideR(2, 0, 3, 1);
insideKandOutsideR(2.5, 1.5, 1, 1);