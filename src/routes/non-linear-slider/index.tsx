import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/non-linear-slider/')({
  component: About,
});

function About() {
  return <div>Non-Linear Slider</div>;
}
