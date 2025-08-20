document.getElementById('form-treino').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const tipoTreino = document.getElementById('tipo-treino').value;
    const nivel = document.getElementById('nivel').value;
    
    const treino = gerarTreino(tipoTreino, nivel);
    exibirTreino(treino);
});

function gerarTreino(tipo, nivel) {
    const treinos = {
        hipertrofia: {
            iniciante: ['Supino Reto 4x10', 'Agachamento Livre 4x12', 'Remada Curvada 3x10'],
            intermediario: ['Supino Inclinado 4x8', 'Leg Press 4x10', 'Puxada Frontal 3x12'],
            avancado: ['Deadlift 5x5', 'Desenvolvimento Militar 4x6', 'Barra Fixa 4x8']
        },
        emagrecimento: {
            iniciante: ['Esteira 20min', 'Burpees 3x15', 'Abdominal Supra 4x20'],
            intermediario: ['HIIT 30min', 'Mountain Climbers 4x30s', 'Prancha 3x1min'],
            avancado: ['Circuit Training 45min', 'Box Jumps 4x15', 'Russian Twist 4x30']
        },
        resistencia: {
            iniciante: ['Corrida Leve 30min', 'Flexões 3x12', 'Agachamento com Peso Corporal 4x15'],
            intermediario: ['Cycling 45min', 'Push-Ups com Elevação 4x10', 'Lunges 3x12'],
            avancado: ['Corrida Intervalada 40min', 'Pull-Ups 4x8', 'Thrusters 3x10']
        }
    };

    return {
        tipo: tipo.charAt(0).toUpperCase() + tipo.slice(1),
        nivel: nivel.charAt(0).toUpperCase() + nivel.slice(1),
        exercicios: treinos[tipo][nivel]
    };
}

function exibirTreino(treino) {
    const container = document.getElementById('resultado-treino');
    container.innerHTML = `
        <div class="treino-header">
            <h3>Seu Programa de ${treino.tipo}</h3>
            <p>Nível: ${treino.nivel}</p>
        </div>
        <ul class="treino-lista">
            ${treino.exercicios.map(ex => `<li class="treino-item">${ex}</li>`).join('')}
        </ul>
    `;
}