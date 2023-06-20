var like = document.getElementById("view");

var para = document.getElementById("paragraph");


var count = 0;
like.addEventListener("click", function () {
    count++;
    like.style.color = "red";
    para.innerHTML = count + "Likes";
    para.classList.add("click");
    para.classList.remove("text");
})