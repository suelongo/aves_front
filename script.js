document.addEventListener('DOMContentLoaded', () => {
    const moreInfoButtons = document.querySelectorAll('.more-info-btn');

    moreInfoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');

            fetch('http://localhost:3000/aves/quetzal')
                .then(response => response.json())
                .then(data => {
                    card.querySelector('#tamano').textContent = data.Tamano;
                    card.querySelector('#habitat').textContent = data.Habitat;
                    card.querySelector('#poblacion').textContent = data.Poblacion;
                    card.querySelector('#alimentacion').textContent = data.Alimentacion;

                    card.classList.toggle('flip');
                })
                .catch(error => console.error('Error fetching bird data:', error));
        });
    });
});
