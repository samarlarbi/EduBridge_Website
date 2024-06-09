const deg = document.querySelectorAll('.degree');
const univ = document.querySelectorAll('.unv');

function change(p){
    univ.forEach((e)=>{e.style="    display: flex;"})
    for(var i = 0 ; i<deg.length ; i++)
    {
        deg[i].style="color:rgb(114, 115, 115) "
    
    } 
    var b = document.getElementById(p);
    b.style="color:#bc5500ce ; background-color: #F5F3F3 ;    box-shadow: 0 1px 1px 0 rgba(125, 124, 124, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);    "
   
    if(p=="all")
    {
        return;
    }
    for(var i = 0 ; i<univ.length ; i++)
    {
        if (univ[i].classList.contains(p) == false)
        univ[i].style="display:none;"
    
    }  

   
}

