import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";

import { Navigate, Route, Routes } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div id="wd-courses">
       <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" /></h2>
      <h2>Course 1234</h2>
          <hr />
  <div className="d-flex">
<div className="d-none d-md-block bg-white border-end pe-4">            <
  CourseNavigation />
                </div>
<div className="flex-fill ps-4">
              <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />              
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
<Route path="People" element={<PeopleTable />} />
            </Routes>
 </div>
 </div>
    </div>
);}
