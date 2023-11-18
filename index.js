//Loop is the efficient solution to solve this problem......
var totalnumberofbutton=document.querySelectorAll("button").length;
alert("Total number of buttons are :-" +totalnumberofbutton);
for(var i=0;i<totalnumberofbutton;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
//get button which will be triggered by & will get by 'this' keyword.....
var buttonvalue=this.innerHTML;

    makesound(buttonvalue);
    buttonanimation(buttonvalue);

    }
    );
}
//key will be detected ....
document.addEventListener("keypress",function(event)
{
makesound(event.key);
buttonanimation(event.key);
});




//function to all sounds attached to button....
function makesound(key)
{
    //using switch satatement connecting the words to sounds......
    switch(key)
    {
     case "w":
        {
            var audio=new Audio('tom-1.mp3');
            audio.play();
        }
     case "a":
        {
            var audio=new Audio('tom-2.mp3');
            audio.play();
        }
        case "s":
            {
                var audio=new Audio('tom-3.mp3');
                audio.play();
            }
       case "d":
        {
            var audio=new Audio('tom-4.mp3');
            audio.play();
        }
        case"j":
    {
        var audio=new Audio('crash.mp3');
        audio.play();
    }
    case "k":
        {
            var audio=new Audio('kick-bass.mp3');
            audio.play();
            break;
        }
    case "l":
        {
            var audio=new Audio('snare.mp3');
            audio.play();
            break;
        }
    }
}
//adding animetion to the button ..
//by adding CSS class to particular element using js code.

function buttonanimation(eventkey)
{

var activebutton=document.querySelector("."+eventkey);
//alert(activebutton);
activebutton.classList.add("pressed");
setTimeout(function(){
    activebutton.classList.remove("pressed");
},250);

}









//NOTES FOR THIS PARTICULAR JAVA FILE
//without loop also we can achive this concept by writing the statement 7 times;
//document.querySelectorAll("button")[0].addEventListener("click",handleClick);
//document.querySelectorAll("button")[1].addEventListener("click",handleClick);
//document.querySelectorAll("button")[2].addEventListener("click",handleClick);
//document.querySelectorAll("button")[3].addEventListener("click",handleClick);
//document.querySelectorAll("button")[4].addEventListener("click",handleClick);
//document.querySelectorAll("button")[5].addEventListener("click",handleClick);
//document.querySelectorAll("button")[6].addEventListener("click",handleClick);
// function handleClick()
//  {

//  alert("clicked");


//  }

 
