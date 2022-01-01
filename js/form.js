var input = document.getElementsByClassName('entrada');
for (let j = 0; j < input.length; j++){
    input[j].addEventListener('keyup', function() {
        if (this.value.length >= 1){
            this.nextElementSibling.classList.add('mantener');   //adiciona la clase al elemento posterior
        }else{
            this.nextElementSibling.classList.remove('mantener'); //si es menor que 1 remover
        }
    });
}

  