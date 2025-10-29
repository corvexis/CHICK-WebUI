const ARDUINO_IP = "http://192.168.4.1"; // R4 IP address when connected to its AP

function sendCommand(action) {
  fetch(`${ARDUINO_IP}/${action}`)
    .then(res => res.text())
    .then(data => {
      console.log(`Response: ${data}`);
      document.getElementById("status").innerText = "Status: " + data;
    })
    .catch(err => console.error(err));
}

function updateStatus() {
  fetch(`${ARDUINO_IP}/status`)
    .then(res => res.text())
    .then(data => {
      const params = new URLSearchParams(data);
      document.getElementById("ammonia").innerText = params.get("NH3");
      document.getElementById("water").innerText = params.get("Water");
      document.getElementById("time").innerText = params.get("Time");
      document.getElementById("nextFeed").innerText = params.get("NextFeed");
    })
    .catch(err => console.error("Status fetch failed:", err));
}

setInterval(updateStatus, 3000); // Update every 3 seconds

