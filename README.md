# A simple web application to view, add invoices, and monthly revenue statistics

## Please install the following

- [Node Package Manager (NPM)](https://www.npmjs.com)
- [Nodejs](https://nodejs.org/en/download/)

## Relational database: MS SQL Server

Install mssql `npm install mssql`

## To run the project, you need to install all the dependencies

Run `npm install` will automatically install all the required packages, which are stored in **node_modules** folder.

## In the config.js, change the following information to be appropriate with your setup

```
const config = {
  server: "DESKTOP-DGTIDIG",
  port: 1433,
  user: "sa",
  password: "sample",
  database: "QuanLyHoaDon",
  options: {
    trustServerCertificate: true,
  },
};
```

## Setup the database

- [How to fix login failed for user (Microsoft SQL Server)](https://itproguru.com/expert/2014/09/how-to-fix-login-failed-for-user-microsoft-sql-server-error-18456-step-by-step-add-sql-administrator-to-sql-management-studio/)
- [Why is SQL Server configuration manager missing services](https://www.mssqltips.com/sqlservertip/2492/why-is-sql-server-configuration-manager-missing-services/)

## Run the project

### Backend

Open backend folder in the terminal/command prompt and run `npm start`

### Frontend

Install **handlebars** using `npm install -g handlebars`  
Install **http-server** using `npm install -g http-server`  
Open frontend folder in the terminal/command prompt and run `http-server`
