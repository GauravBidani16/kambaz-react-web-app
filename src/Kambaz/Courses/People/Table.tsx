
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Oscar</span>{" "}
              <span className="wd-last-name">Piastri</span>
            </td>
            <td className="wd-login-id">81</td>
            <td className="wd-section">S01</td>
            <td className="wd-role">Student</td>
            <td className="wd-last-activity">2025-05-04</td>
            <td className="wd-total-activity">05:30:00</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Lewis</span>{" "}
              <span className="wd-last-name">Hamilton</span>
            </td>
            <td className="wd-login-id">44</td>
            <td className="wd-section">S01</td>
            <td className="wd-role">Faculty</td>
            <td className="wd-last-activity">2025-09-25</td>
            <td className="wd-total-activity">12:45:10</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Lando</span>{" "}
              <span className="wd-last-name">Norris</span>
            </td>
            <td className="wd-login-id">4</td>
            <td className="wd-section">S02</td>
            <td className="wd-role">Student</td>
            <td className="wd-last-activity">2025-03-10</td>
            <td className="wd-total-activity">11:15:00</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Max</span>{" "}
              <span className="wd-last-name">Verstappen</span>
            </td>
            <td className="wd-login-id">1</td>
            <td className="wd-section">S02</td>
            <td className="wd-role">Faculty</td>
            <td className="wd-last-activity">2025-05-18</td>
            <td className="wd-total-activity">10:00:45</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Carlos</span>{" "}
              <span className="wd-last-name">Sainz</span>
            </td>
            <td className="wd-login-id">55</td>
            <td className="wd-section">S01</td>
            <td className="wd-role">Teaching Assistant</td>
            <td className="wd-last-activity">2025-04-20</td>
            <td className="wd-total-activity">13:00:00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
