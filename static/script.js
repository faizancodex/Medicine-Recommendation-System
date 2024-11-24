// Ensure browser supports speech recognition
if (!('webkitSpeechRecognition' in window)) {
  alert('Speech recognition is not supported in this browser.');
} else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false; // Only recognize a single sentence at a time
  recognition.interimResults = false; // Do not return interim results
  recognition.lang = 'en-US'; // Set language

  // Start recognition when the microphone is clicked
  function startRecognition() {
    // Change icon to animate the microphone
    document.getElementById('microphone-icon').classList.add('fa-beat');

    // Start speech recognition
    recognition.start();
  }

  // When speech is recognized, populate the textarea
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    document.getElementById('output').value = transcript;
  };

  // Handle errors (e.g., user denying permission)
  recognition.onerror = function (event) {
    console.error('Speech recognition error', event);
  };

  // Stop animation when recognition ends
  recognition.onend = function () {
    // Remove animation class when recognition ends
    document.getElementById('microphone-icon').classList.remove('fa-beat');
  };
}


// Function to open the specified popup
function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'flex';
}

// Function to close the specified popup
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}