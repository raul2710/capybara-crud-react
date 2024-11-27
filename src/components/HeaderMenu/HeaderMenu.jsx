import "./HeaderMenu.css";

function HeaderMenu() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <ul className="list-header-menu">
        <li onClick={() => scrollToSection('sectionAddCapybara')}>Add</li>
        <li onClick={() => scrollToSection('sectionShowCapybaras')}>Show</li>
        <li onClick={() => scrollToSection('sectionUpdateCapybara')}>Update</li>
        <li onClick={() => scrollToSection('sectionSearchCapybara')}>Search</li>
        <li onClick={() => scrollToSection('sectionDeleteCapybara')}>Delete</li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
