import Box from 'components/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Box as="header" p={4} borderBottom="1px solid black">
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