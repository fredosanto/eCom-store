import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>How to contact us</p>
      <ul>
        <li>
          <Link to="/">Go Home</Link>
        </li>
      </ul>
    </>
  );
}
