// Display the schedule details
const scheduleItems = document.querySelectorAll('li');
scheduleItems.forEach(item => {
    console.log(item.textContent); // Output each schedule item to the console
});

// Example of interactive feature - hover effect on schedule items
scheduleItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = '#17a2b8'; // Change background color on hover
        item.style.color = '#fff'; // Change text color on hover
    });

    item.addEventListener('mouseout', function() {
        item.style.backgroundColor = '#007bff'; // Revert background color on mouseout
        item.style.color = '#fff'; // Revert text color on mouseout
    });
});
