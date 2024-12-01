async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatOutput = document.getElementById('chat-output');

    if (userInput.trim() === "") {
        return;
    }

    // Exibir a mensagem do usuário no chat
    const userMessage = document.createElement('p');
    userMessage.textContent = `Você: ${userInput}`;
    chatOutput.appendChild(userMessage);

    // Simulando a resposta do agente inteligente
    const agentResponse = document.createElement('p');
    agentResponse.textContent = 'Agente: Processando sua pergunta...';
    chatOutput.appendChild(agentResponse);

    // Fazer uma solicitação ao agente inteligente (supondo que você tenha um endpoint de API)
    try {
        const response = await fetch('URL_DO_SEU_AGENTE_INTELIGENTE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: userInput })
        });
        const data = await response.json();
        agentResponse.textContent = `Agente: ${data.answer}`;
    } catch (error) {
        agentResponse.textContent = 'Agente: Ocorreu um erro ao processar sua pergunta.';
    }

    // Limpar o campo de entrada do usuário
    document.getElementById('user-input').value = '';
}
