const selected = document.querySelector("#Form > select:nth-child(8)")
const to_select = document.querySelector("#Form > select:nth-child(21)")
const select=document.querySelector("#Form > select:nth-child(8)")
const submit = document.querySelector("#Form > button > a")

if(localStorage.Login=="DONE"){
submit.href="../dashboard/index.html"
var value = selected.value;
var text = selected.options[selected.selectedIndex].value
}

items=to_select.options

select.onclick=()=>{
for(i=0;i<items.length;i++){
    console.log(items[i].innerHTML)

    if (items[i].value!==text){
        items[i].remove()
    }
}
}
