const sidebarTabs = document.querySelectorAll('.sidebarTabs h3');
const contents = document.querySelectorAll('.sidebarTabsContents div.cont');



const removeActiveClasses = () =>{
    sidebarTabs.forEach(t =>{
        t.classList.remove('active');
    })

    contents.forEach( c => {
        c.classList.remove('active');
    })
}

sidebarTabs.forEach((t, i) => {
    t.addEventListener('click', (e) => {   
        removeActiveClasses();
        contents[i].classList.add('active');
        t.classList.add('active');
    })
})
const Home=document.querySelector("body > div.sidebarContainer > div.sidebarTabs > h3:nth-child(2)")

function my(){
}
console.log(Home.innerHTML)
    const myTimeout = setTimeout(my, 5000);
    const Name=document.querySelector("#test > div.cont.active > p.text-3xl.text-center.py-3.name")
    const Uname = document.querySelector("#test > div.cont.active > p.text-3xl.text-center.py-3.uname")
    const Email = document.querySelector("#test > div.cont.active > p.text-3xl.text-center.py-3.email")
    const Phone = document.querySelector("#test > div.cont.active > p.text-3xl.text-center.py-3.phone")
    const MZ=document.querySelector("#OG")
    

    MZ.innerHTML=localStorage.MZ
    if (localStorage.title==='SIGNUP') alert("Congrats you have got 15 MZ coins!");
    user=Object.values(JSON.parse(localStorage.user))
    console.log(document.querySelector(".border-black"))
    lst = [Name,Uname,Email,Phone]
    console.log(lst)
    lst.forEach((item,i) => {
        item.innerHTML = user[i] 
});

