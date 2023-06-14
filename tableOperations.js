import React from "react";
import "./App.css"

function App() {

  const LeaveTypesList = [
    {
        "LeaveTypeID": 6813,
        "ObjectName": "Casual Leave (CL)",
        "Color": "Green"
    },
    {
        "LeaveTypeID": 6809,
        "ObjectName": "Comp Off(CO)",
        "Color": "Blue"
    },
    {
        "LeaveTypeID": 6812,
        "ObjectName": "Elective (EL)",
        "Color": "Orange"
    },
    {
        "LeaveTypeID": 6811,
        "ObjectName": "Privilege Leave (PL)",
        "Color": "Yellow"
    },
    {
        "LeaveTypeID": 6814,
        "ObjectName": "Sicl Leave (SL)",
        "Color": "Purple"
    }
]

const LeaveStatusList = [
    {
        "LeaveStatusID": 1526,
        "ObjectName": "Approve"
    },
    {
        "LeaveStatusID": 1530,
        "ObjectName": "Applied"
    },
    {
        "LeaveStatusID": 1535,
        "ObjectName": "Reject"
    }
]

const userLeaveHistory = {
    "EmployeeName": "Vikas",
    "EmpCode": 101,
    "LeaveHistoryList": [
        {
            "FromDate": "2023-06-02",
            "FromDateDay": "2023-02-15 (Wed)",
            "ToDate": "2023-02-15",
            "ToDateDay": "2023-02-15 (Wed)",
            "Days": 1,
            "LeaveTypeID": 6811,
            "LeaveStatusID": 1526,
            "AppliedByName": "Nikunj Prajapati",
            "AppliedOn": "2023-02-21T18:49:31.41",
        },
        { 
            "FromDate": "2023-02-06",
            "FromDateDay": "2023-02-06 (Mon)",
            "ToDate": "2023-02-06",
            "ToDateDay": "2023-02-06 (Mon)",
            "Days": 1,
            "LeaveTypeID": 6812,
            "AppliedByName": "Nikunj Prajapati",
            "AppliedOn": "2023-02-09T18:42:47.937",
            "LeaveStatusID": 1526,
        },
        {
            "FromDate": "2023-02-03",
            "FromDateDay": "2023-02-03 (Fri)",
            "ToDate": "2023-02-03",
            "ToDateDay": "2023-02-03 (Fri)",
            "Days": 0.5,
            "LeaveTypeID": 6809,
            "AppliedByName": "Nikunj Prajapati",
            "AppliedOn": "2023-02-03T00:00:00",
            "LeaveStatusID": 1535,
        },
        {
            "FromDate": "2023-02-03",
            "FromDateDay": "2023-04-03 (Fri)",
            "ToDate": "2023-02-03",
            "ToDateDay": "2023-04-03 (Fri)",
            "Days": 0.5,
            "LeaveTypeID": 6814,
            "AppliedByName": "Nikunj Prajapati",
            "AppliedOn": "2023-02-03T00:00:00",
            "LeaveStatusID": 1530,
        }
    ]
}
  // const leaveSts = (id) => {
  //   const data = LeaveStatusList.find((e) => e.LeaveStatusID === id);
  //   return data.ObjectName;
  // };

  const leaveSts = (id) => {
    const data = LeaveStatusList.find((e) => e.LeaveStatusID === id)
    return data.ObjectName
  } 

  const leaveTyp = (id) => {
    const data = LeaveTypesList.find((e) => e.LeaveTypeID === id);
    return data;
  };

  const main = () => {
    return userLeaveHistory.LeaveHistoryList.map((item) => {
      return (
        <tr>
          <td
            style={{
              color: `${leaveSts(item.LeaveStatusID) == "Approve"? "green"
                  : leaveSts(item.LeaveStatusID) == "Applied"? "blue": "red"
              }`,
            }}
          >
            {leaveSts(item.LeaveStatusID)}
          </td>
          <td style={{ color: `${leaveTyp(item.LeaveTypeID).Color}` }}>
            {leaveTyp(item.LeaveTypeID).ObjectName}
          </td>
          <td>{item.Days}</td>
          <td>{item.FromDateDay}</td>
          <td>{item.ToDateDay}</td>
          <td>{item.AppliedOn}</td>
          <td>{item.AppliedByName}</td>
          <td>
            {new Date(item.FromDate) > new Date() ? (<button type="button">Edit</button>) : (``)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
    
      <table >
        <thead      >
          <th>Status</th>
          <th>Type</th>
          <th>Days</th>
          <th>From date</th>
          <th>To date</th>
          <th>Applied on</th>
          <th>Applied By</th>
          <th>Handle</th>
        </thead>
        <tbody>{main()}</tbody>
      </table>
    </div>
  );
}

export default App;