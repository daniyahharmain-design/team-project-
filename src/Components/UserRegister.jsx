import { useState } from "react";
import "./UserRegister.css";
import Before from "./Before";

const UserRegister = () => {
  let arr = [];

  const [limitedPartners, setLimitedPartners] = useState([]);
  const [lpObj, setLpObj] = useState({});
  const [name, setName] = useState();
  const [commitment, setCommitment] = useState();
  const [date, setDate] = useState();

  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="heading">LimitedPartner Information</h1>

        <div className="inpt-div" >
          {" "}
          <label htmlFor="fullName">Full Name : </label>
          <input
            id="fullName"
            className="inpt-box"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            value={name}
            placeholder="Enter your Full Name"
          />
        </div>
        <div className="inpt-div" >
          {" "}
          <label htmlFor="commitment">Commitment :</label>
          <input
            id="commitment"
            className="inpt-box"
            onChange={(e) => {
              setCommitment(e.target.value);
            }}
            type="text"
            value={commitment}
            placeholder="Commitment Amount($)"
          />
        </div>
        <div className="inpt-div" >

        
          <label htmlFor="dateOfJoin">Date of Commitment :</label>
          <input
          className="inpt-box"
            id="dateOfJoin"
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
              name: name,
              commitment: commitment,
              dateOfJoin: date,
            });


            setLimitedPartners([...limitedPartners, lpObj])
            console.log(limitedPartners)
          }}
        >
          Submit
        </button>
      </div>
<div>
     <Before lpArr = {limitedPartners} />
</div>
 
    </div>
  );
};

export default UserRegister;
