import React from "react";
import GoalItem from "./GoalItem";
const GoalList = (props) => {
    return (
        
        <div className="flex flex-col ">
           { props.cData.map((items) => (
                //console.log(items)
                <GoalItem key={items.id} Name = {items.Name} />
            ))}
        </div>
        
    )
    
    


} 

export default GoalList;