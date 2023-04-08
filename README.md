# ReactJS-Exam-Repo

GermanMechanics.de


![Screenshot_5](https://user-images.githubusercontent.com/103639205/230742537-d80541a8-5359-4429-b71c-fef6025b4461.png)


Single Page App made with React.js as FrontEnd , Node.js Express.js for BackEnd and data is stored in a local DB through MongoDB. 

The app is targeting freelance mechanics with the option to offer their services.

The app includes the option to create , edit , delete , like and see your own (as a mechanic) offers, visible in your profile section.
Also for the non-registered users , you can see the latest offers, but it would be much better ,if you do register. Only then you will be able to see all offers.

Obviously each mechanic has the option to register/login and of course create/post new offers.Also one, will be able to like another mechanics post.

Validations are added on all create/register/login pages.

Each logged-in mechanic has his own unique token and of course a hashedPassword made with bcrypt.

In order to run the app : 

App Address : http://localhost:3000/
Go to directory /exam-app and open the folder in Integrated Terminal:
```
$ npm install

$ npm start 

```
Server address: http://localhost:3030/
For the BackEnd(server) side , go to directory server and open it in Integrated Terminal:
```
$ npm install

$ npm start 

```
!!! If nodemon error comes up in the console , please type : npm i nodemon !!!

GermanMechanics.de made by Stefan Kantardzhiev 2023 Softuni Exam Project
