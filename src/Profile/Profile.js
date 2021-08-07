import React from "react";
import propTypes from 'prop-types';
import Image from "../Image.jpg";

import "typeface-roboto";




const Profile = ({profile}) => {
    const handleName = name => alert( `Hello It's me ${name}`);
 const styleObject = {
   profile: {
      padding: 20,
      textAlign: "center",
      color: "#C6426E",
      fontSize: 35,
      fontFamily: 'roboto ', 
       textShadow: "2px 2px #d9a7c7",
      
     
    },

    bio: {
      color: "#7F00FF",
      fontSize: 20,
      fontFamily: "Geogia",
    },

    nom: {
      textAlign: "center",
      color: "purple",
      fontSize: 35,
      margin:"40px 120px 50px 50px",
      
     
    },
    image: {
    
      borderRadius:"50%",
      marginRight: 200,
    },
    container: {
    	backgroundImage: `url("https://images.pexels.com/photos/1882996/pexels-photo-1882996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")` ,
    height:514,
        padding:"6%",
		textAlign:"center",
    },
    heading:{
    background: "#fff",
		textAlign: "left",
		boxShadow: "0px 0px 30px 0px #545b62",
    
    },
    name:{
	boxShadow: "0px 0px 10px 0px ##d9a7c7",
 
    },
    bioInfo:{
    padding: "5%",
		background:"#fff",
    },
  row:{
display: "flex",
  },
  rowbio:{
width:500,
  },
  button:{
    margin:"30px 30px 5px 5px",
  width: 150,
  textAlign: "center",
  border: "5px solid hsl(0, 0%, 50%)",
  padding: 5,
  background: "linear-gradient(to right, #9796f0, #fbc7d4)",
  outline: "5px solid hsl(0, 0%, 60%)",
  boxShadow: "0 0 0 10px hsl(0, 0%, 80%), 0 0 0 15px hsl(0, 0%, 90%)",
  },
  profession:{
color:"#ffc0cb",
fontSize:25,
  },
  };
    return (

      
       <div style={styleObject.container}>
        <div style={styleObject.heading}>
          <div style={styleObject.name}>
          <h1 style={styleObject.profile}>Profile</h1>
          </div>
          
           
         
             <div  style={styleObject.bioInfo}>
             
             <div style={styleObject.row}> 
                <div>
                
             <img src={Image} style={styleObject.image} alt="img" />
              {profile.children}

               <button style={styleObject.button} onClick={() => handleName(profile.name)}>show name </button>
               </div>

                     
                    
               <div style={styleObject.rowbio}>
                <h1 style={styleObject.nom}>{profile.name}</h1>  
             <p style={styleObject.bio}>{profile.bio}</p> 
             <h4 style={styleObject.profession} >{profile.profession}</h4>
              
                  </div>
           
             </div>
             
          
            
            
        
   </div> 
        </div>
   
    

        </div>
    );
    
};
Profile.propTypes = {
    profile: propTypes.shape({ name:propTypes.string}),
    handleName: propTypes.func
   
};
Profile.defaultProps = {
  name:"Nibrasse HMIDI",
   bio :"Bonjour! Je suis Nibrasse, une tunisienne vivant à Gafsa, développeur front-end passionnée de cuisine et de patisserie. Je partage avec vous ma collection de recettes sucrées et salées",
  profession:"développeur full-stack JavaScript",
  
};
export default Profile;
