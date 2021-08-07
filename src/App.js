
import Profile from './Profile/Profile';



function App() {

   
  const nibrasse ={ 
  name:"Nibrasse HMIDI",
   bio :"Bonjour! Je suis Nibrasse, une tunisienne vivant à Gafsa, développeur front-end passionnée de cuisine et de patisserie. Je partage avec vous ma collection de recettes sucrées et salées",
  profession:"développeur full-stack JavaScript",
 

};



 return(
   <>
   <Profile
profile={nibrasse}/>
   
   </>
   
 );
 
}

export default App;
