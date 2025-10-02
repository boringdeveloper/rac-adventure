import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="content">
      <h1>React Aria Components Adventure</h1>
      <p>
        Some of the experiences I had while using React Aria Components to build
        an accessible and user-friendly application.
      </p>

      <Link to="/non-linear-slider">Non-Linear Slider</Link>
    </div>
  );
}
