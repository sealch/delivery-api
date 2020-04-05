# Delivery API

This is simple RESTful API emulating delivery app

### See API documentation <a href="https://documenter.getpostman.com/view/7031084/SzYbwwT6?version=latest">here</a>

## Run locally
### 1) Clone and install dependencies
```bash
git clone https://github.com/sealch/delivery-api.git
cd delivery-api
npm i && npm install -g sequelize-cli

```
### 2) Create new postgres user
Run
```bash
CREATE ROLE api_user WITH SUPERUSER LOGIN PASSWORD 'api_user';

```
from postgres shell

### 3) Initialize database and run server
```bash
npm run db:migrate && npm run db:seed
npm run build && DB_HOST="localhost" npm start

```

Now server should be running at http://localhost:3000/

Note: <b>Postgres must be running.</b>

### Build troubleshooting
If there is an error `FATAL: Peer authentication failed for user "postgres"` then see <a href="https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge">this question at Stackoverflow</a>
#
#### To tell a long story short:
Edit your `pg_hba.conf` and set METHOD to trust:
```bash
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
# IPv6 local connections:
host    all             all             ::1/128                 trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     trust
host    replication     all             127.0.0.1/32            trust
host    replication     all             ::1/128                 trust

```

## Available requests:
You can create request manually (see <a href="https://documenter.getpostman.com/view/7031084/SzYbwwT6?version=latest">docs</a>) or import requests collection and <div style="vertical-align: middle;">[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e3a1fe73004491af042f)</div>

### Model data types:
#### Restaurant:
| id | name |  address |
| ------ | ------ | ------ |
| Integer | String | String |

#### Client:
| id | name |  address |
| ------ | ------ | ------ |
| Integer | String | String |

#### Menu:
| id | name |  price |
| ------ | ------ | ------ |
| Integer | String | Integer |

#### Courier:
| id | name |  delivery_service |
| ------ | ------ | ------ |
| Integer | String | String |

#### Order:
| id | restaurant_id | client_id | courier_id | menu_id | order_time | delivery_time |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Integer | Integer | Integer | Integer | Integer | Time | Time |

## Environment variables
| variable | default |  required |
| ------ | ------ | ------ |
| DB_PASSWORD | postgres | no |
| DB_USER | postgres | no |
| DB_HOST | postgres | yes |
| DB_PORT | 5432 | no |
| DB_DATABASE | postgres | no |
| DEV_DB_URL | postgres://postgres:postgres@localhost:5432/postgres | no |
| PROD_DB_URL | postgres://postgres:postgres@postgres:5432/postgres | no |

#### To edit environment variables do:

```bash
touch .env

```
and create variable from the list above.

## Code structure:
```
delivery-api
    │  
    ├── config
    │   └── config.js     <-- Migration and seeds config
    │ 
    ├── migrations        <-- Migration used to initialize DB tables
    │     └── ...
    │ 
    ├── seeders           <-- Seeds used to fill DB with fixtures
    │     └── ...
    │ 
    ├── src               <-- Folder with source files
    │   │ 
    │   ├── controllers   <-- Controllers describe app's logic and functions
    │   │       └── ...
    │   ├── database      
    │   │       └── db.js <-- Initializes database connection
    │   ├── models        <-- Describes models and tables
    │   │       └── ...
    │   ├── routes        <-- Express routers
    │   │      └── ...
    │   ├── app.js        <-- Root router
    │   │ 
    │   └── index.js      <-- Initializes web server
    │
    │
    │
   ...
```


