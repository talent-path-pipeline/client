# Client
## Overview
Stonhaven Academy is a white-label online learning platform.  We have developed this platform to teach a person how to be a DnD Dungeon Master.  The purpose of this project is to be able to develop a platform that is customizable for any learning path that a person or business needs.

---
## Release Notes
### Build Status:

![Netlify Status](https://api.netlify.com/api/v1/badges/4a6764c5-39f3-4f9d-a730-0c7fc1370a76/deploy-status)

### Current Release:
Pre-Alpha (0.0.0)

### Release Details:
#### Upgrade Steps
List out, as concretely as possible, any steps users have to take when they upgrade beyond just dumping the dependency.
Write pseudocode that highlights what code should change and how.
Call out if users are recommended to upgrade because of known problems with older releases.
Preferably, there's nothing here.

#### New Features
Describe the new feature and when/why to use it. Add some pictures! Call out any caveats/warnings? Is it a beta feature?

#### Bug Fixes
Call out any existing feature/functionality that now works as intended or expected.

#### Improvements
Improvements/enhancements to a workflow, performance, logging, error messaging, or user experience

#### Other Changes
Other miscellaneous changes that don't fit into any of the above categories. Try to leave this empty - ideally, all changes fit into the categories above

---
## Dev Notes
### Naming conventions:

- **Classes/Components**: Pascal case (e.g. `HomePage.js`)
- **Variables**: Snake case (e.g. `my_awesome_variable = 5`)
- **Constants**: Caps case (e.g. `const GLOBAL_VARIABLE = 'a global string`)
- **Folders**: Kebab case (e.g. `i-am-a-folder`)
- **Functions**: Camel Case (e.g. `doSomethingPlease(input)`)
- **Git Branches**: Kebab case with a descriptive name and prefaced by a 'c' the number of the issue it deals with (e.g. for `client issue #15: "AaC, I should be able to see a tree of paths I can take.` the branch should be named something like `c15-path-tree`).

### Style consistency

We are using VSCode for development with the ESLint and Prettier extensions for consistency. Configuration files for both extensions are included in the root of this repository. If contributing, please either install those extensions or read through them and ensure your code complies with the rules listed.

### Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
