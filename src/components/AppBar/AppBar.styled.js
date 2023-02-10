import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${p => p.theme.colors.grey[5]};
  border-bottom: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[3]};
  border-radius: ${p => p.theme.radii.medium};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.colors.halloween[3]};
  transition: all 300ms;
  &.active {
    background-color: ${p => p.theme.colors.halloween[3]};
    color: ${p => p.theme.colors.white};
  }
  &.active:hover,
  &.active:focus-visible {
    color: ${p => p.theme.colors.halloween[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.halloween[0]};
    border-color: ${p => p.theme.colors.halloween[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

export { NavItem, Header };
