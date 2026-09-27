import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Logo({ className = 'h-10' }) {
  return (
    <Link to="/" className="flex items-center" aria-label="NASEEJ home">
      <img src={logo} alt="NASEEJ - Fashion & Apparel" className={`${className} w-auto dark:brightness-125`} />
    </Link>
  );
}

export default Logo;
