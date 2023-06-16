export function NavItem({ href, text }) {
  return (
    <a
      href={href}
      className="text-sm p-1 font-semibold font-sans hover:bg-orange-300 inline-block"
    >
      {text.toUpperCase()}
    </a>
  );
}
