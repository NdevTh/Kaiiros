class CountDown {
    constructor(dateEnd) {
        if (dateEnd) {
            this.dateEnd = new Date(dateEnd).getTime();
            this.updateInterval = setInterval(this.mettreAJour.bind(this), 1000);
        }
        this.now = new Date();
    }


    mettreAJour() {
        let now = new Date().getTime();
        let intervalle = this.dateEnd - now;
        let conversion = 1000 * 60 * 60 * 24;
        let conversion2 = 1000 * 60 * 60;
        let conversion3 = 1000 * 60;

        // Calculer jours, heures, minutes et secondes
        let jours = Math.floor(intervalle / conversion);
        let heures = Math.floor((intervalle % conversion) / conversion2 );
        let minutes = Math.floor((intervalle % conversion2) / conversion3);
        let secondes = Math.floor((intervalle % conversion3) / 1000);

        document.getElementById("jours").textContent = String(jours).padStart(2, '0');
        document.getElementById("heures").textContent = String(heures).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("secondes").textContent = String(secondes).padStart(2, '0');

        // Si le compte à rebours est fini, afficher un message
        if (intervalle < 0) {
            clearInterval(this.updateInterval);
            document.getElementById("compteARebours").textContent = "Terminé!";
        }
    }
// Diplay the date today
    Today =()=>{
        let now = new Date();
        document.getElementById("year").textContent = now.getFullYear();
        document.getElementById("month").textContent = String(now.getMonth() + 1).padStart(2, '0');
        document.getElementById("day").textContent = String(now.getDate()).padStart(2, '0');
        return now.toISOString().split('T')[0];
    }
}

export default CountDown;



