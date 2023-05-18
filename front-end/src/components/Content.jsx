import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Specialties from '../pages/Specialties';
import DetailSpecialty from '../pages/DetailSpecialty';

import ProfessionList from '../actions/ProfessionList';
import AddProfession from '../actions/AddProfession';
import EditProfession from '../actions/EditProfession';

import DepartmentList from '../actions/DepartmentList';
import AddDepartment from '../actions/AddDepartment';
import EditDepartment from '../actions/EditDepartment';

export default function Content() {
    return (
        <main className='flex-shrink-0'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/specialty' element={<Specialties />} />
                    <Route path='/detail/:id' element={<DetailSpecialty />} />

                    <Route path='/profession' element={<ProfessionList />} />
                    <Route path='/profession/new' element={<AddProfession />} />
                    <Route path='/profession/edit/:id' element={<EditProfession />} />

                    <Route path='/department' element={<DepartmentList />} />
                    <Route path='/department/new' element={<AddDepartment />} />
                    <Route path='/department/edit/:id' element={<EditDepartment />} />
                </Routes>
            </Router>
        </main>
    )
}