document.getElementById("submitForm").addEventListener("submit",setCookies);


function setCookies(event){
    event.preventDefault();
    const firstname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.cookie = `firstname=${firstname};`
    document.cookie = ` email=${email};`
}

document.getElementById("showCookies").addEventListener("click",showCookies)

function showCookies(){
    let para = document.createElement("p");
    para.innerHTML = "Cookie: " + document.cookie;
    document.body.appendChild(para);
}