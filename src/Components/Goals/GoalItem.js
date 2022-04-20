import React from "react";

const GoalItem = (props) => {
    //console.log();
    return (
        <div className="border border-solid border-black w-80 m-auto py-4 px-8 my-4 bg-[#8b005d] text-white cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.26)]">
            {props.Name}
        </div>
    );
}

export default GoalItem;