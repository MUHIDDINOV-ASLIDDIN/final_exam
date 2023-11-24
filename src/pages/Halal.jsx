import "./../index.css";
import halal from "./../assets/halal-cert.webp";

export default function Halal() {
  return (
    <div className="Halal-cert">
      <h1>Halol sertifikati</h1>
      <img src={halal} width="600" alt="halal-certificate" />
    </div>
  );
}
