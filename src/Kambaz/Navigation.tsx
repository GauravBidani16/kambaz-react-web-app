
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { TfiDashboard } from "react-icons/tfi";
import { TbBook2 } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsInbox } from "react-icons/bs";
import { MdLaptopMac } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function KambazNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: TfiDashboard },
    { label: "Courses", path: "/Kambaz/Dashboard", icon: TbBook2 },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: FaRegCalendarAlt },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: BsInbox },
    { label: "Labs", path: "/Labs", icon: MdLaptopMac },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="
        position-fixed top-0 bottom-0
        d-none d-md-block
        bg-black z-2 rounded-0
      "
    >
      <ListGroup.Item
        as="a"
        id="wd-neu-link"
        href="https://www.northeastern.edu/"
        target="_blank"
        rel="noopener"
        action
        className="border-0 bg-black text-center py-3"
      >
        <img src="/images/NEU.png" alt="Northeastern" width={75} />
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        action
        className={[
          "border-0 text-center py-3",
          pathname.startsWith("/Kambaz/Account")
            ? "bg-white text-danger"
            : "bg-black text-white",
        ].join(" ")}
      >
        <CgProfile
          className={[
            "fs-1 mb-1",
            pathname.startsWith("/Kambaz/Account")
              ? "text-danger"
              : "text-white",
          ].join(" ")}
        />
        <div>Account</div>
      </ListGroup.Item>

      {links.map(({ label, path, icon: Icon }) => {
        const isActive = pathname.startsWith(path);
        return (
          <ListGroup.Item
            key={path}
            as={Link}
            to={path}
            action
            className={[
              "border-0 text-center py-3",
              isActive ? "bg-white text-danger" : "bg-black text-white",
            ].join(" ")}
          >
            <Icon className={`fs-1 mb-1 ${isActive ? "text-danger" : "text-white"}`} />
            <div>{label}</div>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
