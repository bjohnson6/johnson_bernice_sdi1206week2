
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

var driveToHotel= function (hotelName) {
        if (directionsToHotel === true) {
            console.log ("To get to the "+ hotelName +" from here the "+ followGps +" First we need to head to the "+ freeway + "." +" This is going to be a long drive.");
        }else{
    	    console.log ('We need to figure out another way to get there.');
   
        };  

    }; //END PROCEDURE FUNCTION 



//#2 Boolean Function...Deciding if we should wait to eat once we get there or before?

var waitToEat = function (notHungry, betterFood) {
	    var eatNow =(notHungry && betterFood);
	    if (eatNow === true) {
		    console.log ("We are getting alittle hungry now but I think we should wait to eat until we get there because the food will be better in town.");
	    }else{
    	    console.log ("Let\'s find a place to eat on the freeway.");
        
        };
        eat = eatNow;
        return eat;  //RETURN BOOLEAN FUNCTION =true
    }; //END OF BOOLEAN FUNCTION
    






//#3  Number Function 

var undecided = function () {} //number argument





//#4 String Function

 var undecided = function () {} // 2 string arguments








 //#5  

 var undecided = function () {} // number and array arguments












 //CALL FUNCTIONS 
 //Procedure Function//
 driveToHotel("Washington Hilton");
 //Boolean Function//
 waitToEat(true, true);