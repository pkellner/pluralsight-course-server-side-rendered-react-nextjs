# Course Code for [Building Server-side Rendered React Apps for Beginners](https://pluralsight.com/course/building-server-side-rendered-react-apps-beginners) on Pluralsight

## OTHER Recently Released Courses From Peter Kellner

| **Course**                                                                           | Release Date  |
|-------------------------------------------------------------------------------------------------------------------------------|---------------|
| **[What is React](https://pluralsight.com/courses/react-what-is/)**                                                           | January 2025  |
| **[Using Hooks in React 18](https://pluralsight.com/courses/react-18-using-hooks/)**                                          | November 2022 |
| **[What's New in React 18](https://pluralsight.com/courses/react-18-whats-new/)**                                             | May 2022      |
| **[Data and UI Patterns in React](https://github.com/pkellner/pluralsight-building-essential-ui-data-elements-in-react/)**    | December 2021 |

<hr/>

The master branch here is the latest updates to the Pluralsight course published by Peter Kellner in December of 2018 in the master branch.

This GitHub repo includes source for all modules of the course that involve code.

Before you start, you should install node on either your Windows or Mac computer (those are the two environments that are tested). Below, in
"Getting Started" are the basics to get module 6 up and running as fast as possible.

## Getting Started
1. **Install [Node 10.1.0 with NPM 5.6](https://nodejs.org)**. 
2. **Clone this repository.** - `git clone https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs` or [download the zip](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/archive/master.zip)
3. **Set the default directory to which module you want (example: cd m3-Building-Data-Driven-SSR-App/I-NextJS-GetInitialProps - `cd m3-Building-Data-Driven-SSR-App/I-NextJS-GetInitialProps`
4. **Install Node Packages with Dependencies.** - `npm install`
5. **Install [this chrome extension](https://chrome.google.com/webstore/detail/nextjs-utilities-extensio/ffcogmoganomoabikgmcmckdgojnpldo) for viewing performance data (optional).**
6. **Run the web app - `npm run dev` 

## How to Use This Repo While Watching the Course

### Special Note: Many examples require your local json server be running. If you get an error including "map" it means the data array trying to be mapped over does not exist.  Remember you need to start the json-server by typing `npm run json-server`

It is suggested that you clone or download this repository to your
local computer while you are watching the course. If you are planning on 
watching the course without coding along, this will give you 
a nice view into the source files for every clip and what the 
completed files look like at the end of that module.

If, you plan on coding along, there are parts in the course
where it will be helpful to be able to cut and paste
code from the completed modules to continue. For things like
css and other assets, you will need to copy those into
your working project to continue. Having the source downloaded and along
side your project will be very helpful.

## Table of Contents

### Learning the Fundamentals (Module 3)

#### [2 Using DOM Methods to Write to a Browser](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/02-Using-Dom-Methods-to-Write-To-Browser)
#### [3 Replacing DOM Methods with React](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/03-Replacing-DOM-Methods-With-React)
#### [4 Creating a React Functional Component](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/04-Creating-a-React-Functional-Component)
#### [5 Passing Props to a Functional Component](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/05-Passing-Props-to-a-Component)
#### [6 Converting a Functional Component to a Class Component](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/06-Converting-a-Functional-Component-to-Class-Component)
#### [8 Building an app with Next.js and JSX](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/08-Building-an-App-with-Nextjs-and-JSX)
#### [9 Adding a CSS File to Next.js](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m3-Learning-the-Fundamentals/09-Integrating-a-CSS-File-into-the-Nextjs-Project)

### Using REST Data in Server-side React Apps (Module 4)

#### [3 Coding a Server-side and Client-side Rendering React App](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m4-Using-REST-Data-in-Server-side/03-Coding-a-Server-and-Client-side-Rendering-Solution)
#### [4 Adding Async to getInitialProps](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m4-Using-REST-Data-in-Server-side/04-Taking-Nextjs-GetInitialProps-to-Async-by-promise)
#### [5 Rendering Async REST Data Client and Server](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m4-Using-REST-Data-in-Server-side/05-Rendering-Async-REST-Data-Server-and-Client-side)
#### [6 Learning Client-side Routing with Next.js and the Link Element](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m4-Using-REST-Data-in-Server-side/06-Learn-Client-side-Page-Routing-with-NextJS-Link-Element)

### Extending Server-side Rendered React App to the Real World (Module 5)

#### [2 Integrate Bootstrap 4](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m5-Extending-Your-Server-side-Rendered-App-to-Real-World/02-Integrate-Bootstrap-4)
#### [3 Refactor Bootstrap to React Components](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m5-Extending-Your-Server-side-Rendered-App-to-Real-World/03-Refactoring-Static-Bootstrap-to-React-Components)
#### [4 Add a NextJS Layout Page](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m5-Extending-Your-Server-side-Rendered-App-to-Real-World/04-Add-a-Layout-Page-with-the-Nextjs-app-file)
#### [5 Refactor to Bootstrap Cards](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m5-Extending-Your-Server-side-Rendered-App-to-Real-World/05-More-Detailed-Refactoring-Bootstrap-Cards)
#### [6 Adding a Speaker Detail Page](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m5-Extending-Your-Server-side-Rendered-App-to-Real-World/06-Adding-a-Speaker-Detail-Page-That-Works-Client-side-Only)
#### [7 Adding Server-side Rendered Pages That Include Query Strings](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m5-Extending-Your-Server-side-Rendered-App-to-Real-World/07-Server-side-Rendering-Landing-Page-with-Query-Params)

### Deploy Server-side Rendered React App to Node.js (Module 6)

#### [2 Setting Up and Using Environmental Variables](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m6-Deploying-to-Node-Server/02-Setting-up-and-Using-Environmental-Variables)
#### [3 Configuring Default Environmental Variables](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m6-Deploying-to-Node-Server/03-Configuring-Default-Environmental-Variables)
#### [5 Create a Docker Image For The Production React App](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m6-Deploying-to-Node-Server/05-Create-a-Docker-Image-and-Container)

### Ensuring the React App Performs (Module 7)

#### [2 Better Image Handling with next-images](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m7-Ensuring-Your-App-Performs/02-Better-Image-Handling-with-next-images)
#### [3 Adding Page Caching to the Node Express Server](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m7-Ensuring-Your-App-Performs/03-Adding-Page-Caching-to-the-Node-Express-Server)
#### [4 Using a CDN to Improve Page Performance](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m7-Ensuring-Your-App-Performs/04-Using-a-CDN-for-JavaScript-CSS-Images)
#### [5 Using Placeholder Animated Images While Users Wait for Data to Download](https://github.com/pkellner/pluralsight-course-server-side-rendered-react-nextjs/tree/master/m7-Ensuring-Your-App-Performs/05-Using-Placeholder-images-While-Waiting-for-Data)





## Module Details

To run each of these scripts, cd into the appropriate direct ( example: `m3-Building-Data-Driven-SSR-App/I-NextJS-GetInitialProps` ) 

then run the script name as follows:

`npm run dev`

## Experimental Directories

In several modules, you may see a directory named `_experimental`.  The project in this directory may or may not be working. It may contain 
test files or work in progress files for other students. You can ignore that directory whenever you see it.







