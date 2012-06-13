
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
     hotelName = "Washington Hilton",
     timeStillWaitingInLine = 0,
     foodOrdered =["sodas", "bread with dip", "bistro burgers", "fries"],
     orderOfFood = [1, 2, 3, 4];

//#1 Procedure ..Driving using the gps to get to our hotel.

var driveToHotel = function (hotelName) {
        if (directionsToHotel === true) {
            console.log("To get to the " + hotelName + " from here " + followGps + " First we need to head to the " + freeway + "." + " This is going to be a long drive.");
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
    


//#3  Number Function //Waiting on line at the hotel to check in

var  checkInHotelTime = function (hotelNumber) { //number argument
	     console.log("We just got to the check in desk at the hotel. Looks like there is a pretty long line.");
         var waitInLine = 15; 
         while (waitInLine > timeStillWaitingInLine) {
         	   console.log("The wait will be " + waitInLine + " minutes until our turn.");
               waitInLine -=5
         	   
         };
         console.log("Finally we are checked in and got our room keys. Our room number is " + hotelNumber + " on the second floor.");
         return hotelNumber;

     };//END OF NUMBER FUNCTION
         

//#4 String Function //Ralxing in our room deciding where to go eat?

 var relaxInRoom = function (relax1, plans) { // 2 string arguments // shower & talk
         var town = "connecticut ave and dupont circle";
         var bistro = "bistro bistro";
         var hotelRoom = console.log("We are finally back in our hotel room. It feels so good to sit down on this nice comfy bed and relax for a minute. Next I am going to  " + relax1 + ". " + "We are both hungry and ready to go out. We need to " + plans + " where we want to eat.");
         var walkDownTown =  console.log("Let's walk down " + town + " to see what restaurants we can find. This place called " + bistro + " looks good. We go inside and sit down.");
         //console.log("We are finally back in our hotel room. It feels so good to sit down on this nice comfy bed and relax for a minute. Next I am going to " + relax1 + ". " + " We are both hungry and ready to go out. We need to " + plans + " where we want to eat.");
         // console.log("Let's walk down " + town + " to see what restaurants we can find. This little cozy place called " + bistro + " looks good. We go inside and sit down.");
         return hotelRoom + walkDownTown;
     };//END OF STRING FUNCTION
   

//#5 Array Function//We are at the restaurant ordering our food.

 var orderingOurFood = function (food, number) {
 	     console.log("The waiter comes over to our table to greet us and give us our menus. Then we order our food. ");
 	     var foodTaste = ["refreshing", "warm and soft", "so juicy and yummy", "crunchy"];
 	     var orderOfNumbers = ["st", "nd", "rd", "th"];
         for (var i = 0; i < foodOrdered.length;  i++) {
         	  console.log("The waiter brought us our " + foodOrdered[i] + (" ") + orderOfFood[i] + orderOfNumbers[i] + " that were " + foodTaste[i] + ".");
         };	  
         console.log("All the food was great. We paid and then the waiter said good evening ladies and we went shopping down the block.");
         return foodTaste;
    
     };//END OF ARRAY FUNCTION

         
        

//CALL FUNCTIONS 
 //Procedure Function//
 driveToHotel("Washington Hilton");
 //Boolean Function//
 waitToEat(true, true);
 //Number Function//
 checkInHotelTime(2166);
 //String Function//
 relaxInRoom("get a nice warm shower", "decide");
 //Array Function/
 orderingOurFood(foodOrdered, orderOfFood);
//END////








 







 