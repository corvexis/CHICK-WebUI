function sendCommand(action) {
  console.log(`Button pressed: ${action}`);

  // Simulate sending a request to Arduino (will later use fetch)
  console.log(`Simulating request to: /${action}`);

  let simulatedResponse = "";

  if (action === "feed") {
    simulatedResponse = "Feeding chickens... done!";
  } else if (action === "refill") {
    simulatedResponse = "Refilling water... done!";
  } else {
    simulatedResponse = "Unknown action.";
  }

  console.log(`Simulated response: ${simulatedResponse}`);

  // Update on-screen status
  const statusElement = document.getElementById("status");
  statusElement.innerText = "Status: " + simulatedResponse;
}
