# Picture Gallery Web App

A modern, responsive picture gallery web application built with the latest features of Next.js 14 (App Router), styled with Tailwind CSS, and written in TypeScript. The application fetches image data from a custom Express.js backend and displays it in a beautiful, interactive grid with loading skeletons for an enhanced user experience.

![Picture Gallery Screenshot](https://i.ibb.co/L9hV1j5/gallery-screenshot.jpg)

---

## ✨ Features

- **Modern Frontend Stack**: Built with Next.js 14 and React for a fast, server-rendered experience.
- **Fully Responsive Design**: A mobile-first approach ensures the gallery looks great on all devices, from phones to desktops.
- **Dynamic Data Fetching**: Images are fetched from a custom backend API, making the gallery easy to update.
- **Optimized Images**: Leverages the `next/image` component for automatic image optimization, lazy loading, and serving modern formats.
- **Loading Skeletons**: Implements loading skeletons using React `Suspense` to provide a better UX while data is being fetched.
- **Interactive UI**: Features clean hover effects on image cards to display more information.
- **Typed Codebase**: Entirely written in TypeScript for improved developer experience and code maintainability.

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) 14
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI**: [React](https://reactjs.org/) (Server Components & Suspense)

### Backend

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: Static `gallery.json` file

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v18.x or later)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install Frontend Dependencies:**
    Navigate to your Next.js project folder and install the required packages.

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install Backend Dependencies:**
    The backend is a simple Express server. It has a few dependencies of its own.
    ```bash
    # Make sure you are in the root directory where server.js is located
    npm install express cors
    ```

### Running the Application

You need to run both the backend server and the frontend development server simultaneously in two separate terminal windows.

1.  **Start the Backend Server:**
    This server will serve the image data from `gallery.json`.

    ```bash
    node server.js
    ```

    Your API will be running at `http://localhost:4001`.

2.  **Start the Frontend Server:**
    In a new terminal window, start the Next.js development server.
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Your application will be available at `http://localhost:3000`. Open this URL in your browser to see the project.

---

## 📁 Project Structure

Here is an overview of the key files and directories in the Next.js application:

```
.
├── /app                  # Main application routes (App Router)
│   ├── /gallery          # Gallery page route
│   └── page.tsx          # Homepage route
│   └── layout.tsx        # Main layout
│   └── globals.css       # Global styles
├── /components           # Reusable React components
│   ├── /Card             # Card-related components (ImageCard, ImageCardSkeleton)
│   └── Header.tsx        # Site header
│   └── HeroSection.tsx   # Hero section for the homepage
│   └── GallerySection.tsx# The main gallery component
├── /public               # Static assets (images, fonts, etc.)
├── /types                # TypeScript type definitions
├── next.config.js        # Next.js configuration (including image hostnames)
├── server.js             # The Express.js backend server
└── gallery.json          # The static JSON data for the gallery
```

---

## 📄 API Endpoint

The backend provides one simple endpoint to fetch the gallery data.

| Method | Endpoint       | Description                     |
| :----- | :------------- | :------------------------------ |
| `GET`  | `/api/gallery` | Returns the list of all images. |

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the project, please feel free to fork the repository and create a pull request or open an issue.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
