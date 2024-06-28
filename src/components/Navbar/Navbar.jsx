import "./Navbar.scss";

const links = [
  { title: "ABOUT", path: "#about" },
  { title: "FOR YOU", path: "#foryou" },
  { title: "SERVICES", path: "#services" },
  { title: "BLOG", path: "#blog" },
  { title: "VLOG", path: "#vlog" },
  { title: "CONTACT", path: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <a key={link.path} href={link.path}> {link.title}</a>
      ))}
    </nav>
  );
}