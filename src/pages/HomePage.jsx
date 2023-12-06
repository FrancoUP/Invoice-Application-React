import { LeftBar } from "../ui/LeftBar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <LeftBar></LeftBar>
      <Outlet />
    </div>
  );
}
