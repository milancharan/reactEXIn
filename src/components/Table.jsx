import React from "react";
import { useState } from "react";

const Table = ({ studentDetails, curretUser }) => {
    let [data, setData] = useState([...studentDetails]);

    const [fullnameFlag, setFullNameFlag] = useState(false);
    console.log(studentDetails);
    const showFullName = () => {
        setFullNameFlag(!fullnameFlag);
    };
    let [noOfApplicants, setnoOfApplicants] = useState(0);
    let [state, setState] = useState("");
    const onSearch = (e) => {
        e.preventDefault();
        setState(e.target.elements.state.value);
        const num = data.filter((m) => m.State == state).length;
        setnoOfApplicants(num);
    };

    const handleDelete = (item) => {
        console.log(item);

        let datax = data.filter((e) => e != item);
        console.log(datax, "a");
        setData([...datax]);
    };
    const sortByFirstName = () => {
        let datax = [...data];
        datax = datax.sort((a, b) => {
            return a.fname > b.fname ? 1 : a.fname < b.fname ? -1 : 0;
        });
        console.log(datax, "a");
        setData(datax);
    };

    const onSearchFN = (e) => {
        e.preventDefault();
        if (e.target.elements.fullName.value == "") {
            setData([...studentDetails]);
        } else {
            console.log(e.target.elements.fullName.value);
            const datax = data.filter((m) => {
                return m.fullname.match(e.target.elements.fullName.value);
            });
            setData([...datax]);
        }
    };
    return (
        <div>
            <button onClick={showFullName}>FullName</button>
            <form action="#" onSubmit={onSearch}>
                <input type="text" name="state" />
                <button>search</button>
            </form>
            <p>
                No of Applicants form {state} are: {noOfApplicants}
            </p>
            <br />
            <br />
            <button onClick={sortByFirstName}>sort by firstName</button>
            <br />
            <br />
            <form action="#" onSubmit={onSearchFN}>
                <input type="text" name="fullName" />
                <button>search</button>
            </form>
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <th>student Details</th>
                        <th>Address</th>
                        <th>10th Details</th>
                        <th>12th details</th>
                        <th>Degree details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index) => {
                        return (
                            <tr
                                style={{
                                    backgroundColor: `${e["10thmarks"] > 80 && e["12thmarks"] > 80 ? "green" : ""
                                        }`,
                                }}
                            >
                                <td>
                                    {fullnameFlag && (
                                        <p>
                                            <strong>FullName: </strong>
                                            {e.gender == "male" ? "Mr." : "Ms."}{" "}
                                            {e.fname + " " + e.mname + " " + e.lname}
                                        </p>
                                    )}
                                    {!fullnameFlag && (
                                        <div>
                                            <p>
                                                <strong>FirstName: </strong>
                                                {e.fname}
                                            </p>
                                            <p>
                                                <strong>MiddleName: </strong>
                                                {e.mname}
                                            </p>
                                            <p>
                                                <strong>LastName: </strong>
                                                {e.lname}
                                            </p>
                                        </div>
                                    )}
                                    <p>
                                        <strong>email: </strong>
                                        {e.email}
                                    </p>
                                    <p>
                                        <strong>Gender: </strong>
                                        {e.gender}
                                    </p>
                                    <p>
                                        <strong>Skills: </strong>
                                        {e.Skills}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>building: </strong>
                                        {e.building}
                                    </p>
                                    <p>
                                        <strong>Area: </strong>
                                        {e.Area}
                                    </p>
                                    <p>
                                        <strong>City: </strong>
                                        {e.City}
                                    </p>
                                    <p>
                                        <strong>State: </strong>
                                        {e.State}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>10thmarks: </strong>
                                        {e["10thmarks"]}
                                    </p>
                                    <p>
                                        <strong>10thgrade: </strong>
                                        {e["10thgrade"]}
                                    </p>
                                    <p>
                                        <strong>10thyear: </strong>
                                        {e["10thyear"]}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>12thmarks: </strong>
                                        {e["12thmarks"]}
                                    </p>
                                    <p>
                                        <strong>12thgrade: </strong>
                                        {e["12thgrade"]}
                                    </p>
                                    <p>
                                        <strong>12thyear: </strong>
                                        {e["12thyear"]}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <strong>Dmarks: </strong>
                                        {e["Dmarks"]}
                                    </p>
                                    <p>
                                        <strong>Dgrade: </strong>
                                        {e["Dgrade"]}
                                    </p>
                                    <p>
                                        <strong>Dyear: </strong>
                                        {e["Dyear"]}
                                    </p>
                                </td>
                                {curretUser.role == "admin" && (
                                    <td>
                                        <button>edit</button>
                                        <button onClick={() => handleDelete(e)}>delete</button>
                                    </td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
