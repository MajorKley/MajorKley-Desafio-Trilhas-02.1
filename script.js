document.getElementById('inscricao-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    let formularioValido = true;

    // 1. Validação do Nome
    const nome = document.getElementById('nome');
    const nomeValue = nome.value.trim();
    
    if (nomeValue === '') {
        mostrarErro(nome, 'Por favor, preencha seu nome completo');
        formularioValido = false;
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nomeValue)) {
        mostrarErro(nome, 'O nome deve conter apenas letras e espaços (sem números ou símbolos)');
        formularioValido = false;
    } else if (nomeValue.split(' ').length < 2) { // Verifica se tem pelo menos um sobrenome
        mostrarErro(nome, 'Por favor, insira seu nome completo (nome e sobrenome)');
        formularioValido = false;
    } else {
        removerErro(nome);
    }

    // 2. Validação da Data de Nascimento
    const aniversario = document.getElementById('aniversario');
    if (aniversario.value === '') {
        mostrarErro(aniversario, 'Por favor, selecione sua data de nascimento');
        formularioValido = false;
    } else {
        removerErro(aniversario);
    }

    // 3. Validação do CPF
    const cpf = document.getElementById('cpf');
    const cpfValue = cpf.value.trim();

    if (cpfValue === '') {
        mostrarErro(cpf, 'Por favor, preencha o CPF');
        formularioValido = false;
    } else if (!/^\d+$/.test(cpfValue)) { // Verifica se tem apenas números
        mostrarErro(cpf, 'O CPF deve conter apenas números (sem pontos, traços ou letras)');
        formularioValido = false;
    } else if (cpfValue.length !== 11) { // Verifica se tem 11 dígitos
        mostrarErro(cpf, 'O CPF deve ter exatamente 11 dígitos');
        formularioValido = false;
    } else {
        removerErro(cpf);
    }

    // 4. Validação do Gênero (não precisa, pois é um select com opções pré-definidas)

    // 5. Validação do E-mail
    const email = document.getElementById('email');
    const emailValue = email.value.trim();

    if (emailValue === '') {
        mostrarErro(email, 'Por favor, preencha o e-mail');
        formularioValido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) { // Verifica formato básico
        mostrarErro(email, 'O e-mail deve conter "@" e um domínio válido (ex: .com)');
        formularioValido = false;
    } else if (!emailValue.toLowerCase().endsWith('.com')) { // Verifica se termina com .com
        mostrarErro(email, 'O e-mail deve terminar com ".com"');
        formularioValido = false;
    } else {
        removerErro(email);
    }

    // 6. Validação do Telefone
    const telefone = document.getElementById('telefone');
    const telValue = telefone.value.trim();

    if (telValue === '') {
        mostrarErro(telefone, 'Por favor, preencha o telefone');
        formularioValido = false;
    } else if (!/^\d+$/.test(telValue)) { // Verifica se tem apenas números
        mostrarErro(telefone, 'O telefone deve conter apenas números (sem pontos, traços ou letras)');
        formularioValido = false;
    } else {
        removerErro(telefone);
    }

    // 7. Validação do Documento de Identidade
    const iddocumento = document.getElementById('iddocumento');
    if (iddocumento.value === '') {
        mostrarErro(iddocumento.parentElement, 'Por favor, selecione um documento de identidade');
        formularioValido = false;
    } else {
        removerErro(iddocumento.parentElement);
    }

    // 8. Validação do CEP
    const cep = document.getElementById('cep');
    const cepValue = cep.value.trim();

    if (cepValue === '') {
        mostrarErro(cep, 'Por favor, preencha o CEP');
        formularioValido = false;
    } else if (!/^\d+$/.test(cepValue)) { // Verifica se tem apenas números
        mostrarErro(cep, 'O CEP deve conter apenas números (sem pontos, traços ou letras)');
        formularioValido = false;
    } else {
        removerErro(cep);
    }
    // 9. Validação da Rua
    const rua = document.getElementById('rua');
    if (rua.value.trim() === '') {
        mostrarErro(rua, 'Por favor, preencha sua rua');
        formularioValido = false;
    } else {
        removerErro(rua);
    }

    // 10. Validação do Número
    const numero = document.getElementById('numero');
    const numValue = numero.value.trim();

    if (numValue === '') {
        mostrarErro(numero, 'Por favor, preencha o Número');
        formularioValido = false;
    } else if (!/^\d+$/.test(numValue)) { // Verifica se tem apenas números
        mostrarErro(numero, 'O Número deve conter apenas números (sem pontos, traços ou letras)');
        formularioValido = false;
    } else {
        removerErro(numero);
    }

    // 11. Validação da Cidade
    const cidade = document.getElementById('cidade');
    if (cidade.value.trim() === '') {
        mostrarErro(cidade, 'Por favor, preencha sua cidade');
        formularioValido = false;
    } else {
        removerErro(cidade);
    }

    // 12. Validação do Estado
    const estado = document.getElementById('estado');
    if (estado.value.trim() === '') {
        mostrarErro(estado, 'Por favor, preencha seu estado');
        formularioValido = false;
    } else {
        removerErro(estado);
    }

    // 13. Validação do Comprovante de Residência
    const residenciadocumento = document.getElementById('residenciadocumento');
    if (residenciadocumento.value === '') {
        mostrarErro(residenciadocumento.parentElement, 'Por favor, selecione um comprovante de residência');
        formularioValido = false;
    } else {
        removerErro(residenciadocumento.parentElement);
    }

    // Na função validarFormulario(), modifique a validação da trilha para:
    const trilhaSelecionada = document.getElementById('trilha-selecionada').value;
    const trilhasContainer = document.querySelector('.trilha-icones');

    if (trilhaSelecionada === '') {
        mostrarErro(trilhasContainer, 'Por favor, selecione uma trilha');
        formularioValido = false;
    } else {
        removerErro(trilhasContainer);
    }

    //Validaçao senha e Id

    // 14. Validação do ID e Senha
    const userIdInput = document.getElementById('userId');
    const senhaInput = document.getElementById('password');

    const userId = userIdInput.value.trim();
    const senha = senhaInput.value.trim();

    // Verificação do ID
    if (userId === '') {
        mostrarErro(userIdInput, "Por favor, preencha o campo de ID");
        formularioValido = false;
    } else if (!/^[a-zA-Z0-9]{6,}$/.test(userId)) {
        mostrarErro(userIdInput, "O ID deve ter no mínimo 6 caracteres alfanuméricos (sem símbolos)");
        formularioValido = false;
    } else {
        removerErro(userIdInput);
    }

    // Verificação da senha
    if (senha === '') {
        mostrarErro(senhaInput, "Por favor, preencha o campo de senha");
        formularioValido = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(senha)) {
        mostrarErro(senhaInput, "A senha deve ter no mínimo 6 caracteres, incluindo letras e números");
        formularioValido = false;
    } else {
        removerErro(senhaInput);
    }

    // 15. Validação dos Termos
    const termosCheckbox = document.getElementById('termos-checkbox');
    if (!termosCheckbox.checked) {
        mostrarErro(termosCheckbox.parentElement, 'Por favor, aceite os termos e condições');
        formularioValido = false;
    } else {
        removerErro(termosCheckbox.parentElement);
    }

    if (formularioValido) {
        // Monta um objeto com todos os dados válidos
        const dadosFormulario = {
            nome: document.getElementById('nome').value.trim(),
            aniversario: document.getElementById('aniversario').value,
            cpf: document.getElementById('cpf').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefone: document.getElementById('telefone').value.trim(),
            iddocumento: document.getElementById('iddocumento').value,
            cep: document.getElementById('cep').value.trim(),
            rua: document.getElementById('rua').value.trim(),
            numero: document.getElementById('numero').value.trim(),
            cidade: document.getElementById('cidade').value.trim(),
            estado: document.getElementById('estado').value.trim(),
            residenciadocumento: document.getElementById('residenciadocumento').value,
            trilha: document.getElementById('trilha-selecionada').value,
            termos: document.getElementById('termos-checkbox').checked,
        };
    
        // Salva no LocalStorage (como string)
        localStorage.setItem('dadosInscricao', JSON.stringify(dadosFormulario));
    
    }

    // Se tudo estiver válido
    if (formularioValido) {
        alert('Formulário válido! Pronto para enviar.');
        // document.getElementById('inscricao-form').submit(); // Descomente para enviar
    }
}

