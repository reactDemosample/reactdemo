
import React, { useContext } from 'react';


const Student = (props) => {

    return (
        <div className="Content" >
            <h3>{props.student.name}</h3>
            <p>{props.student.id}</p>
        </div>
    );
}

export default Student;




