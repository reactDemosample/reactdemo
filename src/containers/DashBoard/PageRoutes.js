import { Route, Routes, Navigate } from "react-router";
import NewProductHook from "../../components/AddStudent/AddStudent";
import Student from "../../components/Student/Student";
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import Students from "../Students/Students";


export default function PageRoutes(props) {
    return (
    <Routes>
        <Route path="/" element={<Navigate replace to="/students" />}/>   
        <Route path="/students" element={<Students/>}>

            <Route path=":id" element={<StudentDetails/>}> </Route>
        </Route>
        <Route path="/addStudent" element={<NewProductHook/>}/>
    </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


