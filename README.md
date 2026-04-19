🚀 Features
Add new item
View all items
View single item
Update item
Delete item
Uses JSON file as database
Proper HTTP status codes
🛠️ Tech Stack
Node.js
Express.js
JSON (file-based database)
Thunder Client (for API testing)
📁 Project Structure
inventory-system/
│
├── server.js
├── db/
│   └── db.json
│
├── controllers/
│   └── itemController.js
│
├── routes/
│   └── itemRoutes.js
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/inventory-system.git
cd inventory-system
2. Install Dependencies
npm install
3. Run Server
node server.js

Server will run at:

http://localhost:3000
🔗 API Endpoints
Method	Endpoint	Description
GET	/items	Get all items
GET	/items/:id	Get single item
POST	/items	Add item
PUT	/items/:id	Update item
DELETE	/items/:id	Delete item
📌 Sample Request (POST)
{
  "name": "Pen",
  "quantity": 50,
  "price": 10,
  "category": "Stationery"
}
📌 Sample Response
{
  "success": true,
  "message": "Item added successfully",
  "data": {
    "id": 1713520000000,
    "name": "Pen",
    "quantity": 50,
    "price": 10,
    "category": "Stationery",
    "createdAt": "2026-04-19T10:00:00Z"
  }
}
🧪 Testing API

Use:

Thunder Client
Postman
🔢 Status Codes Used
200 → Success
201 → Created
400 → Bad Request
404 → Not Found
🧠 Project Explanation

This project implements a RESTful API for managing inventory items.
It follows a structured backend approach using:

Express routing
Controller-based logic
JSON file storage instead of a database
⚠️ Limitations
No authentication
No real database (uses JSON file)
Not scalable for large applications
🚀 Future Improvements
Add MongoDB database
Implement authentication (JWT)
Add search and filtering
Add frontend (React.js)

