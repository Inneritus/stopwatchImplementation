function CreateStopWatch() 
{
    let duration = 0;
    let startTime,endTime,running = 0;

    this.start = () =>{

        if(running)
        {
            throw new Error("Stopwatch has Already started");

        }
        else
        {
            running=true;
            startTime= new Date();
            console.log("Stopwatch has started");


        }
    };
    this.stop = () =>
    {
        if(!running)
        {
            throw new Error("Stopwatch hasn't started yet.")
        }
        else{
            running = false;
            endTime= new Date();
            const seconds= (endTime.getTime()-startTime.getTime())/1000;
            duration+= seconds;
            console.log("Stopwatch has stopped");


        }
    };

    this.reset= ()=> {
        duration = 0;
        startTime=0;
        endTime=0;
        running=null;
        console.log("Stopwatch has beenr reset.")



    };
    //Defining setters and getters!
    //syntax for Object.defineProperty("The object we want to add a new property to",'name of our property',"An object with Key Value pair with some special words such as get and set")
    Object.defineProperty(this,'duration',{
        get : ()=>{
            return duration;

        }

    });


}

const sw = new CreateStopWatch;
//AYY IT WORKS!!!
