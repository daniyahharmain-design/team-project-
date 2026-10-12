import { RiTeamFill } from "@remixicon/react";

const TotalSection = ({ bigObj, objName }) => {
  return (
    <div className="top-card">
      <div className="logo-div">
        <div className="img-div">
          <div>
            <RiTeamFill size={32} color="#1764E8" />
          </div>
        </div>
      </div>

      <div className="text-div">
        <div>
          <h4>Total {objName} </h4>
          <div className="number">{bigObj?.length || 0}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
