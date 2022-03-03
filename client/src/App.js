import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <>
    <h1>This is the Merry Meals Application</h1>
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Log in</Link>
      </nav>
    </>
  );
}

export default App;
