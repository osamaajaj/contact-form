document.querySelectorAll("input[type=radio]").forEach(input => {
    input.addEventListener("focus", ()=>{
        input.parentElement.style.backgroundColor = "rgba(0,100,0,0.1)";
        input.parentElement.style.borderColor = "rgba(0,100,0,0.7)";
    })
})

document.querySelectorAll("input[type=radio]").forEach(input => {
    input.addEventListener("focusout", ()=>{
        input.parentElement.style.backgroundColor = "unset";
        input.parentElement.style.borderColor = "var(--Grey-500)";
    })
})

let values = 
    {
        name:"",
        surname:"",
        email:"",
        query:"",
        message:""
    };


const checkFieldes = ()=>{
    let bool;
    let textValues = [];
    document.querySelectorAll("input[type=text]").forEach(field=>{
        if(field.value === ""){
            field.nextElementSibling.classList.remove("hidden");
            field.previousElementSibling.style.color = "var(--Red)";
            field.style.borderColor = "var(--Red)";
            bool = false;
        }
        else{
            bool = true;
            textValues.push(field.value);
        }

        field.addEventListener("input", ()=>{
            field.nextElementSibling.classList.add("hidden");
            field.previousElementSibling.style.color = "var(--Grey-900)";
            field.style.borderColor = "var(--Grey-500)";
        })
    })
    values.name = textValues[0];
    values.surname = textValues[1];
    values.email = textValues[2];
    console.log(textValues);
    return bool;
}




const checkRadios = ()=>{
    let bool;
    let radioList = [];
    document.querySelectorAll("input[type=radio]").forEach(radio=>{
        if(radio.checked){
            radioList.push(radio);
            values.query = radio.nextElementSibling.textContent;
        }
        
    })
    
    if(radioList.length < 1){
        document.getElementById("radio-error").classList.remove("hidden");
        document.querySelectorAll("input[type=radio]").forEach(radio=>{
            radio.closest("label").style.borderColor = "var(--Red)";
        })
        bool = false;
    }
    else{
        bool = true;
    }

    document.querySelectorAll("input[type=radio]").forEach(radio=>{
        radio.addEventListener("input", ()=>{
            document.getElementById("radio-error").classList.add("hidden");
            document.querySelectorAll("input[type=radio]").forEach(radio=>{
                radio.closest("label").style.borderColor = "var(--Gray-500)";
            })
        })
    })
    return bool;
}



const messageCheck = ()=>{
    let bool;
    let message = document.querySelector("textarea");
    if(message.value == ""){
        message.nextElementSibling.classList.remove("hidden");
        message.previousElementSibling.style.color = "var(--Red)";
        message.style.borderColor = "var(--Red)";
        bool = false;
    }
    else{
        bool = true;
        values.message = message.value;
    }
    message.addEventListener("input", ()=>{
            message.nextElementSibling.classList.add("hidden");
            message.previousElementSibling.style.color = "var(--Grey-900)";
            message.style.borderColor = "var(--Grey-500)";
    })
    return bool;
}



const acceptCheck = ()=>{
    let bool;
    let accept = document.getElementById("checkbox");
    let acceptError = document.getElementById("accept-error");
    if(!accept.checked){
        acceptError.classList.remove("hidden");
        bool = false
    }
    else{
        bool = true;
    }
    accept.addEventListener("input", ()=>{
        acceptError.classList.add("hidden");
    })
    return bool;
}



const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", ()=>{
    checkFieldes();
    checkRadios();
    messageCheck();
    acceptCheck();
    if(checkFieldes() && checkRadios()&& messageCheck() && acceptCheck()){
        document.querySelectorAll("input, textarea" ).forEach(input=>{
            input.value = "";
        })
        document.querySelectorAll("input[type=radio]").forEach(radio=>{
            radio.checked = false;
        })
        document.getElementById("checkbox").checked = false;

        document.querySelector(".succes").style.opacity = "1";

        setTimeout(()=>{document.querySelector(".succes").style.opacity = "0"},3000);
        
       
        
    }
    else{
        console.log("some fieldes empty");
    }
})





