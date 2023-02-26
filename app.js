
function addMovieHandler(){

    let li = document.createElement("li");
    let inputValue_1 = document.getElementById("title").value;
    let inputValue_2 = document.getElementById("extra_name").value;
    let inputValue_3 = document.getElementById("extra_value").value;
    if(inputValue_1.trim().length==0 ||inputValue_2.trim().length==0||inputValue_3.trim().length==0 )
{
alert("ENTER VALID VALUES")
}
else{


    let obj = {a:inputValue_1,b:inputValue_2,c:inputValue_3}
    let str=`${obj.a}\u00A0\u00A0 - \u00A0\u00A0  ${obj.b}  \u00A0\u00A0 :\u00A0\u00A0   ${obj.c}`
    console.log(str)
    let t = document.createTextNode(str);
    li.appendChild(t);
    li.className="list_prop unordered_style"
    document.getElementById("myul").appendChild(li);
}
          document.getElementById("title").value = "";
     document.getElementById("extra_name").value = "";
    document.getElementById("extra_value").value = "";

    }
        function  filterHandler(){
            let listitems= document.getElementsByTagName("li")
            let filter = document.getElementById("filter").value.toUpperCase()
            for(let i=0; i<listitems.length ; i++ )
            {
            if(listitems[i].innerText.toUpperCase().indexOf(filter)!=-1)
            {
                listitems[i].style.display='list-item'
            }
            else
           {
            listitems[i].style.display='none'

           }

   
}
        }

























