function SendEmail() {
    var params={
    from_name:document.getElementById("name").value,
    Email:document.getElementById("Email").value,
    Message:document.getElementById("Message").value
   }
   emailjs.send("service_vljg83l","template_lhvtoyi",params).then(function(res){
    alert("success! " + res.status);
   })
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        document.title = "Hey, Raj is Here ! (:";
    } else {
        document.title = "It's Raj ";
    }
});

window.addEventListener('load', function () {
    setTimeout(function () {
        var loadpage = document.getElementById("Loading-Page");
        var mainpage = document.getElementById("main-page");

        loadpage.style.display = "none";
        mainpage.style.display = "block";
    }, 2000);
})