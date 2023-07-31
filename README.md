# Emails Input

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b1d2d95-bdff-4136-a31a-270cc14272c3/deploy-status)](https://app.netlify.com/sites/gus-emails-input-react/deploys)

[Demo](https://emails-input-react.gustavoisensee.io/)

[Storybook](https://gus-emails-input-react-storybook.netlify.app/)

This project builds an agnostic component library independent of technology such as react, vue or angular, the only things needed to use it are HTML and Javascript.

This project was created with:
* create react app
* storybook
* webpack
* babel

Apart from the components to be created with react, its build generates a pure javascript execution, this means any javascript code can use this component library.


# What can you run?
Make sure you have `node` and `git` installed.

## Install
Clone the project and execute `yarn install` or `npm install` in the root.

## Storybook
In order to see all components and their props you can run
`yarn storybook` or `npm run storybook`
This should run storybook in dev mode and make `http://localhost:6006` available to check in your browser.

## Build
In order to use it, you just need to run:
`yarn build` or `npm run build`
This will build the whole component library into a `bundle.js` and `bundle.css` in `dist` folder which it can be used in your website/application.
An example of use would it be:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Test App</title>
    <link href="bundle.css" rel="stylesheet">
    <style>
      #root {
        display: flex;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="bundle.js"></script>
  <script>
    var root = document.getElementById('root');
    lib.emailEditor(div);
  </script>
</html>
```

## Tests
Create react app has Jest built-in, in order to execute the tests, just run:
`yarn test` or `npm run test`
