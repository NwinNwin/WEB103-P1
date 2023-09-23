document.addEventListener("DOMContentLoaded", () => {
  const renderCar = async () => {
    const requestedID = parseInt(window.location.href.split("/").pop());

    const response = await fetch("/cars");
    const data = await response.json();

    const carContent = document.getElementById("car-content");

    let car;

    car = data.find((car) => car.id === requestedID);

    if (car) {
      document.getElementById("image").src = car.image;
      document.getElementById("name").textContent = car.name;
      document.getElementById("carBrand").textContent =
        "Car Brand: " + car.carBrand;
      document.getElementById("description").textContent = car.description;
      document.title = `UnEarthed - ${car.name}`;
    } else {
      const message = document.createElement("h2");
      message.textContent = "No cars Available 😞";
      carContent.appendChild(message);
    }
  };

  renderCar();
});
