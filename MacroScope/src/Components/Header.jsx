import "./Header.css"
export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">MacroScope</h1>

      <nav className="nav">
        <span>Home</span>
        <span>BMI</span>
        <span>Footsteps</span>
        <span>Calories</span>
      </nav>
    </header>
  );
}