
# Express TypeScript Prisma Starter

This is a starter template for building backend applications using **Express.js**, **TypeScript**, **Prisma**, and a database configuration setup. The goal of this project is to provide a ready-to-use foundation for backend development, with best practices in structure, database handling, and scalability.

## Inspiration

This project was inspired by the [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter) repository. Special thanks to the creator for providing a solid foundation that helped shape this starter template.

## Features

- 🛠️ **Express.js**: Minimal and flexible Node.js web application framework.
- 🔒 **TypeScript**: Strictly typed JavaScript to help maintain code quality and scalability.
- 📊 **Prisma**: A powerful ORM for interacting with your database, supporting migrations and type-safe queries.
- 🗄️ **Database configurations**: Easy setup and management of database connections (PostgreSQL, MySQL, etc.).
- 🛡️ **Best practices**: Code organization, error handling, and structured logging.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)


### Installation

1. Clone this repository:

     ```bash
   git clone https://github.com/Bope142/express-typescript-prisma-starter.git
   ```

2. Navigate to the project folder:

 ```bash
    cd express-typescript-prisma-starter
   ```


3. Install dependencies:

    ```bash
   npm install
   ```

4. Set up environment variables ,create `.env.development.local`
`.env.production.local` `.env.test.local`
:

   ```bash
      # PORT
    PORT=4000

    # DATABASE
    DATABASE_URL=mysql://username:password@localhost:3306/yourdatabase

    # TOKEN
    SECRET_KEY=yoursecret

    # LOG
    LOG_FORMAT=dev
    LOG_DIR=../logs

    # CORS
    ORIGIN=*
    CREDENTIALS=true

   ```

5. Update the `.env` file with your database credentials.

### Prisma Setup

1. Initialize Prisma:

     ```bash
    npx prisma init
   ```

2. Run migrations to set up the database schema:

 ```bash
   npx prisma migrate dev --name init
   ```

3. Generate Prisma Client:

 ```bash
   npx prisma generate
   ```

### Running the Application

1. Start the server in development mode:

 ```bash
    npm run dev
   ```


2. The server will start on `http://localhost:3000`.



### Useful Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker Documentation](https://docs.docker.com/get-started/)

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Norbert Yemuang 🚀
