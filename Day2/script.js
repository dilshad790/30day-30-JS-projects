const listcontainer=document.querySelector(".list-container");
const inputBox=document.querySelector("#inputBox");
const btn=document.querySelector(".btn");
function addTask()
{
    if(inputBox.value==="")
    {
        alert("Please Add some Task");
    }
    else
    {

        const list=document.createElement('li');
        const data=inputBox.value;
        list.innerText=data;
        let span=document.createElement('span');
        span.innerText="✖";
        list.appendChild(span);
        listcontainer.appendChild(list);
        
    }
    inputBox.value="";
    saveData();
}

listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showData()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}

showData();