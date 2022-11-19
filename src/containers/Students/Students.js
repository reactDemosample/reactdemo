import {React,useState,useEffect} from 'react'

import axios from 'axios'
import Student from '../../components/Student/Student'
import { Link } from 'react-router-dom'
import StudentDetails from '../../components/StudentDetails/StudentDetails'



export default function Students() {
const [students,setStudents] = useState([])
const [selectList,setSelectedList] = useState([])

const addToSelectedList  = (selectedPost) =>{ 

        let newList = [...selectList,selectedPost]
        setSelectedList(newList);
}
const removeFromSelectedList = (selectedPost) =>{
        let newList = selectList.filter(post => post.id !== selectedPost.id);
        selectList(newList);
}
    const fetchStudents = () =>{
        axios.get("http://localhost:8080/api/v1/students")
        .then(response =>{
            setStudents(response.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    useEffect(() => {
        fetchStudents()
        
    }, []);
    const studentList = students.map(student =>{

        return <Link to={`${student.id}`} key={student.id}>< Student student={student}/></Link>
    })
  return (
    <>
      {studentList}
 
     <StudentDetails selectList={selectList} removeFromSelectedList={removeFromSelectedList} addToSelectedList= {addToSelectedList} />
     

 
</>
  )

  
}
