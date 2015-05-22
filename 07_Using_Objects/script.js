// Problem 1. Planar coordinates
// =============================
// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.
// ===============================================================================================
pr('Problem 1. Planar coordinates', 'taskTitle');

function BuildPoint(x,y){
	return {
		X: x , 
		Y: y,
		toString: function (){
			return 'Point X=' + this.X + ' Y=' + this.Y;
		}
	};
}

function BuildLine(startPoint, endPoint){
	return {
		StartPoint: startPoint, 
		EndPoint: endPoint,
		toString: function (){
			return 'Line\nStart ' + startPoint.toString() + '\nEnd' + endPoint.toString();
		}
	}
}

function Distance(p1, p2){
	var xDist = Math.abs(p1.X - p2.X);
	var yDist = Math.abs(p1.Y - p2.Y);
	var distance = Math.sqrt(xDist*xDist + yDist*yDist);
	return (distance * 1000 | 0)/1000;
}

function CanFormTriangle(l1, l2, l3){

}

var p1 = BuildPoint(0, 0),
	p2 = BuildPoint(5,5);

pr(p1.toString());
pr(p2.toString());
pr('Distance: ' + Distance(p1, p2));

var l1 = BuildLine(BuildPoint(0,0), BuildPoint(5,5));
var l2 = BuildLine(BuildPoint(5,5), BuildPoint(1,3));
var l3 = BuildLine(BuildPoint(1,3), BuildPoint(0,0));
var l4 = BuildLine(BuildPoint(0,0), BuildPoint(5,5));

pr(l1.toString());
pr(l1 == l4);