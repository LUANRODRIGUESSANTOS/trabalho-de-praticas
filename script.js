document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-content');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const feedback = document.getElementById('feedback');
    const observationsTextArea = document.getElementById('observations');
    let currentTab = 0;

    function showTab(index) {
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
            tab.style.opacity = i === index ? '1' : '0';
        });
        prevButton.style.display = index === 0 ? 'none' : 'inline-block';
        nextButton.style.display = index === tabs.length - 1 ? 'none' : 'inline-block';
    }

    prevButton.addEventListener('click', () => {
        if (currentTab > 0) {
            currentTab--;
            showTab(currentTab);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentTab < tabs.length - 1) {
            currentTab++;
            showTab(currentTab);
        }
    });

    document.getElementById('saveObservations').addEventListener('click', () => {
        const observations = observationsTextArea.value;
        if (observations) {
            // Simulando o salvamento das observações
            feedback.textContent = 'Observações salvas com sucesso!';
            feedback.style.color = 'green';
            observationsTextArea.value = ''; // Limpa o campo
        } else {
            feedback.textContent = 'Por favor, escreva algo antes de salvar.';
            feedback.style.color = 'red';
        }
    });

    showTab(currentTab); // Mostra a primeira aba ao carregar
});
