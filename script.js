// develop by shivam patel
let form = document.querySelector('form');
let inputs = document.querySelectorAll("input")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    validation()

})
// inputs.forEach(input=>{
//     input.addEventListener('input',(e)=>{
//         e.preventDefault()
//         validation()

//     })
// })
function validation(){
    let first_Name = document.getElementById("name").value.trim();
    let Last_Name = document.getElementById("L-name").value.trim();
    let email = document.getElementById("Email").value.trim();
    let password = document.getElementById("password").value.trim();
    let con_password = document.getElementById("Con-password").value.trim();


    checkinput('name',first_Name,'First Name should not be empty and must have at least 3 characters',3);
    checkinput('L-name',Last_Name,'last Name should not be empty and must have at least 3 characters',3);
    checkinput('Email',email,'Email should not be empty ',1);
    checkinput('password',password,'Password must be at least 6 characters',6);
    checkConfirmPassword('Con-password', password,con_password);
}
function checkinput(id,value,massage,minlength){
    let inputfield =document.getElementById(id);
    let parentbox = inputfield.parentElement;
    let small = parentbox.querySelector("small")
    if(value.length < minlength){
        small.innerText = massage;
        parentbox.classList.add("error");
        parentbox.classList.remove("success")

    }
    else{
        parentbox.classList.add("success");
        parentbox.classList.remove("error")

    }
    
 
   

}
function checkConfirmPassword(id,pass,conPass){
    let inputfield =document.getElementById(id);
    let parentbox = inputfield.parentElement;
    let small = parentbox.querySelector("small")
    if(conPass !== pass){
        small.innerText = "Passwords do not match";
        parentbox.classList.add("error");
        parentbox.classList.remove("success")

    }
    else{
        parentbox.classList.add("success");
        parentbox.classList.remove("error")

    }


}


