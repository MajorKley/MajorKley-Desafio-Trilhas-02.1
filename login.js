document.querySelector('.buton_entrar').addEventListener('click', function(e) {
    e.preventDefault();
    
    const emailOuId = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const manterConectado = document.getElementById('manter-conectado').checked;
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioCadastrado'));

    // Caso não exista usuário cadastrado
    if (!usuarioSalvo) {
        Swal.fire({
            icon: 'error',
            title: 'Conta não encontrada',
            html: 'Nenhum usuário cadastrado. <a href="index.html" style="color: #E43A12; font-weight: bold;">Clique aqui</a> para se cadastrar.',
            confirmButtonColor: '#292524',
            confirmButtonText: 'Entendido',
            backdrop: `
                rgba(0,0,0,0.5)
                url("elementos_login/logo_trilhas.svg")
                center top
                no-repeat
            `
        });
        return;
    }

    // Validação do email/ID
    const isEmailValido = emailOuId === usuarioSalvo.email;
    const isIdValido = emailOuId === usuarioSalvo.userId;

    if (!(isEmailValido || isIdValido)) {
        Swal.fire({
            icon: 'error',
            title: 'Credencial inválida',
            text: 'O e-mail ou ID informado não está cadastrado.',
            confirmButtonColor: '#E43A12',
            confirmButtonText: 'Tentar novamente'
        });
        return;
    }

    // Validação da senha
    if (senha !== usuarioSalvo.password) {
        Swal.fire({
            icon: 'error',
            title: 'Senha incorreta',
            html: 'Digite novamente ou <a href="#" style="color: #E43A12;">recupere sua senha</a>',
            confirmButtonColor: '#292524',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    // Login bem-sucedido
    if (manterConectado) {
        localStorage.setItem('usuarioLogado', 'true');
    }

    Swal.fire({
        title: 'Redirecionando...',
        html: '<div style="margin:20px 0"><b>Login realizado com sucesso!</b><br>Você será direcionado em <span id="swal-timer">3</span> segundos</div>',
        imageWidth: 120,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        willClose: () => {
            window.location.href = 'area-do-usuario.html';
        }
    });

    // Atualiza contador regressivo
    const timerEl = document.getElementById('swal-timer');
    let timeLeft = 3;
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) clearInterval(timerInterval);
    }, 1000);
});

// Verifica login automático ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('usuarioLogado') === 'true') {
        Swal.fire({
            title: 'Reconectando...',
            text: 'Você será redirecionado automaticamente',
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
            willClose: () => {
                window.location.href = 'area-do-usuario.html';
            }
        });
    }
});