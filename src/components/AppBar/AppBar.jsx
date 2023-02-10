import Box from 'components/Box';
import { Header, NavItem } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'home' },
  { href: 'movies', text: 'movies' },
];

const AppBar = () => {
  return (
    <Header>
      <Box as="nav" display="flex" gridGap={5}>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Header>
  );
};

export default AppBar;
