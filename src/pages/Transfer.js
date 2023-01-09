// @mui
import { Container, Box, Stack, InputAdornment, Button, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import PrimaryTextField from '../components/core/textfield/PrimaryTextField';

export default function Transfer() {
  return (
    <Page title="Dashboard: Download">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Download Ambi
        </Typography>
        <Stack
          direction="column"
          maxWidth="600px"
          padding={4}
          gap={4}
          sx={{ color: (theme) => theme.palette.primary.darker, bgcolor: (theme) => theme.palette.primary.lighter }}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <PrimaryTextField
              label="Ambify"
              InputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
                endAdornment: <InputAdornment position="end">ABFY</InputAdornment>,
              }}
            />
            <Stack direction="column" alignItems="center">
              <Typography variant="overline" textTransform="uppercase">
                Available&nbsp;Value
              </Typography>
              <Typography variant="inherit">25 ABFY</Typography>
            </Stack>
          </Stack>
          <PrimaryTextField label="Portfolio" />
          <Stack direction="row" gap={2}>
            <Box>
              <Iconify icon={'clarity:warning-solid'} width={22} height={22} />
            </Box>
            <Typography variant="p">
              Send only Ambify (ABFY) to the transfer address. Make sure the network is BEP-20 (BSC). Otherwise your
              assets will be lost.
            </Typography>
          </Stack>
          <Button variant="contained">CONTINUE</Button>
        </Stack>
      </Container>
    </Page>
  );
}
