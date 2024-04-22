# Code Boost

## Overview

CodeBoost brings you a variety of interesting coding challenges. Our user-friendly platform fosters a supportive community where developers at any level can improve their programming skills and grow continuously.

This README provides instructions for setting up and running the Code Boost platform on your local machine.

## Setup Instructions

To run the entire code on your device, follow the steps below:

### 1. Clone the Repository

Clone our repository to your local device using the following command:

```bash
git clone [link of repo]
```

### 2. Open Code Editor

Open your preferred code editor and navigate to the cloned repository.

### 3. Backend Setup

First, set up the backend:

1. Navigate to the `BACKEND` directory using the command:

```bash
cd BACKEND
```

2. Create a `.env` file inside the `BACKEND` folder and add the following lines:

```bash
MONGO_URI="mongodb+srv://explorerdarshanlaljani:<Password>@cluster0.6caipl2.mongodb.net/"
ACCESS_TOKEN_SECRET=sometokenkey
REFRESH_TOKEN_SECRET=sometokenkeynew
```

Make sure to replace `<Password>` with your actual MongoDB password.

3. Obtain the MongoDB URI by accessing MongoDB Atlas. Sign up or login, create a cluster, and follow the provided steps. Note that if you revisit this project after some time, you may need to restart your cluster and update your current IP.

4. Install dependencies by running:

```bash
npm install
```

5. Start the backend server:

```bash
npm start
```

### 4. Frontend Setup

Next, set up the frontend:

1. Open a new terminal window.

2. Navigate to the `FRONTEND` folder:

```bash
cd FRONTEND
```

3. Install frontend dependencies:

```bash
npm install
```

4. Once the installation is complete, run:

```bash
npm run dev
```

### 5. Access the Platform

Open your browser and go to:

```
http://localhost:5173/
```

You should now be able to see the platform in action.

Congratulations! You have successfully completed the setup.

## Features

- Community Suppart 
- Code editing in differnt languages 
- Personal Question Bank 
- User authentication

## Technologies Used

- MongoDB
- Node.js
- Express.js
- React

## Contributors

- Aniker Kumar Suthar
- Darshan Laljani

---

Feel free to reach out to us. for any questions or feedback.
