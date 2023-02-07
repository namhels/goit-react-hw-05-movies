import Box from 'components/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'home' },
  { href: 'movies', text: 'movies' },
];

const AppBar = () => {
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      width="100%"
      bg="grey.5">
      <Box as="nav" display="flex" gridGap={5}>
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