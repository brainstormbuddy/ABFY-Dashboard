// @mui
import { Container, Grid, Stack, Typography } from '@mui/material';

// components
import Page from '../components/Page';

// sections
import Impact from '../sections/@dashboard/home/Impact';
import Compensate from '../sections/@dashboard/home/Compensate';
import Tip from '../sections/@dashboard/home/Tip';
import NeutralizationCard from '../sections/@dashboard/home/NeutralizationCard';
import Inspiration from '../sections/@dashboard/home/Inspiration';

export default function Home() {
  return (
    <Page title="Dashboard: Home">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Home
        </Typography>
        <Stack direction="column" spacing={2} flexWrap="wrap" justifyContent="flex-start">
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Impact />
            </Grid>
            <Grid item sm={12} md={6}>
              <Compensate />
            </Grid>
            <Grid item sm={12} md={6}>
              <Tip />
            </Grid>
            <Grid item sm={12} md={6}>
              <NeutralizationCard />
            </Grid>
            <Grid item sm={12}>
              <Inspiration />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Page>
  );
}
