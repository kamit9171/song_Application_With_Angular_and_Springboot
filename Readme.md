
# Song Application With Angular and Springboot Deployed on Netlify and Railway
#https://song-application-kamit9171.netlify.app/
----------------------------------------------------------------------------------
#https://songapplication-backend1-production.up.railway.app/api/v1/song

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
Output of Application
1.Default Page
![Default home page](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/80558a9d-1c14-4e12-bcfa-21ea4a7aa213)

2. Adding Song 1
![Adding Song1](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/d2c69c20-5f49-48f2-baa1-454521973d5e)
 
3. Song Added Succesfully
![Song Added](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/0ef40ad0-bcd9-46e3-a862-1cd468b2bea9)

4. View Detail Popup
![View Details](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/26687440-7e52-41fc-9f4d-2e7dc5038d48)

5. View Song Detail
![View Song Details](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/38683e9b-6335-4175-bb7d-fc772ef63379)

6. Adding Second Song
![Adding Second Song](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/d5251aba-c904-473c-8616-4f727b580a25)

7. Song updated
![Song Updated](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/33159b47-90a0-4fc1-a2ce-3da6f41034b9)

8. Deleting the Song10
![Deleting Popup](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/39ba454a-d093-4681-be77-8524bc166fd7)

9. Song Deleted Successfullt
![Deleted successfullt](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/6ef495db-47ed-44a4-a73e-704b4781ad93)

10.  Backend Service Running on Railway
![Backend service Running](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/356a10c4-fe89-49f9-8ea8-0bb450e255a6)

11. Mysql server is Running on Railway
![MySql Databsr](https://github.com/kamit9171/song_Application_With_Angular_and_Springboot/assets/55205232/e2440f7a-96a9-4dd4-8073-087cd3c644cd)




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
