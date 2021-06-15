import React, { useState } from "react";
import importedData from "../students_recods.json";
import MainTable from "./MainTable";
import "../styles.css";
import InputForm from "./InputForm";
import EditForm from "./EditForm";
import Search from "./SearchBar";
import Check from "./Check";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Scores = () => {
  const [data, setData] = useState(importedData); //
  const [selectedRow, setSelectedRow] = useState({});

  function handleEdit(name) {
    let cData = [...data];
    let filterData = cData.find((i) => i.Name === name);
    console.log(filterData, "filterData");
    setSelectedRow(filterData);
  }

  return (
    <div>
      <Router>
        <NavBar>
          <div>
            Main Component
            <Switch>
              <Route
                path="/EditForm"
                component={() => (
                  <EditForm
                    data={data}
                    setData={setData}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                  />
                )}
              />

              <Route
                path="/"
                exact
                component={() => (
                  <MainTable
                    data={data}
                    setData={setData}
                    handleEdit={handleEdit}
                  />
                )}
              />
              <Route
                path="/InputForm"
                component={() => <InputForm setData={setData} data={data} />}
              />
            </Switch>
          </div>
        </NavBar>
      </Router>
    </div>
  );
};

export default Scores;

/* <MainTable data={data} setData={setData} handleEdit={handleEdit} />
<InputForm setData={setData} data={data} />
<EditForm
  data={data}
  setData={setData}
  selectedRow={selectedRow}
  setSelectedRow={setSelectedRow}
/> */

// <Search data={data} setData={setData} />
{
  /* <Check /> */
}

{
  /* <Router>
      <div>
        Main Component
        <Switch>
          <Route
            path="/EditForm"
            component={() => <EditForm
                data={data}
                setData={setData}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
              />
            }
          />

          <Route
            path="/"
            exact
            component={() => (
              <MainTable
                data={data}
                setData={setData}
                handleEdit={handleEdit}
              />
            )}
          />
          <Route
            path="/InputForm"
            component={() => <InputForm setData={setData} data={data} />}
          />
        </Switch>
      </div>
    </Router> */
}
