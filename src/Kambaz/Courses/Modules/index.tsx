export default function Modules() {
  return (
    <div>
      <div id="wd-modules-actions">
        <button id="wd-collapse">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
        <button id="wd-publish-all">Publish All</button>
        <button id="wd-add-module">Add Module</button>
      </div>
      
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to React JS</li>
                <li className="wd-content-item">Learn to develop and create new components</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Routing in React JS</li>
                <li className="wd-content-item">Learn to navigate to different components</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
