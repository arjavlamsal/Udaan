addEventListener("DOMContentLoaded",()=>{
    if (document.title==="Login"){
    const Current_Name = document.querySelector("body > section > div > div:nth-child(2) > div > div > form > div:nth-child(1) > input");
    const Current_Password =document.querySelector("#password-field");
    const Submit = document.querySelector("body > section > div > div:nth-child(2) > div > div > form");
    const Warn = document.querySelector("body > section > div > div:nth-child(2) > div > div > form > p");

    if (!localStorage.names){
        localStorage.names=JSON.stringify({})
    }
    
    Warn.innerHTML = ""
    Submit.onsubmit=()=>{
        names=JSON.parse(localStorage.names)
        if (names){
            if (Current_Name.value){
            if(names!='{}'){
            if (names[Current_Name.value]===Current_Password.value){
                Warn.innerHTML = "LOGGED IN" ;
                localStorage.Login="DONE";
                localStorage.title= "LOGIN;"

            }
            else{
                Warn.innerHTML="INVALID CREDENTIALS";
            }
        }
        else{
            Warn.innerHTML = "";
        }
    }
    }
    }}
})
addEventListener("DOMContentLoaded",()=>{
    if (document.title==='Signup'){

    const Full_Name = document.querySelector("body > section > div > div:nth-child(2) > div > div > form > div:nth-child(1) > input")
    const Usr_Name = document.querySelector("body > section > div > div:nth-child(2) > div > div > form > div:nth-child(2) > input")
    const Email = document.querySelector("body > section > div > div:nth-child(2) > div > div > form > div:nth-child(3) > input")
    const Phone = document.querySelector("body > section > div > div:nth-child(2) > div > div > form > div:nth-child(4) > input")
    const Password = document.querySelector("#password-field")
    const Confirm_pass = document.querySelector("#confirm")
    const Form = document.querySelector("body > section > div > div:nth-child(2) > div > div > form")
    const lst = [Full_Name,Usr_Name,Email,Phone,Password,Confirm_pass]

    var users=[]
    var user={}
    Form.onsubmit=()=>{
    if(Password.value===Confirm_pass.value){
    lst.forEach((item)=>{
        let current_data = item.value
        let current_type = item.placeholder
        new_user ={}
        new_user[current_type]=current_data
        user=Object.assign({},user,new_user)
        
    }
    )
    localStorage.user=JSON.stringify(user)
}
    localStorage.MZ='15';
    localStorage.title = "SIGNUP"
    users.push(JSON.stringify(user))
    var names={}
    console.log(user)

    let n= user['Full_Name']
    let p=user['Password']
    names[n]=p

    console.log(names)
    localStorage.names=JSON.stringify(names)
    


}
}


})