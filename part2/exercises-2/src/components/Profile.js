import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


const listItem = oceans.map(ocean => (<>
   <h1>{ocean.name}</h1>
   <div key = {ocean.id} className = {ocean.fishCheck === "true" ? "isAFish" : "profile"}>
      <img src = {ocean.image} alt = {ocean.name} className = "img"/>
   </div>
   <h3>Animal Facts:</h3>
   <ul>
      <li>{ocean.fact1} </li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
         <Button />
   </ul>
   </>) 
)


function Profile()
{ 
  

   return(
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;