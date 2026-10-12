import { useState } from "react";
import './Before.css'
import {
  investments,
  newLimitedPartnes,
  PrevLimitedPartners,
} from "../utils/mockData";
import LimitedPatner from "./LimitedPatner";
import TotalSection from "./TotalSection";
import Companies from "./Companies";

const Before = ({lpArr}) => {
  const [limitedPartners, setLimitedPartners] = useState(
    PrevLimitedPartners.concat(newLimitedPartnes),
  );

  const totalAmount = limitedPartners.reduce(
    (totalAmount, { commitment }) => totalAmount + commitment,
    0,
  );

  const investorRequirement = investments.reduce(
    (totalAmount, { Requirement }) => totalAmount + Requirement,
    0,
  );

  limitedPartners.forEach((obj) => {
    const num = (obj.commitment / totalAmount) * 100;
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
 <TotalSection bigObj={limitedPartners} objName="Limited Partners" />
 <TotalSection bigObj={investments} objName = "Companies" />

      </div>

      <div className="lp-container">
     {lpArr === undefined ? <div> waiting </div> :  lpArr.map((elem, index) => {
          return <LimitedPatner lpDetails={elem} key={index} />;
        })} 
       

          </div>
        <div>
          {investments.map((elem, index) => {
            return <Companies invmtDetails={elem} key={index} />;
          })}
        </div>
    </div>
  );
};

export default Before;
