import "./SolarSystem.css";

const SolarSystem = () => {
  return (
    <div className="solar-system">
      <div className="sun"></div>
      
      <div className="orbit mercury-orbit">
        <div className="planet mercury"></div>
      </div>
      <div className="orbit venus-orbit">
        <div className="planet venus"></div>
      </div>
      <div className="orbit earth-orbit">
        <div className="planet earth"></div>
        <div className="orbit moon-orbit">
          <div className="moon"></div>
        </div>
      </div>
      <div className="orbit mars-orbit">
        <div className="planet mars"></div>
      </div>
      <div className="orbit jupiter-orbit">
        <div className="planet jupiter"></div>
      </div>
      <div className="orbit saturn-orbit">
        <div className="planet saturn"></div>
      </div>
      <div className="orbit uranus-orbit">
        <div className="planet uranus"></div>
      </div>
      <div className="orbit neptune-orbit">
        <div className="planet neptune"></div>
      </div>
    </div>
  );
};

export default SolarSystem;
