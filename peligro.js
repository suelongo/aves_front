document.addEventListener("DOMContentLoaded", () => {
    const checkEndangeredButton = document.getElementById("checkEndangered");
    const birdSelect = document.getElementById("birdSelect");
    const endangeredStatus = document.getElementById("endangeredStatus");

    checkEndangeredButton.addEventListener("click", async () => {
        const selectedBird = birdSelect.value;

        if (selectedBird) {
            try {
                const response = await fetch(`http://localhost:3000/en_peligro_extincion/${selectedBird}`);
                const data = await response.json();

                if (data.en_peligro_extincion) {
                    endangeredStatus.textContent = "El ave se encuentra en peligro de extinción.";
                } else {
                    endangeredStatus.textContent = "El ave no se encuentra en peligro de extinción.";
                }

                endangeredStatus.classList.remove("hidden");
            } catch (error) {
                console.error("Error al obtener el estado del ave:", error);
            }
        } else {
            endangeredStatus.textContent = "Por favor, selecciona un ave primero.";
            endangeredStatus.classList.remove("hidden");
        }
    });
});