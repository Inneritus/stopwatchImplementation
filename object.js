// Factory Function 


function createCircle(radius) {


    return {

        radius,
        draw : ()=> {
            console.log('circle has been drawn ')
        }
    }
}

const circle = createCircle(5);

// circle.draw();

 // Constructor function
//Important note, Constructor creation of an object, the function needs to be capitalized.


function Circle(radius){


    console.log(this);

    this.radius = radius;
    this.draw = () => {
        console.log('Circle has been drawn.');
    }



}


const anotherOne =  new Circle(15);

//Remember new creates an empty object
//This points to the object it is currently in, if no new object has been defined it will reference the Window This.


anotherOne.draw();
