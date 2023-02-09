import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  IconBsSearch,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormWrapper,
} from './Searchbar.Styled';

const schema = yup.object({
  inputValue: yup.string().required(),
});

const initialValues = {
  inputValue: '',
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async ({ inputValue }, { setSubmitting }) => {
    await onSubmit(inputValue);
    setSubmitting(false);
    // resetForm();
  };

  return (
    <SearchFormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <SearchForm>
            <SearchFormButton type="submit" disabled={isSubmitting}>
              <IconBsSearch />
            </SearchFormButton>
            <SearchFormInput
              name="inputValue"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
          </SearchForm>
        )}
      </Formik>
    </SearchFormWrapper>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
