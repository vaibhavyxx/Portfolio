function closeAll(){
    let col = document.getElementsByClassName("collapsible");
    for(let i=0; i < column.length; i++){
        column[i].addEventListener("click", function(){
            this.classList.toggle("active");
            let content = this.nextElementSibling;
                content.style.display = "none";
        });}}

let column = document.getElementsByClassName("collapsible");
for(let i=0; i < column.length; i++){
    column[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    });
}

/*Didn't work
let intro = document.getElementById("text");
$(intro).on( "click", function(){
    $("div:hidden").first().fadeIn(500);
})*/