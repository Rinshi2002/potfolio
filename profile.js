function sendMail(){
    var params ={
        name : document.getElementById("name").value,
        mail:document.getElementById("mail").value,
        // mobile:document.getElementById("mobile").value,
        // subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    const serviceID ="service_hfxk5t6";
const templateID ="template_89x9gh7";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        // document.getElementById("mobile").value = "";
        // document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your mail was sent successfully")
    }
)
.catch((err)=>console.log(err));
}