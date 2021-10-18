import Particles from "react-particles-js";
import ParticleConfig from "../config/ParticleConfig";
import "./ParticleBackground.css";

export const ParticleBackground = () => {
  return (
    <div className="particles-container">
      <Particles
        class="h-screen"
        className="particles"
        params={ParticleConfig}
        height={window.outerHeight}
      />
    </div>
  );
};
