#  School Management API

A RESTful API built using **Node.js, Express.js, and MySQL** for managing school data efficiently.  
This project allows users to:

-  Add new schools to the database
-  Retrieve schools sorted by nearest distance
-  Access APIs through live deployment
-  Store and manage data using MySQL
-  Test APIs using Postman

The distance calculation is performed dynamically using the user's latitude and longitude coordinates.

---

#  Live Deployment

##  Live Base URL

```bash
https://school-management-api-lioh.onrender.com
```

---

#  Important Links

##  GitHub Repository

```bash
https://github.com/barsha20061001/school-management-api
```

## Live API

```bash
https://school-management-api-lioh.onrender.com
```

##  Postman Collection



```bash
https://barshadgp212-2893024.postman.co/workspace/Barsha-mondal's-Workspace~e2180071-6420-4d4c-85df-5b20ab0d268e/collection/55022561-5bfbedd7-29a4-4ad3-bb70-4fd1df215925?action=share&creator=55022561
```

---

#  Tech Stack

- Node.js
- Express.js
- MySQL
- Render
- Postman
- dotenv

---

#  Project Features

 Add school details into database  
 Retrieve schools sorted by geographical proximity  
 REST API architecture  
 Input validation for all fields  
 MySQL database integration  
 Hosted live on Render  
 Tested using Postman  
 Environment-based configuration using dotenv  

---

#  Database Schema

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

#  API Endpoints

# 1. Add School API

## Endpoint

```bash
POST /addSchool
```

## Live URL

```bash
https://school-management-api-lioh.onrender.com/addSchool
```

## Request Body

```json
{
  "name": "ABC School",
  "address": "Kolkata",
  "latitude": 22.5726,
  "longitude": 88.3639
}
```

## Example Response

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

# 2. List Schools API

## Endpoint

```bash
GET /listSchools
```

## Live URL

```bash
https://school-management-api-lioh.onrender.com/listSchools?latitude=22.5726&longitude=88.3639
```

## Query Parameters

| Parameter | Type  | Required |
| ---------- | ----- | -------- |
| latitude   | float | Yes      |
| longitude  | float | Yes      |

## Example Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "ABC School",
      "address": "Kolkata",
      "latitude": 22.5726,
      "longitude": 88.3639,
      "distance": 0
    }
  ]
}
```

---

#  Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/barsha20061001/school-management-api.git
```

---

## 2. Move Into Project Folder

```bash
cd school-management-api
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create `.env` File

Create a `.env` file in the root directory and add:

```env
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
PORT=5000
```

---

## 5. Create MySQL Table

Run this SQL query:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

## 6. Start Server

```bash
node server.js
```

Server runs on:

```bash
http://localhost:5000
```

---

# API Testing

The APIs were tested successfully using:

- Postman
- Browser
- Live Render Deployment


---

#  Dependencies Used

```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.0.0",
  "express": "^4.18.2",
  "mysql2": "^3.0.0"
}
```

---

#  Future Improvements

- Authentication system
- Admin dashboard
- Pagination support
- Advanced filtering
- School update/delete APIs
- Google Maps integration

---

#  Author

## Barsha Mondal

GitHub:

```bash
https://github.com/barsha20061001
```
