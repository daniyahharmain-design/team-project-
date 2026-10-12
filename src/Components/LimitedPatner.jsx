const LimitedPatner = ({ lpDetails }) => {
  let { name, commitment, invidualPercentage, capitalCall, commitmentLeft } =
    lpDetails;

  return (
    <div className="lp-card ">
      <div className="name">
        <div className="name-circle"></div> <h2> {" " + name}</h2>
      </div>
      <div className="div-2">
        <div>
          <h4>{commitment} </h4>
          <p>Commitment</p>
        </div>
        <div>
          <h4>{invidualPercentage}</h4>
          <p>Ownership</p>
        </div>
      </div>
    </div>
  );
};

export default LimitedPatner;
