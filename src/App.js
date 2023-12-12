import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import React, { useState } from "react";

import "./App.css";

function App() {
  //  React hook
  const [allStudents, setAllStudents] = useState(null);

  //  Seed data
  const students = [
    {
      id: nanoid(),
      firstName: "Adi",
      lastName: "Gorler",
      email: "agorler0@zimbio.com",
      image: "images/student1.jpg",
    },
    {
      id: nanoid(),
      firstName: "Joella",
      lastName: "Bobasch",
      email: "jbobasch1@princeton.edu",
      image: "images/student2.jpg",
    },
    {
      id: nanoid(),
      firstName: "Caesar",
      lastName: "Gossage",
      email: "cgossage2@ebay.com",
      image: "images/student3.jpg",
    },
    {
      id: nanoid(),
      firstName: "Lena",
      lastName: "Zukierman",
      email: "lzukierman3@reuters.com",
      image: "images/student4.jpg",
    },
    {
      id: nanoid(),
      firstName: "Lola",
      lastName: "Broadhead",
      email: "lbroadhead4@slate.com",
      image: "images/student5.jpg",
    },
    {
      id: nanoid(),
      firstName: "Maren",
      lastName: "Johantges",
      email: "mjohantges5@ed.gov",
      image: "images/student6.jpg",
    },
    {
      id: nanoid(),
      firstName: "Rona",
      lastName: "Sheldrake",
      email: "rsheldrake6@sciencedirect.com",
      image: "images/student7.jpg",
    },
    {
      id: nanoid(),
      firstName: "Nelle",
      lastName: "Tithecote",
      email: "ntithecote7@slashdot.org",
      image: "images/student8.jpg",
    },
    {
      id: nanoid(),
      firstName: "Vivia",
      lastName: "McNeillie",
      email: "vmcneillie8@amazonaws.com",
      image: "images/student9.jpg",
    },
    {
      id: nanoid(),
      firstName: "Anni",
      lastName: "O' Timony",
      email: "aotimony9@liveinternet.ru",
      image: "images/student10.jpg",
    },
  ];

  return (
    <div className='container'>
      <div className='row'>
        {allStudents &&
          allStudents.map((student) => (
            <div className='col-lg-2'>
              <div className='card'>
                <img
                  className='img-fluid'
                  src={student.image}
                  alt='Student Image'
                />
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>{student.id}</li>
                  <li className='list-group-item'>{student.firstName}</li>
                  <li className='list-group-item'>{student.lastName}</li>
                  <li className='list-group-item'>{student.email}</li>
                </ul>
              </div>
            </div>
          ))}

        {/*<div className='col-lg-2'>
          <div className='card'>
            <img
              className='img-fluid'
              src='images/student1.jpg'
              alt='Student Image'
            />
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>One</li>
              <li className='list-group-item'>Two</li>
              <li className='list-group-item'>Three</li>
              <li className='list-group-item'>Four</li>
            </ul>
          </div>
        </div>*/}
      </div>
      {!allStudents && (
        <button
          type='button'
          className='btn btn-lg btn-success'
          onClick={() => setAllStudents(students)}
        >
          Save Students
        </button>
      )}
    </div>
  );
}

export default App;
