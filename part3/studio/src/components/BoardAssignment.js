import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{
      "label": "Easy Foods", 
      "value": "Easy Foods",
   },
{ 
   "label": "Asian Foods", 
   "value": "Asian Foods",
}, 
{
   "label": "Healthy", 
   "value": "Healthy",
}
];
   
      const optionSelect = boards.map((board) => {
   return <option value={board.value}>{board.label}</option>
});
      const [boardName, setName] = useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      <optionSelect />
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}