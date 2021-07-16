const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
  e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    
    let content = document.getElementById('content')
    let carregando = `<p>Aguarde um momento...</p>`
    let pronto = `<p>Cadastro finalizado!</p>`

    carregando.fontcolor = '#CD00CD'
    pronto.fontcolor = '#CD00CD'

    content.innerHTML = carregando
    
    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})
