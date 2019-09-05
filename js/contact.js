//--Coded by Aditya Murali--
"use strict";
var name,email;
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

$(document).ready(function()

   { 
    $("#sub").click( function() 
    {
        
        name=$("#name").val(); 
        email=$("#email").val(); 
        
        if(name=="")
            {
              $("#name").next().text("This field is required.");  
            }
        else if(email=="")
            {
                $("#email").next().text("This field is required.");  
                $("#name").next().text("");
            }
        else if(!emailPattern.test(email))
                    {
                        $("#email").next().text("Valid email address required");
                        $("#name").next().text("");
                    }
        
        
        else
        {
            $("#name").next().text("");
            $("#email").next().text("");
            alert("We will get back to you shortly!!");
            location.reload();
            
        }
    
        
        }); // end click() method

            
});// end ready() method






