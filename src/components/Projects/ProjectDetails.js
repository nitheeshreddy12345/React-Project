import { useParams } from 'react-router-dom';

export let Data = [
  {
    title: 'ITC-Rightshift',
    description: 'In this project I worked on components, templates, and workflows.',
    link: 'https://rightshift.in',
  },
  {
    title: 'Visa',
    description: 'In this project I worked on components, templates, and workflows.',
    link: 'https://www.visa.com',
  },
  {
    title: 'BMC',
    description: 'In this project I worked on components, templates, and workflows.',
    link: 'https://www.bmc.com',
  },
];

export function ProjectDetails() {
  const { id } = useParams();
  
  const project = Data.find(
    (item) => item.title.toLowerCase() === id.toLowerCase()
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Visit Site
      </a>
    </div>
  );
}
