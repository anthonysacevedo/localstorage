
document.getElementById("buttonText").addEventListener("click", function(event){
    event.preventDefault(); // Evitar que la pagina se recargue
    var input = document.getElementById("inputText").value; // Valor campo usuario
    if (input) {
        localStorage.setItem("inputValue", input);// Gardar clave en el almacenamiento local del navegador
    }  
})
