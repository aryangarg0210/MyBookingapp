# MyBookingApp

A premium, full-stack, responsive booking and reservation platform designed to handle accommodation scheduling, user auth, property exploration, and checkout. This project is structured as a monorepo featuring a Next.js frontend client and a NestJS backend API.

---

## 🚀 Key Features

- **Advanced Property Exploration & Search**: Filter accommodations by location, custom price ranges, and real-time date availability.
- **Interactive Calendar Booking**: Integrated calendar widgets with smart date-range selectors for picking reservation windows.
- **Secure Authentication**: Robust role-based authorization using Passport JWT strategies (user session handling, token expiration, sign-up DTOs).
- **Payment Integration**: Stripe payment gateway integration with webhooks to handle real-time checkout updates and refunds.
- **Admin Dashboard**: Comprehensive stats cards, booking status graphs, and listing management tables.
- **Automatic Notifications**: NodeMailer integration to automatically dispatch invoice receipts and reservation notifications to users.
- **Responsive Layout**: Crafted with Tailwind CSS and modern CSS Modules to provide a flawless experience across mobile, tablet, and desktop viewports.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **State Management & Hooks**: Custom React hooks (`useAuth`, `useWindowSize`) & Context APIs
- **UI Components**: Custom layout elements, theme selectors (Dark/Light mode support), debounced inputs, calendar slots

### Backend
- **Framework**: NestJS 10
- **Language**: TypeScript
- **Database / ORM**: TypeORM / Prisma database pooling connections
- **Security**: Passport JWT strategies, bcrypt password hashing, and customized interceptors
- **API Utilities**: Global Exception Filters, custom middleware loggers, PDF stream invoicing generators

---

## 📁 Directory Structure

```
MyBookingapp/
├── frontend/                 # Next.js Client Application
│   ├── src/
│   │   ├── app/              # App Router Pages (dashboard, bookings, auth layouts)
│   │   ├── components/       # Reusable components (Navbar, BookingForm, Calendar)
│   │   ├── hooks/            # Custom client hooks
│   │   ├── lib/              # API wrapper functions
│   │   └── styles/           # CSS modules and Global styles
│   └── package.json
│
├── backend/                  # NestJS API Backend
│   ├── src/
│   │   ├── auth/             # Passport Strategies, controllers & guards
│   │   ├── booking/          # Booking controllers, modules, schemas & DTOs
│   │   ├── database/         # Data layer connection & repository modules
│   │   ├── notifications/    # Transactional mail utilities
│   │   ├── payment/          # Stripe checkout & webhooks logic
│   │   ├── user/             # User management controllers & schemas
│   │   └── main.ts
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
- **Node.js**: `v18.x` or later
- **npm** or **yarn**
- A running Database (PostgreSQL / MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/aryangarg0210/MyBookingapp.git
cd MyBookingapp
```

### 2. Configure the Backend
Navigate to the `backend/` directory, install dependencies, and setup the environment variables:
```bash
cd backend
npm install
```
Create a `.env` file matching `.env.example`:
```env
PORT=4000
DATABASE_URL=your-database-connection-url
JWT_SECRET=your-jwt-secret-key
STRIPE_API_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
MAIL_USER=your-email@domain.com
MAIL_PASS=your-email-password
```

Run the backend:
```bash
npm run start:dev
```

### 3. Configure the Frontend
Navigate to the `frontend/` directory, install dependencies, and run the client:
```bash
cd ../frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the client application in your browser.