import PropTypes from 'prop-types';
// @mui
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

PrimaryTextField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  InputProps: PropTypes.object,
};

export default function PrimaryTextField(props) {
  const { disabled, label, defaultValue, InputProps } = props;
  const ColorTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '&:hover': {
        borderColor: '#637381',
      },
      '& fieldset': {
        borderColor: '#637381',
        borderWidth: 2,
        borderRadius: 8,
      },
      '&:hover fieldset': { borderColor: '#637381' },
      '&.Mui-focused fieldset': {
        borderColor: '#2065D1',
      },
      '&.Mui-disabled': {
        borderRadius: 8,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#637381',
        },
      },
    },
  });

  return (
    <ColorTextField
      disabled={disabled}
      label={label}
      defaultValue={defaultValue}
      InputProps={InputProps}
      sx={{ width: '100%' }}
    />
  );
}
