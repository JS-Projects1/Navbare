let open = document.querySelector('.open');
let close = document.querySelector('.close');
let container = document.querySelector('.container');

close.onclick = function(){
    container.classList.add('hide');
    close.classList.add('hide');
    open.classList.remove('hide');
}

open.onclick = function(){
    container.classList.remove('hide');
    close.classList.remove('hide');
    open.classList.add('hide');
}