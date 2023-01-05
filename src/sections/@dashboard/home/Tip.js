// @mui
import { Stack, Typography } from '@mui/material';

export default function Tip() {
  return (
    <Stack direction="column" justifyContent="flex-start" spacing={0.5}>
      <Typography variant="h6" textTransform="uppercase">
        Tips to reduce your carbon footprint
      </Typography>

      <Typography variant="subtitle2">Opt for returnable and recyclable products</Typography>
      <Typography variant="subtitle2">Give preference to local producers</Typography>
      <Typography variant="subtitle2">Prefer to consume from sustainable companies</Typography>
      <Typography variant="subtitle2">Eat more organic food</Typography>
      <Typography variant="subtitle2">Donate old clothes and buy new ones at thrift stores</Typography>
      <Typography variant="subtitle2">Ride or bike to work</Typography>
      <Typography variant="subtitle2">Keep your car service up to date</Typography>
    </Stack>
  );
}
