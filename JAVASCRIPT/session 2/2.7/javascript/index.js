function clickedSquare(){
    var side = window.prompt("Enter length of any side of a square");
    window.alert("Perimeter is : "+(4*side)+" & Area is : "+(side*side));
}

function clickedTriangle(){
    var choice  = window.prompt("Choose Type of Triangle\n1. Equilateral Triangle\n2. Isosceles Triangle\n3. Scalene Triangle");
    choice = Number(choice);
    switch(choice){
        case 1:
            var side = Number(window.prompt("Enter length of the Side"));
            window.alert("Perimeter is : "+(3*side)+" & Area is : "+((Math.sqrt(3)/4)*(side*side)));
            break;
        case 2:
            var sideA = Number(window.prompt("Enter side - A"));
            var sideB = Number(window.prompt("Enter side - B "));
            var sideC = Number(window.prompt("Enter side - C")) ;
            window.alert("Perimeter is : "+((2*sideA)+sideC)+" & Area is : "+((1/4)*sideB*(Math.sqrt(4*(sideA*sideA) - (sideB*sideB)))));
            break;
        case 3:
            var side1 =Number(window.prompt("Enter side - A"));
            var base = Number(window.prompt("Enter base - B "));
            var side2 = Number(window.prompt("Enter side - C")) ;
            var height = Number(window.prompt("Enter height of a triangle"));
            window.prompt("Perimeter is : "+(side1+base+side2)+" & Area is : "+((1/2)*base*height));        
            break;
    }
    
}

function clickedCircle(){
    var radius = Number(window.prompt("Enter radius of a Circle"));
    window.alert("Perimeter is : "+(2*3.13*radius)+" & Area is : "+(3.14*radius*radius));
}

function clickedRectangle(){
    var length = Number(window.prompt("Enter length of a Rectangle"));
    var breadth = Number(window.prompt("Enter breadth of a Rectangle"));
    window.alert("Perimeter  is : "+(2*length+2*breadth)+" & Area is : "+(length*breadth));

}