
# WatchSeries

## Project Overview
WatchSeries is a full-stack web application built with Angular for the frontend and Node.js/Express for the backend. Follow these steps to set up and run the project locally on Windows, macOS, and Linux.

### Prerequisites
Make sure the following tools are installed globally:
- Node.js & npm
- npx
- Angular CLI

You can install these using the following commands:

#### Windows/macOS/Linux:
```bash
npm install -g npx
npm install -g npm
npm install -g @angular/cli
```

### Installation and Running

#### 1. Backend Setup
1. Open a terminal or command prompt.
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install the required backend dependencies:
    ```bash
    npm install
    ```
4. Run the backend server in development mode:
    ```bash
    npm run dev
    ```
This will start the backend server, typically running at `http://localhost:3000`.

#### 2. Frontend Setup
1. Open another terminal or command prompt.
2. Navigate to the project root directory:
    ```bash
    cd ../
    ```
3. Install the frontend dependencies:
    ```bash
    npm install
    ```
4. Serve the frontend application:
    ```bash
    ng serve -o
    ```
This will start the Angular development server and open the app in your browser at `http://localhost:4200`.
### Summary of Commands

#### Backend:
```bash
cd backend
npm install
npm run dev
```

#### Frontend:
```bash
npm install
ng serve -o
```

### Conclusion
Follow these steps, and you'll have both the backend and frontend running locally. Enjoy using the WatchSeries app!