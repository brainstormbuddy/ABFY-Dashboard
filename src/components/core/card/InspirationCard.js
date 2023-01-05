// @mui
import PropTypes from 'prop-types';
import { Card, Box, Button, Typography } from '@mui/material';

// component
import Iconify from '../../Iconify';

InspirationCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default function InspirationCard(props) {
  const { title, description } = props;
  return (
    <Card
      sx={{
        height: '246px',
        p: 2,
        boxShadow: 0,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'row',
        color: (theme) => theme.palette.primary.darker,
        bgcolor: (theme) => theme.palette.primary.lighter,
      }}
    >
      <Box sx={{ marginRight: 2 }}>
        <Iconify icon={'eva:book-outline'} width={90} height={120} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="subtitle1" textTransform={'uppercase'}>
            <strong>{title}</strong>
          </Typography>
          <Typography
            variant="p"
            sx={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {description}
          </Typography>
        </div>

        <Button variant="contained">KNOW MORE</Button>
      </Box>
    </Card>
  );
}
