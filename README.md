# 🎓 School Management API

A Node.js and MySQL based REST API system to manage school data.

---

# 🚀 Features

✅ Add new schools  
✅ Fetch schools sorted by nearest distance  
✅ MySQL database integration  
✅ RESTful APIs using Express.js  
✅ Distance calculation using geographical coordinates  

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Postman
- GitHub

---

# 📂 Folder Structure

```bash
school-management-api
│
├── config
├── controllers
├── routes
├── utils
├── .env
├── server.js
├── package.json
```

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/barsha20061001/school-management-api
```

## Move into project

```bash
cd school-management-api
```

## Install dependencies

```bash
npm install
```

## Setup environment variables

Create `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
```

## Start server

```bash
npx nodemon server.js
```

---

# 🗄 Database Setup

Run this SQL in MySQL Workbench:

```sql
CREATE DATABASE school_management;

USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# 📌 API Endpoints

## 1️⃣ Add School API

### Endpoint

```bash
POST /addSchool
```

### Sample Request

```json
{
  "name": "Delhi Public School",
  "address": "Kolkata",
  "latitude": 22.5726,
  "longitude": 88.3639
}
```

---

## 2️⃣ List Schools API

### Endpoint

```bash
GET /listSchools?latitude=22.5726&longitude=88.3639
```

---

# 📮 Postman Testing

All APIs tested successfully using Postman.

---

# 👩‍💻 Author

Barsha Mondal