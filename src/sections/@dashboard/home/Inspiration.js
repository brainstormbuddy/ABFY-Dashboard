// @mui
import { Grid, Typography } from '@mui/material';

// core components
import { InspirationCard } from '../../../components/core/card';

export default function Inspiration() {
  return (
    <>
      <Typography variant="h6" textTransform="uppercase" marginBottom={2}>
        our inspirations
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <InspirationCard
            title="Jo Clemente Institute"
            description="Instituto Jô Clemente, formerly Apae de São Paulo, has been operating for over 60 years promoting the autonomy, independence and protagonism of people with intellectual disabilities for their full inclusion in all social spheres."
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <InspirationCard
            title="Doctors Without Borders"
            description="Doctors Without Borders (MSF) is an international humanitarian organization that provides health care to people affected by armed conflict, natural disasters, epidemics, malnutrition or without any access to medical care."
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <InspirationCard
            title="LUZ ALLIANCE FUND – BRAZILFOUNDATION"
            description="Created by Gisele Bündchen to support emergency humanitarian causes, the fund supports thousands of vulnerable families in Brazil and also supports education and environmental protection and regeneration projects."
          />
        </Grid>
      </Grid>
    </>
  );
}
