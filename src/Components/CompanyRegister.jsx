import React, { useState } from "react";
import Before from "./Before";

export const CompanyRegister = () => {
  let arr = [];

  const [CompanyRegister, setCompanyRegister] = useState([]);
  const [CRObj, setCRObj] = useState({});
  const [name, setName] = useState();
  const [commitment, setCommitment] = useState();
  const [date, setDate] = useState();

  return (
    <div className="Company-container">
      <div className="inner-container">
        <h1 className="heading">COMPANY INFORMATION</h1>

        <div className="inpt-div">
          {" "}
          <label htmlFor="fullName">COMPANY FULL NAME : </label>
          <input
            id="fullName"
            className="inpt-box"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            value={name}
            placeholder="Sami's Loans and Finance"
          />
        </div>
        <div className="inpt-div">
          {" "}
          <label htmlFor="commitment">PROFITS :</label>
          <input
            id="commitment"
            className="inpt-box"
            onChange={(e) => {
              setCommitment(e.target.value);
            }}
            type="numbers"
            value={commitment}
            placeholder="Profit Amount($)"
          />
        </div>
        <div className="inpt-div">
          <label htmlFor="dateOfJoin">DATE OF STARTED :</label>
          <input
            className="inpt-box"
            id="dateOfStarted"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            value={date}
          />
        </div>

        <button
          className="submit-btn"
          onClick={() => {
            setLpObj({
              OrganisationName: name,
              Requirement: Requirement,
            });

            setCompanyRegister([...CompanyRegister, CRObj]);
            console.log(CompanyRegister);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <Before CRArr={CompanyRegister} />
      </div>
    </div>
  );
};
