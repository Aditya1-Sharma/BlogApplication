Blog App
Blog App is a frontend application that allows users to create, edit, and delete blog posts. The app provides a rich text editor using TinyMCE and uses Appwrite as a backend-as-a-service for user authentication and file storage.

Features
User Authentication: Login and logout functionality via Appwrite.
Rich Text Editing: Add and edit blog posts using the TinyMCE editor.
Photo Upload: Upload images using Appwrite's storage service.
CRUD Operations: Perform Create, Read, Update, and Delete operations on your blog posts (available only for logged-in users).
Technologies Used
Frontend: Vite, React, Redux, TinyMCE
Backend: Appwrite (for authentication and file storage)
Installation
Follow these steps to set up the project locally:

Prerequisites
Node.js and npm installed on your machine.
Appwrite backend set up for authentication and storage.
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/blog-app.git
cd blog-app
Install Dependencies:

bash
Copy code
npm install
Set up Environment Variables:

Create a .env file in the root directory with the following variables:

bash
Copy code
VITE_APPWRITE_PROJECT_ID=your-appwrite-project-id
VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
VITE_APPWRITE_STORAGE_BUCKET_ID=your-storage-bucket-id
Run the App:

bash
Copy code
npm run dev
Access the App: Open your browser and navigate to http://localhost:3000.

Usage
Login: Sign up or log in using the Appwrite authentication.
Create a Post: Use the TinyMCE editor to add a new blog post with text and images.
Upload Photos: Upload images using Appwrite's file storage feature.
Edit/Delete Posts: Modify or remove posts that you have created.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new feature branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Open a pull request.
