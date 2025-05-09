import { Link, Outlet } from "react-router";

export default function LandingLayout() {
  return (
    <section className="">
      <header className="">
        <nav className="">
          <ul className="">
            <li className="">
              <Link to="/">Home</Link>
            </li>

            <li className="">
              <Link to="/signup">Signup</Link>
            </li>

            <li className="">
              <Link to="/signin">Signin</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="">
        <Outlet />
      </div>
    </section>
  );
}
