import { Card }      from "react-bootstrap";
import { Link }      from "react-router-dom";

interface Course {
  id:       string;
  title:    string;
  subtitle: string;
  color:    "success" | "primary" | "info" | "warning";
}

const courses: Course[] = [
  { id: "1234", title: "CS1234 React JS", subtitle: "Full Stack software developer.", color: "success" },
  { id: "1200", title: "CS1200 HTML", subtitle: "HTML Course", color: "success"},
  { id: "1300", title: "CS1300 Angular",subtitle: "Full Stack Web Development",     color: "warning" },
  { id: "1400", title: "CS1400 CSS",      subtitle: "Web Page Styling",   color: "warning" },
  { id: "5400", title: "CS5400 Python",       subtitle: "Python Programming",          color: "info" },
  { id: "5100", title: "CS5100 Algorithms",         subtitle: "Data Structures and Algorithms",             color: "info"    },
  { id: "5300", title: "CS5300 Cloud Computing",subtitle: "Google Cloud Platform",      color: "success" },
];

export default function KambazDashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published" className="h5 text-secondary">
        Published Courses ({courses.length})
      </h2>

      <div
        id="wd-dashboard-courses"
        className="d-flex flex-wrap mt-4"
        style={{
          columnGap: "30px",
          rowGap:    "40px",
        }}
      >
        {courses.map(({ id, title, subtitle, color }) => (
          <div
            key={id}
            style={{
              flex:  "0 0 auto",
              width: "270px",
            }}
          >
            <Card className="h-100">
              <div
                className={`bg-${color}`}
                style={{ height: "140px", borderTopLeftRadius: "0.25rem", borderTopRightRadius: "0.25rem" }}
              />
              <Card.Body>
                <Card.Title className="text-truncate">{title}</Card.Title>
                <Card.Text className="text-truncate text-muted" style={{ height: "3rem" }}>
                  {subtitle}
                </Card.Text>
                <Link to={`/Kambaz/Courses/${id}/Home`} className="stretched-link" />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}