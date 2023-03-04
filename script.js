const i = 0;
let it = 0;
let eq = false; 

document.getElementById("plus").onclick = () =>
{
    alert(i);
}

document.getElementById("val").onclick = () =>
{
    const x = parseInt(document.getElementsByTagName("input")[0].value);
    const y = parseInt(document.getElementsByTagName("input")[1].value);
    if(x>=3 && y>=1)
    {
        text = `<div id='container' style="grid-template-columns:`;
        
        for(let i=0;i<x;i++)
        {
            text += " 100px "
        }
        text += `">`
        document.getElementById("field").innerHTML =  text;

        const field = document.getElementById("container");
        it =0;
        for(let i=0; i<y;i++)
        {
            for(let j=0; j<x;j++)
            {
                field.innerHTML += `<div id="${it}" class="block" able= "false"> [${it}] </div>`
                document.getElementById(it).addEventListener("click",add(document.getElementById(i)))
                document.getElementById(it).setAttribute("able","true")
                it++;
            }
        }
        field.innerHTML += "</div>";
    }
    else{alert("X must be min. 3 and Y must be min. 1")}
}
const add = (c) => 
{
    if(c.getAttribute("able") == "true"){
    const id = c.id;
    const text = prompt("Input how you want to call your node")
    if(text != "")
    {
        c.innerText = text;
        c.addEventListener("click",al(c))
    }
    else
    {
        alert("Please enter a text")
    }
    }
}

const al = (c) => 
{
    alert(c.id)
}
