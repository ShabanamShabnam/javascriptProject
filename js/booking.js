//--Coded by Aditya Murali--
"use strict";
var from,to;
var a=1000;
var b=2200;
var c=3100;
var d=4200;
var e=5500;
var f=6100;
var price,dat,tim;
$(document).ready(function()
{
    $("#confirm").hide();
    $("#price").hide();
    $("#p1").hide();
    
    $("#sub").click( function() 
    {
        
        from=$("#from").val(); 
        to=$("#to").val(); 
        dat=$("#date").val();
        tim=$("#time").val();
        
        if(from=="")
            {
              $("#from").next().text("This field is required.");  
            }
        else if(to=="")
            {
                $("#to").next().text("This field is required.");  
                $("#from").next().text("");
            }
        else if(dat=="")
            {
                $("#date").next().text("This field is required.");  
                $("#time").next().text("");
            }
        else if(tim=="")
            {
                $("#time").next().text("This field is required.");  
                $("#date").next().text("");
            }
        else
        {
            $("#from").next().text(""); 
            $("#to").next().text("");
            $("#time").next().text("");  
            $("#date").next().text("");
            var selectedYear=dat.split("-")[0];
            var selectedMonth=dat.split("-")[1];
            var selectedDay=dat.split("-")[2];
            var n =  new Date();
            var y = n.getFullYear();
            var m = n.getMonth() + 1;
            var d = n.getDate();
            if(selectedYear<y)
                {
                    alert("enter valid date");
                }
            else
                {
                    if(selectedMonth<m)
                        {
                            alert("enter valid date");
                        }
                    else
                        {
                            if(selectedDay<d)
                                {
                                    alert("enter valid day");
                                }
                            else
                                {
                                    if(from==to&&from!="")
            {
                alert("the source and the destination cant be the same");
                
            }
        else
        {
            if((from=="Bangalore"&&to=="Punjab")||(from=="Punjab"&&to=="Bangalore"))
                {
                    price= 400;
                }
            else if((from=="Bangalore"&&to=="Toronto")||(from=="Toronto"&&to=="Bangalore"))
                {
                    price= 1100;
                }
            else if((from=="Punjab"&&to=="Toronto")||(from=="Toronto"&&to=="Punjab"))
                {
                    price= 1200;
                }
            if((selectedDay-d)<15)
                {
                    price=price*2;
                }
            else if((selectedDay-d>15)&&(selectedDay-d<30))
                {
                    price=price*1.5;
                }
            price=price*($("#persons").val());
            $("#price").val(price);
            $("#confirm").show();
            $("#sub").hide();
    $("#price").show();
    $("#p1").show();
            
          }
    }
    }
            
 }
        
}
        
        
        
         }); // end click() method
    
    $("#confirm").click(function()
    {
        alert("Congragulations!!Tickets Booked.");
        location.reload();
    });
            
});// end ready() method






