import './Projects.css';
import { Link } from 'react-router-dom';
import { Data } from './ProjectDetails';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h1>Projects</h1>

        <div className="project-grid">
          {Data.map((project) => (
            <Link to={`/projects/${project.title}`}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

