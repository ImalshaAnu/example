import React from 'react';

function Feedback() {
  return (
    <div>
      <h1>Feedback</h1>
      <div className="container">
      <h2>Feedback Form</h2>
      <form action="#" method="post">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="gmail">Email:</label>
        <input type="email" id="gmail" name="gmail" required />

        <label htmlFor="role">Role:</label>
        <select id="role" name="role" required>
          <option value="">Select your role</option>
          <option value="Donor">Donor</option>
          <option value="Recipient">Recipient</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Admin">Admin</option>
        </select>

        <label htmlFor="feedbackType">Feedback Type:</label>
        <select id="feedbackType" name="feedbackType" required>
          <option value="">Select feedback type</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Complaint">Complaint</option>
          <option value="Appreciation">Appreciation</option>
          <option value="Issue">Issue</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" minLength="10" required></textarea>

        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="1" max="5" required />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
}

export default Feedback;
