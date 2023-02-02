import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.halloween[1]};
  &.active {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.halloween[1]};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.halloween[3]};
  }
`;

export { NavItem };