// Funções auxiliares
function mostrarErro(elemento, mensagem) {
    elemento.classList.add('campo-invalido');
    
    // Verifica se já existe uma mensagem de erro
    let erroElement = elemento.nextElementSibling;
    if (!erroElement || !erroElement.classList.contains('erro')) {
        erroElement = document.createElement('span');
        erroElement.className = 'erro';
        elemento.parentNode.insertBefore(erroElement, elemento.nextSibling);
    }
    
    erroElement.textContent = mensagem;
}

function removerErro(elemento) {
    elemento.classList.remove('campo-invalido');
    
    const erroElement = elemento.nextElementSibling;
    if (erroElement && erroElement.classList.contains('erro')) {
        erroElement.textContent = '';
    }
}
// Adiciona evento de clique aos botões das trilhas
document.querySelectorAll('.trilhavisual').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove a seleção de todos os botões
        document.querySelectorAll('.trilhavisual').forEach(btn => {
            btn.classList.remove('selecionado');
        });
        
        // Adiciona classe ao botão clicado
        this.classList.add('selecionado');
        
        // Atualiza o campo hidden
        const trilhaSelecionada = this.getAttribute('data-trilha');
        document.getElementById('trilha-selecionada').value = trilhaSelecionada;
        
        // Remove o erro (se existir)
        removerErro(document.querySelector('.trilha-icones'));
    });
});


