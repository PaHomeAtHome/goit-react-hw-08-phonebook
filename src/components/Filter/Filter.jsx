import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions/actions';
import { FormStyled } from 'components/LogInForm/LogInForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FormStyled>
      <FormStyled.Group>
        <FormStyled.Control
          className="mb-4"
          name="filter"
          type="text"
          placeholder="Name"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FormStyled.Group>
    </FormStyled>
  );
};
