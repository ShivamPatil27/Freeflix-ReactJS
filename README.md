# Project
 Freeflix front end and back end(make sure u have react installed via npx create-react-app and express as well)
 1) open both folders in terminal(one shell should cd into freeflix-final and another shell should cd into freeflix-final-         backend. 
 2) Run npm install in both shells
 3) Next install postgres(preferably via brew) in your system and go into another shell and type brew services start             postresql.Then type createdb 'freeflixdb'. Finally psql 'freeflixdb'
 4) Make 3 tables named users,login,cart.
    users: id,name,email,entries,joined
    login: id,email,hash
    cart:  id,title,price
 5) finally run npm start in both terminal shells.
 note: if you get a warning to run frontend on different port click 'y'.
