// ========================================================
// 1. SEARCH BAR SUBMISSION FEEDBACK FUNCTION
// ========================================================
function handleSearchFeedback(event) {
    // Stop the form from submitting and reloading the page layout
    event.preventDefault(); 
    
    // Read user input values using standard variables
    var queryValue = document.getElementById('searchInput').value;

    // Display basic browser notification alert feedback popup
    alert("Searching database archives for keyword query: " + queryValue);
}

// ========================================================
// 2. NEWSLETTER SUBSCRIPTION FEEDBACK FUNCTION
// ========================================================
function handleSubscribeFeedback(event) {
    // Stop form submission from refreshing the browser window
    event.preventDefault(); 
    
    // Read structural fields values from target inputs
    var textName = document.getElementById('userName').value;
    var textEmail = document.getElementById('userEmail').value;

    // Display confirmation pop-up alert dialog to user
    alert("Success! Thank you, " + textName + ". A validation tracking notification has been sent to: " + textEmail);

    // Completely clear all entry strings inside the subscription box fields
    document.getElementById('subscribeForm').reset();
}

// ========================================================
// 3. ARTICLE COMMENT POST FEEDBACK FUNCTION
// ========================================================
function handleCommentFeedback(event) {
    // Stop form submission page reloading event
    event.preventDefault(); 

    var writerName = document.getElementById('commenterName').value;

    // Direct, clear message alert indicating comment processing status
    alert("Thank you, " + writerName + "! Your comment submission has been sent to our moderators for verification review approval.");

    // Clear the comment text input fields 
    document.getElementById('commentForm').reset();
}
