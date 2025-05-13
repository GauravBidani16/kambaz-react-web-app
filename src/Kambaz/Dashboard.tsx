import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/react.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1200/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/html.jpg" width={200} />
            <div>
              <h5> CS1200 HTML </h5>
              <p className="wd-dashboard-course-title">
                HTML Course </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1300/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/angular.png" width={200} />
            <div>
              <h5> CS1300 Angular </h5>
              <p className="wd-dashboard-course-title">
                Full Stack Web Development </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1400/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/css.png" width={200} />
            <div>
              <h5> CS1400 CSS </h5>
              <p className="wd-dashboard-course-title">
                Web Page Styling </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5400/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/python.png" width={200} />
            <div>
              <h5> CS5400 Python </h5>
              <p className="wd-dashboard-course-title">
                Python Programming </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5100/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/algo.png" width={200} />
            <div>
              <h5> CS5100 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Data Structures and Algorithms </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5300/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/cloud.png" width={200} />
            <div>
              <h5> CS5300 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Google Cloud Platform  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
}