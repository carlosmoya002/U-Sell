# Free-Food-FIU

Authors:
Capstone 2: Carlos Manuel Moya Ramirez, Brian Sanchez, Jose Rodolfo Espinoza Garcia, Annie Nguyen, Sebas Peña
Product Owner: Carlos Manuel Moya Ramirez

The project aims to address food waste and food insecurity by creating a platform that connects students with campus events that offer free food. The platform will provide information about upcoming events, allowing students to reduce food waste and find ways to address food insecurity. Students can search for events based on location and type of food, and view pictures of the food offered at the event.

---

### Project Structure:

```
Free Food FIU/
┣ backend/
┃ ┣ config/
┃ ┣ ┗ db.js
┃ ┣ controllers/
┃ ┣ ┣ eventController.js
┃ ┣ ┗ userController.js
┃ ┣ middleware/
┃ ┣ ┣ authMiddleware.js
┃ ┣ ┣ errorMiddleware.js
┃ ┣ ┗ fileUploadMiddleware.js
┃ ┣ models/
┃ ┣ ┣ eventModel.js
┃ ┣ ┗ userModel.js
┃ ┣ routes/
┃ ┣ ┣ eventRoutes.js
┃ ┣ ┗ userRoutes.js
┃ ┣ utils/
┃ ┣ ┗ generateToken.js
┃ ┗ server.js
┣ frontend/
┃ ┣ logo/
┃ ┃ ┗ logo.png
┃ ┣ public/
┃ ┃ ┗ vite.svg
┃ ┣ src/
┃ ┃ ┣ assets/
┃ ┃ ┣ ┗ react.svg
┃ ┃ ┣ components/
┃ ┃ ┣ ┣ event-creation/diet-option-selectors/
┃ ┃ ┣ ┣ ┣ allergies/
┃ ┃ ┣ ┣ ┣ ┣ AllergyOptions.jsx
┃ ┃ ┣ ┣ ┣ ┗ AllergySelectComponent.jsx
┃ ┃ ┣ ┣ ┣ preferences/
┃ ┃ ┣ ┣ ┣ ┣ PreferenceOptions.jsx
┃ ┃ ┣ ┣ ┗ ┗ PreferenceSelectComponent.jsx
┃ ┃ ┣ ┣ ErrorMsg.jsx
┃ ┃ ┣ ┣ EventBox.jsx
┃ ┃ ┣ ┣ FormContainer.jsx
┃ ┃ ┣ ┣ Header.jsx
┃ ┃ ┣ ┣ Hero.jsx
┃ ┃ ┣ ┣ Loader.jsx
┃ ┃ ┣ ┗ PrivateRoute.jsx
┃ ┃ ┣ css/
┃ ┃ ┣ ┣ EventBox.css
┃ ┃ ┣ ┗ EventCreationScreen.css
┃ ┃ ┣ screens/
┃ ┃ ┣ ┣ EventCreationScreen.jsx
┃ ┃ ┣ ┣ EventsScreen.jsx
┃ ┃ ┣ ┣ HomeScreen.jsx
┃ ┃ ┣ ┣ LoginScreen.jsx
┃ ┃ ┣ ┣ ProfileScreen.jsx
┃ ┃ ┣ ┣ RegisterScreen.jsx
┃ ┃ ┣ ┗ UpdateProfileScreen.jsx
┃ ┃ ┣ slices/
┃ ┃ ┣ ┣ apiSlice.js
┃ ┃ ┣ ┣ authSlice.js
┃ ┃ ┣ ┣ eventApiSlice.js
┃ ┃ ┣ ┗ usersApiSlice.js
┃ ┃ ┣ App.jsx
┃ ┃ ┣ index.css
┃ ┃ ┣ main.jsx
┃ ┃ ┗ store.js
┃ ┣ uploads/
┃ ┃ ┗ placeholder.txt
┃ ┣ .eslintrc.cjs
┃ ┣ .gitignore
┃ ┣ index.html
┃ ┣ package-lock.json
┃ ┣ package.json
┃ ┗ vite.config.js
┣ .gitignore
┣ package-lock.json
┗ package.json
Installation Guide.txt
README.md
User Manual.txt
```

The backend folder contains all the resources to make a successful connexion with the Mongo Database. Also it has al the files to du the CRUD operation for the Events and Users collections.

The frontend folder contains all the resources to create the UI, such as the design of the pages. Also, it has the files necessary to connect the pages to the backend. Furthermore, the folder uploads is where the images for the events are stored locally.

### Installation & Running steps

To run the webapp it is necesary to install Node.js locally. The necesary installation file is at:

```
https://nodejs.org/en/download
```

After Node.js installation, we need to install the node modules for the project. There are two places where this is necessary the root folder and the frontend folder. This process is done using a terminal. We recommend using the VSCode terminal first at the root to run "npm i" and then in the frontend folder using "cd frontend" to run "npm i" again.
That would be:

```
npm i
cd frontend
npm i
cd ..
```

It is necessary to create a .env file in the root folder. The structure is:

```
NODE_ENV=development
PORT=<any number but 3000>
MONGO_URI=<your connection link to your db>
JWT_SECRET=<anything>
```

Finally, run the command "npm run dev" to start the server and the client at the root folder that is why "cd .." was used previously.
