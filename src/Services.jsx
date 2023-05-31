import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoginPage from './src/pages/LoginPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Form from './src/components/Form';
import Table from './src/components/Table';


const Services = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [studentDetails, setStudentDetails] = useState([]);
    const [curretUser, setCurrentUser] = useState({});
    useEffect(() => {
        axios.get("data.json").then((data) => setData(data.data));
    }, []);
    console.log(data);

    //on login function
    const onLogin = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const user = data.users.find((m) => {
            return m.userName == username;
        });
        if (user) {
            if (user.password == password) {
                console.log("Success");
                setCurrentUser(user);
                navigate("/form");
            } else {
                console.log("incorrect password");
            }
        } else {
            alert("user doesnot exist");
        }
    };

    // const onfromSubmit = (data) = ?
    //onfromSubmit
    const onfromSubmit = (data) => {
        let datax = {
            ...data,
            fullname: `${data.fname} ${data.mname} ${data.lname}`,
        };
        event.preventDefault();
        if (data.fname.length > 2) {
            setStudentDetails((prev) => [...prev, datax]);
            event.target.reset();
            navigate("/table");
        } else {
            alert("fname should be greater than 2 chars");
        }
    };
    console.log(studentDetails);

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage onLogin={onLogin} />}></Route>
                <Route
                    path="/form"
                    element={<Form onfromSubmit={onfromSubmit} />}
                ></Route>
                <Route
                    path="/table"
                    element={
                        <Table studentDetails={studentDetails} curretUser={curretUser} />
                    }
                ></Route>
            </Routes>
        </div>
    );
};

export default Services;
