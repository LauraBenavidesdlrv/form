alert("Completa este formulario solo si deseas inscribirte a nuestro evento 😀");
var inp = document.getElementsByClassName('entrada');
for (let j = 0; j < inp.length; j++){
    inp[j].addEventListener('keyup', function() {
        if (this.value.length >= 1){
            this.nextElementSibling.classList.add('mantener');   //adiciona la clase al elemento posterior
        }else{
            this.nextElementSibling.classList.remove('mantener'); //si es menor que 1 remover
        }
    });
}

  
