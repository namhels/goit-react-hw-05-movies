import { Form, Field } from 'formik';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const SearchFormWrapper = styled.div`
  padding-left: ${p => p.theme.space[7]}px;
  padding-right: ${p => p.theme.space[7]}px;
`;

const SearchForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: ${p => p.theme.radii.medium};
  overflow: hidden;
  box-shadow: ${p => p.theme.shadows.small};
  transition: all 300ms;
  :hover {
    border-color: ${p => p.theme.colors.blues[0]};
    box-shadow: ${p => p.theme.shadows.mediumBlue};
  }
`;

const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.halloween[5]};
  background-color: ${p => p.theme.colors.halloween[7]};
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;
`;

const IconBsSearch = styled(BsSearch)`
  width: 18px;
  height: 18px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SearchFormButton}:hover & {
    color: ${p => p.theme.colors.halloween[0]};
    transform: scale(1.3);
  }
`;

const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  color: ${p => p.theme.colors.halloween[5]};
  font: inherit;
  font-size: 22px;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 22px;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::placeholder {
    color: ${p => p.theme.colors.halloween[0]};
    letter-spacing: ${p => p.theme.space[1]}px;
  }
`;

export {
  SearchFormWrapper,
  SearchForm,
  SearchFormButton,
  IconBsSearch,
  SearchFormInput,
};
