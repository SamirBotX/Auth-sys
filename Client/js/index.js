const API_URL = 'http://localhost:3001/api/v1';

// Select form element
const signUpForm = document.getElementById('signupForm');

// Handle Signup
const Signup = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error(errorData.message);
        }

        const data = await response.json();

        alert(`✅ User ${data.user.username} has been registered successfully.`);
        signUpForm.reset();
        toggleForms();

    } catch (error) {
        console.error('❌ Signup error:', error.message);
        alert(`❌ Signup failed: ${error.message}`);
    }
};

// Attach event listener to form
signUpForm.addEventListener("submit", Signup);

// Toggle Between Login and Signup Forms
const toggleForms = () => {
    document.getElementById("loginContainer").classList.toggle("hidden");
    document.getElementById("signupContainer").classList.toggle("hidden");
};
