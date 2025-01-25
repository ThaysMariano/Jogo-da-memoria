const input = document.querySelector('.login_input') //nome
const button = document.querySelector('.login_button') //Jogar

const form = document.querySelector('.loginForm')


const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', input.value) //salvou o noem do jogador
    window.location = 'paginas/jogo.html'
}


input.addEventListener('input', validateInput); //Ativar e desativar o botao
form.addEventListener('submit', handleSubmit);