import { createRootRoute, Outlet } from '@tanstack/react-router';

const RootLayout = () => (
  <div className="content">
    <Outlet />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
