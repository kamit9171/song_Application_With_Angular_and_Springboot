
# Song Application With Angular and Springboot Deployed on Netlify and Railway
https://song-application-kamit9171.netlify.app/
https://songapplication-backend1-production.up.railway.app/api/v1/song

This repository contains the source code for a Song Application built with Angular for the frontend and Spring Boot for the backend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on songs and stores the data in a MySQL database. The frontend is designed using Angular Material and the application is deployed on Netlify for the frontend and Railway for the backend.

## Features

- Create, Read, Update, and Delete songs.
- List all songs in the database.
- User-friendly and responsive UI with Angular Material.
- Secure authentication and authorization.
- Data storage and retrieval from a MySQL database.

## Technologies Used

- Frontend:
  - Angular (version 11)
  - Angular Material (version 6)
  - Netlify for deployment

- Backend:
  - Spring Boot (version 2.6.4)
  - MySQL database for data storage
  - Railway for backend deployment

## Getting Started

### Frontend (Angular)

1. Clone the repository:

   ```bash
   git clone https://github.com/kamit9171/song_Application_With_Angular_and_Springboot.git
   cd github-song-app/frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `frontend` directory with the necessary environment variables.
   - You may need to configure the API endpoint for the backend and any other environment-specific variables.

4. Run the development server:

   ```bash
   ng serve
   ```

   The frontend application should now be running locally at `http://localhost:4200`.

### Backend (Spring Boot)

1. Clone the repository:

   ```bash
   git clone https://github.com/kamit9171/song_Application_With_Angular_and_Springboot.git
   cd github-song-app/backend
   ```

2. Install any required dependencies (if any).

3. Configure the `application.properties` file in the `src/main/resources` directory with your MySQL database credentials and other configuration settings.

4. Build and run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

   The backend application should now be running locally at `http://localhost:8080`.

## Database Setup

1. Create a MySQL database for the application.

2. Update the `application.properties` file in the backend project with your database connection details:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:8080/db
   spring.datasource.username=sa
   spring.datasource.password=
   ```




## Deployment

### Frontend (Netlify)

1. Create a Netlify account if you don't have one.

2. Connect your GitHub repository to Netlify.

3. Configure the build settings in your Netlify project to build the Angular frontend.

4. Deploy the frontend to Netlify.

### Backend (Railway)

1. Create a Railway account if you don't have one.

2. Create a new Railway project and configure it with your GitHub repository.

3. Set up the environment variables in Railway for your Spring Boot application, including database connection details.

4. Deploy the backend to Railway.

## Usage

Once both the frontend and backend are deployed, you can access the Song Application using the provided URLs.

## Contributing

If you'd like to contribute to this project, please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the `main` branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the Angular and Spring Boot communities for their excellent documentation and resources.
- Special thanks to Netlify and Railway for providing easy deployment solutions.

Please feel free to customize this README to include any additional information specific to your project. Good luck with your Song Application!