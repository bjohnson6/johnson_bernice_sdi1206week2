
//alert("JavaScript works!");
//Bernice Johnson
//June 4, 2012
//Deliverable 2


//Required variables
//string//number//array

var  directionsToHotel = true,
     hotel = "Washington Hilton",
     freeway = "freeway and get on I-83 S. towards Baltimore",
     notHungry = true,
     betterFood = true,
     followGps = "the gps says it will take 3hrs.",
     hotelName = "Washington Hilton";
     

//#1 Procedure ..using the gps to get to our hotel.

var driveToHotel = function (hotelName) {
        if (directionsToHotel === true) {
            console.log("To get to the " + hotelName + " from here the " + followGps + " First we need to head to the " + freeway + "." + " This is going to be a long drive.");
        } else {
    	    console.log('We need to figure out another way to get there.');
   
        };  

    }; //END PROCEDURE FUNCTION 



//#2 Boolean Function...Deciding if we should wait to eat once we get there or before?

var waitToEat = function (notHungry, betterFood) {
	    var eatNow = (notHungry && betterFood);
	    if (eatNow === true) {
		    console.log("We are getting alittle hungry now but I think we should wait to eat until we get there because the food will be better in town.");
	    } else {
    	    console.log("Let\'s find a place to eat on the freeway.");
        
        };
        var eat = eatNow;
        return eat;  //RETURN BOOLEAN FUNCTION =true
    }; //END OF BOOLEAN FUNCTION
    


//#3  Number Function 

var  checkInHotel = function (number) {} //number argument
        


//#4 String Function

 var relaxInRoom = function (relax1, plans) { // 2 string arguments // shower & talk
         var town = "connecticut ave, dupont circle";
         var bistro = "bistro bistro";
         var hotelRoom = ("We are finally back in our hotel room now. It feels so good to sit down on this nice comfy bed & relax for a minute. Next I am going to  " + relax1 + ". " + "We are both ready to go out now and still very hungry. We need to " + plans + " where we want to eat.");
         var walkDownTown = ("Let's walk down " + town + " to see what restaurants we can find. This place called " + bistro + " looks good. We go inside and sit down.");
         console.log("We are finally back in our hotel room now. It feels so good to sit down on this nice comfy bed & relax for a minute. Next I am going to" + relax1 + ". " + " We are both ready to go out now and still very hungry. We need to " + plans + " where we want to eat.");
         console.log("Let's walk down " + town + " to see what restaurants we can find. This little cozy place called " + bistro + " looks good. We go inside and sit down.");
         return hotelRoom + walkDownTown;
     };
    







 //#5 Array Function

 var undecided = function () {} // number and array arguments
         var bistroBurger = 12 * 2;
         var soda = 1 * 2;
         var waitForFood = 15;













 //CALL FUNCTIONS 
 //Procedure Function//
 driveToHotel("Washington Hilton");
 //Boolean Function//
 waitToEat(true, true);
 //Number Function//
 checkInHotel();
 //String Function//
 relaxInRoom("get a nice warm shower", "decide");
 //Array Function//