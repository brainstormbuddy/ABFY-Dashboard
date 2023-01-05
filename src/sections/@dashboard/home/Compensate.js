// @mui
import { Grid, Stack, Typography } from '@mui/material';

// core components
import { CompensateCard } from '../../../components/core/card';

export default function Compensate() {
  return (
    <Stack direction="column" spacing={2} flexWrap="wrap" justifyContent="flex-start">
      <Typography variant="h6" textTransform="uppercase">
        compensate directly
      </Typography>
      <Typography variant="p">
        A Brazilian consumes an average of 7 tons of CO₂eq per year.You can use the buttons below to offset your carbon
        footprint.
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <CompensateCard title="Breakfast + Lunch" amount="BRL 1.00" />
        </Grid>
        <Grid item sm={12} md={4}>
          <CompensateCard title="Snack + Dinner" amount="BRL 1.00" />
        </Grid>
        <Grid item sm={12} md={4}>
          <CompensateCard title="1 Day" amount="BRL 4.00" />
        </Grid>
        <Grid item sm={12} md={4}>
          <CompensateCard title="1 Week" amount="BRL 27.00" />
        </Grid>
        <Grid item sm={12} md={4}>
          <CompensateCard title="1 Month" amount="BRL 116.80" />
        </Grid>
        <Grid item sm={12} md={4}>
          <CompensateCard title="1 Year" amount="BRL 1400.00" />
        </Grid>
      </Grid>
    </Stack>
  );
}
