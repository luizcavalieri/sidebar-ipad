React Exercise
=====================

A React Router project for showing products in online market places.

## Live App

You can find this App running on the link below.

https://luizcavalieri.github.io/sidebar-ipad/

## Installation

To run this project in a localhost, your computer needs:

- [NodeJS](https://nodejs.org/en/) 
- [Git](https://git-scm.com/)


### Manual Setup

To manually set up the project, first clone it with Git:

```bash
git clone https://github.com/luizcavalieri/sidebar-ipad.git
```

Then open the folder in your command line, and install the dependencies needed:

```bash
cd sidebar-ipad
npm install 
npm run build

```

Finally, run `npm start` to run Webpack. Your finished site will be created in a folder called `build`, viewable at this URL:

```
http://localhost:3000
```


## File Structure
#### Project root 

- public - entry folder where the index.html file is located.
    - image - images provided by the exercise this is added in the public folder as this is added dynamically to the project. 
- src - folder containing all the application.
    - assets
        - img - images used on the application.
        - style - folder containing all the styles and style settings (SCSS).
    - components - components present in the application.
        
    
#### Folders added after installation and built.
  

- build - folder will be created after executing the build. 
- node modules - npm dependencies.