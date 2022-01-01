var fill = document.getElementsByClassName('entrada');
for (var i = 0; i < fill.length; i++){
    fill[i].addEventListener('keyup', function() {
        if (this.value.length >= 1){
            this.nextElementSibling.classList.add('mantener');   //adiciona la clase al elemento posterior
        }else{
            this.nextElementSibling.classList.remove('mantener'); //si es menor que 1 remover
        }
    });
}
  