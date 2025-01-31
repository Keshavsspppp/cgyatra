import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Link to="/" className="back-home">Return to Home</Link>
  </div>
);

export default NotFound;