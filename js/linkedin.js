/**
 * addClass
 * @param  el   either the element or an id of an element
 * @param  cls  the new class to add
 */
 function Something(){
    
 this.color = color;
 this.addClass = function (el, cls){
     var elem = document.getElementById(el);
     
     // if classList is supported
     if(elem !== NULL){
         if(!elem.classList.contains(cls)){
             elem.classList.add(cls);
         }
     } else{
         if(!el.classList.contains(cls)){
             el.classList.add(cls);
         }
     }
     
     // otherwise ... el.className  ==>  'cl1 cl2 cl3'   el.className = 'cl1 cl3'
     var names = el.className.split(" ");
     if(names.indexof(cls) === -1){
         el.className = names.join(" ") + " " + cls;
     }
 };
 return this;
}

var s = new Something();
s.addClass('a','green');







// PYMK (People You May Know)
// Screenshot: https://dl.dropboxusercontent.com/u/13098718/pymk.png
<div id="container">
    <h2>People You May Know<h2>
    <ul>
        <li>
       <img src="profile.jpg">
       <div class = "info">
       <p class = "person-name">Jack Smith, Software Engineer at EMC</p> 
       <a href="linkedin.com/in/username" class="connect-text"> <img src = "connect.jpg" alt="Connect Button"> Connect</a>
   </div>
   <div class = "dismiss-btn">
       <a href="linkedin.com"><img src = "dismiss.jpg" alt="Dismiss Button"></a>
   </div>
       </li>
   </ul>
</div>



<style>
    #container{
        border-radius: 20px;
        width: 300px;
        height:270px;
    }
    
    h2{
        font-weight: bold;
        font-size:18px;
        text-align:left;
    }
    
    img{
        float: left;
        width: 50px;
        height: 50px;
    }
    
    info{
        float: left;
        
    }
</style>