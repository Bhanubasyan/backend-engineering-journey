# ⚔️ HTTP Server From Scratch

<div align="center">

# 🚀 Building an HTTP Server from Scratch in Node.js
⠀⠀⠀⠀⠀⠀





### A Codecrafters Backend Engineering Journey

[![Node.js](https://img.shields.io/badge/Node.js-Backend-green)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)]()
[![Codecrafters](https://img.shields.io/badge/Codecrafters-Challenge-orange)]()
[![Status](https://img.shields.io/badge/Status-In%20Progress-blue)]()

*"To understand the web, build it from scratch."*

</div>

---

# 🌌 About The Project

This repository documents my journey of building an HTTP server from scratch using Node.js and raw TCP sockets.

Instead of relying on frameworks like Express.js, this project focuses on understanding the fundamentals behind:

* TCP Networking
* HTTP Protocol
* Request Parsing
* Response Generation
* Routing
* Compression
* Persistent Connections
* Backend System Design

The project is being built while completing the Codecrafters HTTP Server Challenge.

---

# 🗺️ Challenge Progress

## ✅ Core HTTP Server

| Stage                  | Status        |
| ---------------------- | ------------- |
| Introduction           | ✅ Completed   |
| Local Setup            | ✅ Completed   |
| Bind to a Port         | ✅ Completed   |
| Respond with 200       | ✅ Completed   |
| Extract URL Path       | ✅ Completed   |
| Respond with Body      | ⏳ In Progress |
| Read Header            | ✅ Completed   |
| Concurrent Connections | ⏳ Upcoming    |
| Return a File          | ⏳ Upcoming    |
| Read Request Body      | ⏳ Upcoming    |

---

## ⚡ HTTP Compression

| Stage                        | Status     |
| ---------------------------- | ---------- |
| Compression Headers          | ⏳ Upcoming |
| Multiple Compression Schemes | ⏳ Upcoming |
| Gzip Compression             | ⏳ Upcoming |

---

## 🔄 Persistent Connections

| Stage                             | Status     |
| --------------------------------- | ---------- |
| Persistent Connections            | ⏳ Upcoming |
| Concurrent Persistent Connections | ⏳ Upcoming |
| Connection Closure                | ⏳ Upcoming |

---

# ⚔️ Features Implemented

### TCP Server

* Created server using Node.js `net` module
* Listening on custom port
* Handling incoming TCP connections

### HTTP Request Parsing

* Parse request line
* Extract HTTP method
* Extract URL path
* Parse request headers

### User-Agent Endpoint

Reads the `User-Agent` header and returns it in the response body.

### Example Request

```http
GET /user-agent HTTP/1.1
Host: localhost:4221
User-Agent: foobar/1.2.3
```

### Example Response

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 12

foobar/1.2.3
```

---

# 🧠 Concepts Learned

## Networking

* TCP Sockets
* Client-Server Architecture
* Port Binding
* Connection Lifecycle

## HTTP

* HTTP Request Structure
* HTTP Response Structure
* Headers
* Status Codes
* Content-Length
* Content-Type

## Backend Engineering

* Routing
* Request Parsing
* Header Processing
* Protocol Design

---

# 📂 Project Structure

```text
.
├── app
│   ├── main.js
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

---

# 🚀 Running The Project

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/http-server-from-scratch.git
```

## Move Into Project

```bash
cd http-server-from-scratch
```

## Install Dependencies

```bash
npm install
```

## Start Server

```bash
node app/main.js
```

Server runs on:

```text
localhost:4221
```

---

# 🧪 API Examples

## Root Endpoint

```bash
curl -i http://localhost:4221/
```

Response:

```http
HTTP/1.1 200 OK
```

---

## User-Agent Endpoint

```bash
curl -i --header "User-Agent: foobar/1.2.3" http://localhost:4221/user-agent
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 12

foobar/1.2.3
```

---

# 🌳 Skill Tree

```text
HTTP SERVER JOURNEY

├── TCP Networking
│   ├── Bind Port ✅
│   ├── Connections ✅
│   └── Concurrent Connections ⏳
│
├── HTTP Protocol
│   ├── Status Codes ✅
│   ├── URL Parsing ✅
│   ├── Headers ✅
│   └── Request Body ⏳
│
├── Routing
│   ├── Basic Routes ✅
│   ├── Dynamic Routes ⏳
│   └── File Serving ⏳
│
├── Compression
│   ├── Headers ⏳
│   ├── Multi-Scheme ⏳
│   └── Gzip ⏳
│
└── Persistence
    ├── Keep-Alive ⏳
    ├── Concurrent Keep-Alive ⏳
    └── Connection Closure ⏳
```

---

# 🎯 Goals

* Understand networking fundamentals
* Master HTTP internals
* Learn backend systems from the ground up
* Build production-level understanding of web servers
* Improve low-level Node.js skills

---

# 🛠️ Tech Stack

* Node.js
* JavaScript (ES6+)
* TCP Sockets (`net` module)
* HTTP/1.1

---

# 📈 Current Progress

```text
██████░░░░░░░░░░░░░░░░░░░░ 20%
```

Progress increases as new Codecrafters stages are completed.

---

# 🤝 Contributions

This is primarily a learning project, but suggestions and improvements are always welcome.

---

<div align="center">

## ⭐ If you found this project interesting, consider giving it a star.

### "Every endpoint implemented is one step deeper into understanding how the web really works."

🚀 Happy Coding

</div>
