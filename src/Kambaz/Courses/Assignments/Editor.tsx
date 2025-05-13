
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description">Description</label><br />
      <textarea id="wd-description" rows={4}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
        The landing page should include the following
      </textarea><br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="none">None</option>
                <option value="Group 1">Group 1</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="GPA">GPA</option>
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
              </select>
              <br />
              Online Entry Options
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <div>
                <br />
                <label htmlFor="wd-assign-to">Assign To</label>
                <br />
                <input id="wd-assign-to" value="everyone" />
                <br />

                <label htmlFor="wd-due-date">Due</label> <br />
                <input id="wd-due-date" type="date" defaultValue="2025-05-13" />

                <br />
                <label htmlFor="wd-available-from">Available From</label> <br />
                <input id="wd-available-from" type="date" defaultValue="2025-05-06" />

                <br />
                <label htmlFor="wd-available-from">Until</label> <br />
                <input id="wd-available-from" type="date" defaultValue="2025-05-20" />
              </div>
            </td>
          </tr>
          <hr></hr>
        </tbody>
      </table>
      <div id="wd-editor-actions">
        <button id="wd-cancel-btn">Cancel</button>
        <button id="wd-save-btn">Save</button>
      </div>
    </div>
  );
}