import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ paddingRight: "20px" }}>
          <Link to="/">
            <h1>Learn React</h1>
          </Link>
          <Link to="/tik-tak-toe">Tik-Tak-Toe</Link>
        </div>
        <div style={{ flexGrow: "1", paddingTop: "30px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
