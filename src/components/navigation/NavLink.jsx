import { Link } from "react-router-dom";
// import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ slug, children }) => {
  // const segment = useSelectedLayoutSegment() || '';
  // const isActive = segment === slug;
  const isActive = true;
  return (
    <Link to={`/${slug}`} className={isActive ? "active" : null}>
      {children}
    </Link>
  );
};

export default NavLink;
