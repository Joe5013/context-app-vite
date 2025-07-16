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

Now install eslint...
npm install eslint --save-dev
npx eslint --init
npm install --save-dev --save-exact eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-prettier eslint-config-prettier prettier @eslint/js globals
replace the contents of eslint.config.js with...
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  eslintPluginPrettierRecommended,
];

Then run     npm run lint -- --fix      
this will fix other files
Then run   npm run lint    it should run without errors.


Now install prettier
npm install --save-dev --save-exact prettier eslint-config-prettier eslint-plugin-prettier
Create a file in root   .prettierrc.json    with this contents
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "endOfLine": "lf"
}