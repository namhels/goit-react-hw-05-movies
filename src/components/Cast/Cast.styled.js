import styled from 'styled-components';

const CastBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.4rem;
  width: 80%;
  max-width: 1200px;
  margin-top: ${p => p.theme.space[4]}px;
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

const ItemCast = styled.li`
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.halloween[4]};
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[3]};
  border-radius: ${p => p.theme.radii.middle};
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    box-shadow: ${p => p.theme.shadows.mediumOrange};
  }
`;

const ImageCast = styled.img`
  margin-bottom: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.middle};
  object-fit: cover;
`;

export { CastBox, ItemCast, ImageCast };
