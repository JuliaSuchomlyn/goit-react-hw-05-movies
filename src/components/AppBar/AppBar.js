import { Header, NavigationLink } from './AppBar.styled';
// import { css } from "@emotion/core";

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Header>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavigationLink
            key={href}
            to={href}
          >
            {text}
          </NavigationLink>
        ))}
      </nav>
    </Header>
  );
};

export default AppBar;