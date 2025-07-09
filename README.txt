React Context & Hooks - by net ninja
Video:  https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI
Coarse files:  https://github.com/iamshaunjp/react-context-hooks

Create the project folder
bash... jaren@JoeSurf MINGW64 ~/Git/Joe5013/learn1
mkdir context-app-vite    - Make the folder
cd context-app-vite       - enter the folder
npm create vite@latest . -- --template react       - create (scaffold) a new Vite project with React
npm install         - install the required dependencies
npm run dev         - Start the Vite server    runs at http://localhost:5173/


ADD vs code extension:  Simple React Snippets   by Burke Holland
vs code settings/settings search for emmet 
       scroll down to Include Languages and add "javascript": "javascriptreact"

Install: npm install axios (thus you can swap axios for fetch in tutorial)
Install: npm install react-router-dom

**To start the project    npm run start     this opens... http://localhost:3000/
**To start json.server    npx json-server --watch data/db.json --port 8000   
                               endpoints...http://localhost:8000/blogs

If the node-modules folder is missing, reinstall this folder with    npm install

npm install eslint --save-dev
npx eslint --init