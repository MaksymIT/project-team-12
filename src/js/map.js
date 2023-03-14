if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      const map = L.map('map').setView([49.599194, 34.5243576, 17], 15);

      L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([49.599194, 34.5243576, 17])
        .addTo(map)
        .bindPopup('Готельно-ресторанний комплекс "Міміно"')
        .openPopup();
    },
    function () {
      alert('Could not get the location');
    }
  );
