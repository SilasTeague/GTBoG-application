function switchTab(tabId) {
    // Get all tabs and buttons
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    // Remove active class from tabs and buttons
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    // Show the clicked tab and add 'active' class to the clicked button
    document.getElementById(tabId).classList.add('active');
    
    if (tabId == 'profile') {
      document.getElementById('profile-button').classList.add('active');
    } else {
      document.getElementById('interests-button').classList.add('active');
    }
  }
  
// Set up event listeners
document.getElementById('profile-button').addEventListener("click", function() {
    switchTab('profile');
});
document.getElementById('interests-button').addEventListener("click", function() {
    switchTab('interests');
});