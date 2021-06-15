import React from "react";
import EditForm from "./EditForm";
import { Router, Link } from "react-router-dom";
import PropTypes from "prop-types";
const MainTable = ({ data, setData, handleEdit }) => {
  function handleDelete(name) {
    let cData = [...data];
    let filterData = cData.filter((i) => i.Name !== name);
    setData(filterData);
  }

  const displayTable = data.map((i) => {
    const {
      Name,
      "Email Address": Email,
      "Phone Number": Phone,
      "Netlify Project Link": Link,
      ...rest
    } = i;
    console.log(rest, "rest");

    const {
      "Homework1 ( 2 ) Git Practice": HW1,
      "Homework2( 2 ) Javascript": HW2,
      "Homework 2.2 ( 4 points) class project": HW3,
      "Homework 2.1 ( Local storage) 2 points": HW4,
      "Homework 3.1 ( CSS Selectors Exercise ) 4 points": HW5
    } = rest;

    function getTotal() {
      return Object.values(rest).reduce((a, b) => +a + +b);
      // console.log(Object.values(rest),'STEP 1')
    }
    function handleClick(e) {
      // this.router.transitionTo('index');
    }
    console.log(rest, "rest 222222");
    return (
      <tr>
        <td>{Name}</td>
        <td>
          <a href={Link}> Link</a>
        </td>
        <td>{HW1}</td>
        <td>{HW2}</td>
        <td>{HW3}</td>
        <td>{HW4}</td>
        <td>{HW5}</td>
        <td> {getTotal()}</td>
        <td>
          <button onClick={() => handleDelete(Name)}>Delete</button>
        </td>
        <td>
          <button onClick={() => handleEdit(Name)}>Edit</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Project Link </th>
          <th>HW1</th>
          <th>HW2</th>
          <th>HW3</th>
          <th>HW4</th>
          <th>HW5</th>
          <th>Total</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {displayTable}
      </table>
    </div>
  );
};
MainTable.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func
};
export default MainTable;

// Raising the State -- Common Parent  -- They need have to
//
// Parent ---> Child ---Child

//prop drilling -->2 level 3 levels
// Single source of Truth
// Container - Component which maintains state

// State management libary  --- Redux , Context , window object , localStorage

// useEffect
//
