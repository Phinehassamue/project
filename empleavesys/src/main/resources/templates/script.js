// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the login page
    if (document.getElementById('loginForm')) {
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('error-message');
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (in real app, connect to server)
            if (username === 'admin' && password === 'password') {
                // Store login state in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        });
    }
    
    // Check if we're on the dashboard
    if (document.getElementById('logout')) {
        // Check if user is logged in
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
        }
        
        // Display username
        const username = localStorage.getItem('username');
        if (username) {
            document.getElementById('employee-name').textContent = username;
        }
        
        // Logout functionality
        document.getElementById('logout').addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }
});