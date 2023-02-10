import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoPlayBack } from 'react-icons/io5';
import { NavItem } from 'components/AppBar/AppBar.styled';

const Main = styled.main`
  width: 100%;
  background-color: ${p => p.theme.colors.grey[0]};
  padding-bottom: ${p => p.theme.space[4]}px;
  overflow: hidden;
`;

const LinkBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => p.theme.space[7]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.medium};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  text-decoration: none;
  color: ${p => p.theme.colors.halloween[5]};
  background-color: ${p => p.theme.colors.halloween[7]};
  transition: all 300ms;
  :hover {
    color: ${p => p.theme.colors.halloween[0]};
    border-color: ${p => p.theme.colors.halloween[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

const IconBack = styled(IoPlayBack)`
  margin-right: ${p => p.theme.space[3]}px;
`;

const MovieWrapper = styled.div`
  display: flex;
  width: 58%;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.halloween[7]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[1]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    border-color: ${p => p.theme.colors.halloween[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

const Image = styled.img`
  height: 280px;
  object-fit: cover;
`;

const DataWrapper = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
`;

const Data = styled.p`
  display: flex;
  margin-top: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.halloween[5]};
`;

const Caption = styled.span`
  min-width: 100px;
`;

const OverviewText = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  padding-right: 20px;
`;

const Additional = styled.h3`
  margin-top: ${p => p.theme.space[3]}px;
`;

const NavItemBox = styled.nav`
  display: flex;
  gap: 25px;
  margin-top: ${p => p.theme.space[3]}px;
`;

const NavItemCard = styled(NavItem)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
`;

export {
  Main,
  IconBack,
  LinkBack,
  MovieWrapper,
  Image,
  DataWrapper,
  Caption,
  Data,
  OverviewText,
  Additional,
  NavItemBox,
  NavItemCard,
};
