
function forloop ()
{
         var currTime = 10;
        /*  for (initial condition, ending condition - stop when not true, i++ same as  i = i+1*/ 
        for (var i = 1; i < 12; i++) 

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
               }, 1000 * i);
           }



