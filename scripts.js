document.getElementById('account-type').addEventListener('change', function() { 
    var accountType = this.value;
    var universityIdGroup = document.getElementById('university-id-group');
    var companyNameGroup = document.getElementById('company-name-group');

    if (accountType === 'student') {
        universityIdGroup.style.display = 'flex';
        companyNameGroup.style.display = 'none';
    } else if (accountType === 'agency') {
        companyNameGroup.style.display = 'flex';
        universityIdGroup.style.display = 'none';
    } else {
        universityIdGroup.style.display = 'none';
        companyNameGroup.style.display = 'none';
    }
});

document.querySelector('.login-form').addEventListener('submit', function(event) {
    var accountType = document.getElementById('account-type').value;

    if (accountType === 'agency') {
        event.preventDefault(); // Prevent form submission

        var modal = document.getElementById("modal");
        modal.style.display = "block"; // Show the modal

        setTimeout(function() {
            window.location.href = 'https://forms.medipol.edu.tr/apply-now-to-become-an-educational-partner/';
        }, 5000); // Redirect after 5 seconds
    }
});

document.querySelector(".close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

