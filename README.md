# JavaScript.cm (built with AdonisJS, inspired by laravel.cm)

This repository contains the source code for the javascript.cm website ( javascript community in Cameroon ), inspired by laravel.cm. Laravel Cameroon is the largest community of PHP & Laravel developers residing in Cameroon.

## Server Requirements

The following dependencies are required to start the installation:

- Node.js >= 22.0.0
- npm or yarn
- PostgreSQL or MySQL

## Installation

1. Clone this repo:

```bash
git clone https://github.com/bleriotnoguia/javascript.cm.git
```

2. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

3. Configure your database in `.env`:

```env
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DB_NAME=javascript_cm
```

4. Run migrations:

```bash
node ace migration:run
```

5. Start the development server:

```bash
node ace serve --watch
```

## Features

- [ ] User Authentication
- [ ] GitHub Authentication
- [ ] Twitter Integration
- [ ] Article Management
- [ ] Community Features
- [ ] Admin Dashboard
- [ ] Telegram Notifications

## Available Commands

| Command                       | Description              |
| ----------------------------- | ------------------------ |
| `node ace serve --watch`      | Start development server |
| `node ace build`              | Build for production     |
| `node ace test`               | Run tests                |
| `node ace migration:run`      | Run database migrations  |
| `node ace migration:rollback` | Rollback migrations      |

## Contributing

Please read the contribution guide before creating an issue or sending a pull request.

## Security Vulnerabilities

If you discover a security vulnerability in the application, please send an email to support@laravel.cm.

## License

The MIT License. Please see the License file for more information.
