import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Sivua ei löydy.</h2>
      <p>
        <Link to="/">Kotia</Link>
      </p>
    </main>
  );
};

export default Missing;
