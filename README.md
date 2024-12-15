# EmployWise Front-End Assignment

This React application integrates with the Reqres API to perform basic user management functions, including authentication, listing users, editing user details, and deleting users.

## Installation and Setup
Run the project on Vercel using the given link :
https://assignment-dashboard-beta.vercel.app
Login using the given Email and Password to continue
Email- eve.holt@reqres.in
Password- cityslicka

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ankit-0803/assignment-dashboard
   cd assignment-dashboard
   ```

2. **Install dependencies**:
   Ensure that Node.js is installed on your system. Then, run:
   ```bash
   npm install
   ```

3. **Run the application**:
   Start the development server using:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Assumptions and Considerations

1. **Authentication**:
   - The application uses the Reqres API for login.
   - The login credentials are predefined:
     - Email: `eve.holt@reqres.in`
     - Password: `cityslicka`
   - A successful login stores the token in local storage.

2. **User Management**:
   - User data is fetched from the Reqres API and displayed in a paginated format.
   - The application supports editing and deleting user details using API endpoints.

3. **Error Handling**:
   - All API errors are handled gracefully with appropriate messages displayed to the user.

4. **Responsive Design**:
   - The application is optimized to work on both desktop and mobile devices.

5. **Pagination**:
   - Pagination is implemented for seamless navigation through the user list.



