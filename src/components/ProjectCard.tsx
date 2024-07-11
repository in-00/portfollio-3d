import { Col } from "react-bootstrap";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
}

export const ProjectCard: React.FC<Project> = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title || "Project Image"} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
