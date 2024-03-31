# Weather Forecast App

This is a Weather Forecast App created using React and Typescript, Its created using [Vite](https://vitejs.dev). User can enter any City/Location and press the "Get Device Location" button, then It makes use of Openweathermap API to fetch the data and show It to user.

User can see the following weather informations

- An Image based on various climatic conditions
- Temperature of the Location (in °C)
- Temperature feels like Informations
- Location
- Minimum and Maximum Temperature
- Humidity Information

### To Run the application

To Run the application locally please follow the commands:

Npm

```
npm install
npm run dev
```

Yarn

```
yarn install
yarn run dev
```

## Project Folder and File Structure

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── public
    ├── src                     # Source files
        ├── assets                     # Folder for image assets
            ├── Clear.png
            ├── Clouds.png
            ├── Fog.png
            ├── Haze.png
            ├── Mist.png
            ├── Rain.png
            ├── Smoke.png
        ├── components                 # Folder React components
            ├── FormView.tsx               # Component for FormView
            ├── Icons.tsx                  # Component for Icons used
            ├── WeatherView.tsx            # Component for WeatherView
        ├── interface                  # Folder typings
            ├── index.ts
        ├── service                    # Folder for API services
            ├── index.ts
        ├── App.css                    # Main css file
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
    ├── .eslintrc.cjs           # Configuration for es-lint
    ├── .gitignore
    ├── .prettierrc             # Configuration of prettier for formatting code
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts           # Configuration for vite
    └── README.md
