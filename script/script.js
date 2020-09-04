let email = document.querySelector(".email");
let comment = document.querySelector(".textBox");
let send = document.querySelector(".send");
let emailMessage = document.querySelector(".emailMessage");
let commentMessage = document.querySelector(".commentMessage");
let ratingScore = document.querySelector(".rating");
let ratingMessage = document.querySelector(".ratingMessage");

let number = 0
let rating


function ratingFunct(rat){
    rating = rat;
}

// function validateRating(){
//     var valid = false;
//     var x = ratingScore;

//     let y
    
//     for (var i = 0; i<x.length; i++){
//         if(x[i].checked){
//             valid = true;
//             break;
//         }

//         if(valid == (true)){
//             return (true);
//         }

//         else{
//             return (false);
//         }
//     }
// }

send.addEventListener("click", function(){

    // удаляю лишние пробелы с начала или конца, если они есть
    let emailValue = email.value.trim();
    let commentValue = comment.value.trim();

    // функция, с помощью регулярных выражений проверяет правильность написания почты 
    function EmailValidationFunc(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // дополнительная функция проверки почты 
    function validateEmail(mail){
        if (EmailValidationFunc(mail) && mail !== "" && mail !== null){
            email.classList.remove("wrong");
            emailMessage.textContent = " ";
            return (true);
        }

        else{
            email.classList.add("wrong");
            return (false);
        } 
        
    }

    // функция проверки комментария 
    function validateComment(comm){
        if(comm.length >= 3 && comm.length <= 100 && comm !== "" && comm !== null){
            comment.classList.remove("wrong");
            commentMessage.textContent = " ";
            return (true)
            
        }
        else{
            comment.classList.add("wrong");
            return (false)
        } 
        
    }

    // вывод сообщений об ошибке
    if(validateEmail(emailValue) == (false)){
        emailMessage.textContent = "Check ur email address"
    }
    

    if (validateComment(commentValue) == (false)){
        commentMessage.textContent = "Check ur comment"
    }

    // if(validateRating == (false)){
    //     ratingMessage = "rating is required";
    // }

    // при успешном заполнении всех полей
    else if(validateComment(commentValue) == (true) && validateEmail(emailValue) == (true)){
        emailMessage.textContent = " ";
        commentMessage.textContent = " ";
        ratingMessage.textContent = " ";
        
        
        number+=1;
        let time = new Date();
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();

        let hour = time.getHours();
        let min = time.getMinutes();

        let now = d + "." + m + "." + y + " - "+ hour + " : " + min;
        
        let list = document.querySelector(".list");
        let list_item = document.createElement("li");
        list_item.innerHTML = 
        `
        <span>
        <p>${number}.${emailValue} ${now}</p> 
        </span>
        <p>${commentValue}</p>
        <p>Rating: ${rating}</p>
        `;

        list.append(list_item); 
        email.value = ""
        comment.value = ""
    }

})






