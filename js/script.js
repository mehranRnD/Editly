function addToCart() {
  const serviceSelect = document.getElementById('service-select');
  const deadlineSelect = document.getElementById('deadline-select');
  const alertBox = document.getElementById('alertBox');

  const service = serviceSelect.value;
  const deadline = deadlineSelect.value;

  if (!service || !deadline) {
    let message = '';
    if (!service) {
      message = 'Please select a service.';
    } else if (!deadline) {
      message = 'Please select a deadline.';
    }

    alertBox.classList.remove('d-none', 'success'); // Remove any previous success class
    alertBox.classList.add('error', 'show'); // Add error class
    alertBox.textContent = message;

    setTimeout(() => {
      alertBox.classList.remove('show'); // Fade out
      setTimeout(() => {
        alertBox.classList.add('d-none'); // Hide the alert
      }, 500);
    }, 5000);

    return;
  }

  // Extract service price
  const servicePriceText = serviceSelect.options[serviceSelect.selectedIndex].text.match(/\$(\d+)/);
  const servicePrice = servicePriceText ? parseInt(servicePriceText[1], 10) : 0;

  // Define deadline prices
  const deadlinePrices = {
    '1 day': 50,
    '3 days': 30,
    '5 days': 20,
    '1 week': 10,
    '2 weeks': 5,
  };

  // Get the deadline price
  const deadlinePrice = deadlinePrices[deadline] || 0;

  // Calculate total price
  const totalPrice = servicePrice + deadlinePrice;

  // Success message
  const alertMessage = `You selected ${service} service for $${servicePrice} with a ${deadline} deadline (+$${deadlinePrice}). Total price: $${totalPrice}.`;

  // Show success alert
  alertBox.classList.remove('d-none', 'error'); // Remove any previous error class
  alertBox.classList.add('success', 'show'); // Add success class
  alertBox.textContent = alertMessage;

  setTimeout(() => {
    alertBox.classList.remove('show'); // Fade out
    setTimeout(() => {
      alertBox.classList.add('d-none'); // Hide the alert
    }, 500);
  }, 7000);

  // Reset dropdowns
  serviceSelect.selectedIndex = 0;
  deadlineSelect.selectedIndex = 0;
}
