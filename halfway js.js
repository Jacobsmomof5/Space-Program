//Amy Jacobs CSC102- Added a "warning less than half 1/2 way to launch message after count 5.  


function changeorder () {
    
    
    var currtime = 10;
    var i = 1;
    while (i < 12) {

        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than half 1/2 way to launch, time left";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "BLastoff! = " + currTime;
                currtime = currtime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currtime;
                currtime = currtime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
    
    }        
       
    
            
            

         