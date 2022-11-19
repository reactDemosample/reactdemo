import axios from 'axios';
import {React,useState,useEffect} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';


export default function StudentDetails(props) {
    console.log(props.selectList)

    const isSelected = () =>{
        for (let index = 0; index < props.selectList.length; index++) {
           return (param.id === props.selectList[index].id);
            
        }
    }
    const navigate = useNavigate();
    const param = useParams();

    const [student, setstudent] = useState(null);
    const deleteStudent = (id) =>{

        axios.delete("http://localhost:8080/api/v1/students/"+id)
            .then(response =>{
               navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const fetchStudent = () =>{
        if(param.id !== null){

        
        axios.get("http://localhost:8080/api/v1/students/" + param.id)
        .then(response =>{
            setstudent(response.data)
            console.log(student)
        }).catch(err =>{
            console.log(err)
        })
    }
    }
    useEffect(() => {
        fetchStudent()

       
    }, [param.id]);


  return (
    student!=null &&
    <div>
        
        <div className='center'>
            <h2>Student Info</h2>
            <p>Name: { student.name}</p>
            <p>ID: {student.id}</p>
            <p> GPA = {student.gpa}</p>
        </div>

        <div className='courses'>
            {

                student.courseList.map(course =>  <div className='content'>{course.id} - {course.name}</div>)
            }





        </div>
            {
                isSelected() ? <button onClick={() => {props.removeFromSelectedList(student)}}>UnSelect</button>
                :<button onClick={props.addToSelectedList(student)}>Selected</button>
            }
        <button onClick={()=>{deleteStudent(param.id)}}>Delete</button>
        
      
        <Link  to={"/students"} >Back</Link>
        
    </div>
    // <div>{student.id}</div>
  )
}
