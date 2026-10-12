import { useState } from "react";
import "./Before.css";
import {
  investments,
  newLimitedPartnes,
} from "../utils/mockData";
import LimitedPatner from "./LimitedPatner";
import TotalSection from "./TotalSection";
import Companies from "./Companies";
import { RiTeamFill } from "@remixicon/react";

const Before = ({ LpArr, CRArr }) => {
  const [limitedPartners, setLimitedPartners] = useState(
    PrevLimitedPartners.concat(newLimitedPartnes),
  );

// const total = numbers.reduce((sum, current) => sum + current, 0); 

  const totalAmount = LpArr.reduce((totalAmnt, elem) => {
      const commitmentValue = Number(elem.commitment);

  if (Number.isNaN(commitmentValue)) {
    return totalAmnt;
  }else{

      return totalAmnt + commitmentValue ;
    }
  }, 0);
  console.log(totalAmount);

  const investorRequirement = investments.reduce(
    (totalAmount, { Requirement }) => totalAmount + Requirement,
    0,
  );

  LpArr.forEach((obj) => {
    const num = (obj.commitment / totalAmount) * 100;
    console.log(totalAmount);
    const result = num.toFixed(3);
    obj.invidualPercentage = result + "%";

    const amountToBeTaken =
      (investorRequirement * parseFloat(obj.invidualPercentage)) / 100;
    obj.capitalCall = amountToBeTaken;
    obj.commitmentLeft = obj.commitment - obj.capitalCall;

    if (obj.commitmentLeft < 0) {
      throw new Error(`lp ${obj.name} money is not enough `);
    }
  });

  return (
    <div className="body" >
      <div className="top-section" >
 <TotalSection bigObj={LpArr} objName="Limited Partners" />
 <TotalSection bigObj={investments} objName = "Companies" />

      </div>
<div className="second-container" >


      <div className="lp-container">
        {/* {lpArr === undefined ?
         ( */}
        {!Array.isArray(LpArr) ? (
          <div></div>
        ) : (
          LpArr.map((elem, index) => {
            return <LimitedPatner lpDetails={elem} key={index} />;
          })
        )}
      </div>

      <div>
        {/* {CRArr === undefined ? ( */}
        {!Array.isArray(LpArr) ? (
          <div></div>
        ) : (
          CRArr.map((elem, index) => {
            return <Companies invmtDetails={elem} key={index} />;
          }))}
        </div>
        </div>
    </div>

  );
};

export default Before;
