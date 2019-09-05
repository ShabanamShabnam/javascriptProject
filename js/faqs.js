//Coded by Lovepreet kaur
"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    var h2 = this;                      
    var div = h2.nextElementSibling;  

  
    if (h2.hasAttribute("class")) 
    { 
        h2.removeAttribute("class");	
    } else {
        for(var j=0;j<h2Elements.length;j++){
            if(h2 == h2Elements[j]){
               h2.setAttribute("class", "minus"); 
            }
            if(h2 != h2Elements[j]){
                h2Elements[j].removeAttribute("class");
            }
                
            }
        }

    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else {
        for(var i=0;i<h2Elements.length;i++){
            if(div == h2Elements[i].nextElementSibling){
                div.setAttribute("class", "open"); 
            }
            if(div != h2Elements[i].nextElementSibling){
                h2Elements[i].nextElementSibling.removeAttribute("class");
            }
        }
         
    } 
};

window.onload = function() {
  
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
       
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
   
    h2Elements[0].firstChild.focus();       
};
