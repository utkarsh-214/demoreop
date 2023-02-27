
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        if (this.textContent === "=") {
                output.value = eval(output.value);
            }
            else 
            {
                output.value += this.textContent;
            }
});
});
document.getElementById("C").addEventListener("click", function() {
    document.getElementById("output").value="";    
});
document.getElementById("Del").addEventListener("click", function() {
    document.getElementById("output").value= document.getElementById("output").value.slice(0,);    
});