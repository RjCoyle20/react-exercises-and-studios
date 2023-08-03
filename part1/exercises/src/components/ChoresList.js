import classes from './ChoresList.module.css'
export default function ChoresList () {
   const chores = ["Do the dishes", "Take dogs for walk"];
   return (<div>
         <h3 className = {classes.choresHeading}> 
            To-Do List
         </h3>
         <ol>
         <li className={classes.choresText}>{chores[0]}</li>
          <li className={classes.choresText}>{chores[1]}</li>
      </ol>
      </div>
   )
}