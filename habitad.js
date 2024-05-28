document.addEventListener("DOMContentLoaded", () => {
    const checkBirdStateButton = document.getElementById("checkBirdState");
    const birdSelect = document.getElementById("birdSelect");
    const stateSelect = document.getElementById("stateSelect");
    const birdStateStatus = document.getElementById("birdStateStatus");

    checkBirdStateButton.addEventListener("click", async () => {
        const selectedBird = birdSelect.value;
        const selectedState = stateSelect.value;

        if (selectedBird && selectedState) {
            try {
                const response = await fetch(`http://localhost:3000/ave_de_estado/${selectedBird}/${selectedState}`);
                const data = await response.json();

                if (data.ave_de_estado) {
                    birdStateStatus.textContent = `El ave se encuentra en el estado de ${selectedState}.`;
                } else {
                    birdStateStatus.textContent = `El ave no se encuentra en el estado de ${selectedState}.`;
                }

                birdStateStatus.classList.remove("hidden");
            } catch (error) {
                console.error("Error al obtener el estado del ave en el estado:", error);
            }
        } else {
            birdStateStatus.textContent = "Por favor, selecciona un ave y un estado primero.";
            birdStateStatus.classList.remove("hidden");
        }
    });
});