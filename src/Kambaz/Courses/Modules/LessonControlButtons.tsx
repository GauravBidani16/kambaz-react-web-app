
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

interface LessonControlButtonsProps {
  lessonId: string;
  editLesson: (lessonId: string) => void;
  deleteLesson: (lessonId: string) => void;
}

export default function LessonControlButtons({
  lessonId,
  editLesson,
  deleteLesson,
}: LessonControlButtonsProps) {
  return (
    <div className="d-flex align-items-center">
      <Button
        variant="link"
        className="p-0 text-dark me-3"
        onClick={(e) => {
          e.preventDefault();
          editLesson(lessonId);
        }}
        id="wd-edit-lesson-click"
      >
        <GrEdit size={18} />
      </Button>

      <Button
        variant="link"
        className="p-0 text-danger"
        onClick={(e) => {
          e.preventDefault();
          deleteLesson(lessonId);
        }}
        id="wd-delete-lesson-click"
      >
        <FaTrash size={18} />
      </Button>
    </div>
  );
}
