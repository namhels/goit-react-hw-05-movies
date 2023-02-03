import Box from 'components/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gridGap={5}>
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default AppBar;