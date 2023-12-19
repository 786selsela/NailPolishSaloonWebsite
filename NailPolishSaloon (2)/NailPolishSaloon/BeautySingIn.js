// External JavaScript for Form Validation



// Function to validate email format
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/; // Adjust the pattern as needed

    if (name === "") {
        alert("Please enter a name.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    alert("Thank you for Choosing us Appointment scheduled! Name: " + name + ", Email: " + email + ", Phone: " + phone + ", Date: " + date + ", Time: " + time);

    // Additional validation for date and time can be added here if needed

    // If all fields pass validation, you can submit the form or perform other actions
    /*document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('Thank you ').style.display = 'thank you ';*/
    
}
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Adjust the zoom level as needed
        center: { lat: 29.7604, lng: -95.3698 } // Houston, Texas coordinates
    });

    var geocoder = new google.maps.Geocoder();
    var address = "123 Main Street, Houston, TX"; // Replace with the address you want to display

    geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            console.error("Geocoding failed: " + status);
        }
    });
}




