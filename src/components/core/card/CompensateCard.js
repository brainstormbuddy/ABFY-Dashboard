// @mui
import PropTypes from 'prop-types';
import { Card, Button, Typography } from '@mui/material';

CompensateCard.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
};

export default function CompensateCard(props) {
  const { title, amount } = props;
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 0,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        textAlign: 'center',
        color: (theme) => theme.palette.primary.darker,
        bgcolor: (theme) => theme.palette.primary.lighter,
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="body3">{amount}</Typography>
      <Button variant="contained">Compensate</Button>
    </Card>
  );
}
