function validateForm(event) {
	event.preventDefault();

    // Reset previous error messages
    document.getElementById("nameError").innerHTML = "";

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const selectedCity = Array.from(
		document.getElementById("city").selectedOptions
    ).map((option) => option.value);
    const selectedGames = Array.from(
		document.getElementById("games").selectedOptions
    ).map((option) => option.value);
    const duration = document.getElementById("duration").value;

    // Name validation (letters only)
    if(!/^[a-zA-Z\s]+$/.test(name)){
		document.getElementById("nameError").innerHTML =
		"Name must contain only letters.";
		return;
    }

    const totalAmount = calculateTotalAmount(selectedGames, duration);

    alert(
		"Registration successful!\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nPhone: " +
        phone +
        "\nAge: " +
        age +
        "\nSelected City: " +
        selectedCity.join(", ") +
        "\nSelected Games: " +
        selectedGames.join(", ") +
        "\nDuration: " +
        duration +
        " hours\nAmount to be Paid: ₹" +
        totalAmount
    );
}

	// Function to calculate total amount based on selected games and hours
	function calculateTotalAmount(selectedGames, hours) {
		const gamePrices = {
		battlegroundsMobileIndia: 100,
		valorant: 150,
		freeFire: 50,
		codMobile: 80,
		codWarzone: 220,
		csGo: 180,
		gtaViceCity: 60,
		gtaSanAndreas: 130,
		gta3: 70,
		gta4: 110,
		gta5: 250,
		nfsMostWanted: 140,
		nfsHeat: 200,
		pokemonGO: 40,
		};

		let totalAmount = 0;

		selectedGames.forEach((game) => {
		if (gamePrices.hasOwnProperty(game)) {
			totalAmount += gamePrices[game];
		}
		});

		return totalAmount * hours;
}

	// Update amount to be paid when duration changes
	document
		.getElementById("duration")
		.addEventListener("input", function () {
		const duration = this.value;
		const selectedGames = Array.from(
			document.getElementById("games").selectedOptions
		).map((option) => option.value);
		const totalAmount = calculateTotalAmount(selectedGames, duration);
		document.getElementById("amountToBePaid").innerText =
			"₹" + totalAmount;
		});