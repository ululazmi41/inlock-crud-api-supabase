# Inlock - Simple CRUD API with Supabase

This repository is created as a simple API endpoint that utilizes Supabase as its database to handle CRUD (Create, Read, Update, Delete) operations. The API is designed to provide a basic operations for managing data, allowing users to interact with the database through HTTP requests.

Please note that this repository only includes the backend implementation and does not include a frontend interface. You will need to use a tool like Postman to interact with the API.

## Features

- CRUD Operations.
- Supabase Integration.

## Configuring Supabase

Before using the app, make sure you have created or own a supabase account. Then, create a database on supabase and create a table with the following name:

![table name](/public/table.jpeg)

and use the following data types:

![data](/public/data.jpeg)

## Installation

- Clone the repository.
- Rename `.env.local.sample` to `.env.local`.
- Configure the `.env.local` file.
- Install dependencies with `npm install`.
- Start the server using `npm run dev`.
- Use a tool like Postman and send the HTTP requests.

## Example Endpoints

Operations will be handled through the `/api` endpoint.

- /api `GET` - Retrieve records from the database.
- /api `POST` - Creates a new record on the `posts` table.
- /api `PUT` - Updates a specific record by id.
- /api `DELETE` - Deletes a specific record by id.

## Postman Examples

Since the project does not include a frontend interface, I have made a simple Postman collections on the `Inlock.postman_collection.json` file.

- Login to postman.
- Create collections.
- Import the `Inlock.postman_collection.json` file.
- Run the requests.
