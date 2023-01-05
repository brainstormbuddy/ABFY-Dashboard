// @mui
import { Card, Box, Button, Typography } from '@mui/material';

// component
import Iconify from '../../../components/Iconify';

export default function NeutralizationCard() {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 0,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        color: (theme) => theme.palette.primary.darker,
        bgcolor: (theme) => theme.palette.primary.lighter,
      }}
    >
      <Iconify icon={'carbon:earth'} width={80} height={80} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle1">
          <strong>
            Get some air <br />
            and neutralize your carbon. <br />
            The planet thanks you.
          </strong>
        </Typography>
        <Typography variant="p">
          Did you know that Ambify allocates funds from ABFY to carbon offset projects?
        </Typography>
        <Typography variant="subtitle2">
          <strong>
            See <br />
            the list of projects here →
            <br />
          </strong>
          <Typography variant="p">Let's help transform the air of the future.</Typography>
        </Typography>
        <Button variant="contained">MEET</Button>
      </Box>
    </Card>
  );
}
