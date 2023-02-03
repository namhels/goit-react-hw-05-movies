import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.medium};
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.colors.halloween[5]};
  transition: all 300ms;
  &.active {
    background-color: ${p => p.theme.colors.halloween[3]};
    color: ${p => p.theme.colors.white};
  }
  &.active:hover {
    color: ${p => p.theme.colors.halloween[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.halloween[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

export { NavItem };
