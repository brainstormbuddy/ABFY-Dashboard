// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Avatar, Button, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';

export default function Setting() {
  const FlexWrapperStyle = styled('div')(({ theme }) => ({
    maxWidth: '334px',
    width: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: theme.spacing(4),
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.lighter,
  }));

  return (
    <Page title="Dashboard: Settings">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Settings
        </Typography>
        <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" flexWrap="wrap" spacing={2}>
          <Stack direction="column" spacing={2}>
            <FlexWrapperStyle>
              <Typography variant="subtitle1">
                <strong>Safety</strong>
              </Typography>
              <Stack direction="row" gap={2}>
                <Iconify icon="akar-icons:key" width={22} height={22} />
                <Typography variant="subtitle1">Redefinie PIN</Typography>
              </Stack>
              <Stack direction="row" gap={2}>
                <Iconify icon="bx:lock-open" width={22} height={22} />
                <Typography variant="subtitle1">Redefinie Password</Typography>
              </Stack>
            </FlexWrapperStyle>
            <FlexWrapperStyle>
              <Typography variant="subtitle1">
                <strong>Portfolio</strong>
              </Typography>
              <Stack direction="row" gap={2}>
                <Typography variant="body3" sx={{ wordBreak: 'break-all' }}>
                  0x23f5C09999C6b4eC9E5Db5aCb91419ED96ea2370
                </Typography>
                <Iconify icon="clarity:copy-line" width={22} height={22} />
              </Stack>
            </FlexWrapperStyle>
          </Stack>
          <FlexWrapperStyle>
            <Typography variant="subtitle1">
              <strong>Account information</strong>
            </Typography>
            <Stack direction="column" gap={2}>
              <Typography variant="caption">Profile picture</Typography>
              <Avatar sx={{ m: 'auto', width: 120, height: 120, bgcolor: (theme) => theme.palette.primary.light }}>
                <Typography variant="h1">J</Typography>
              </Avatar>
              <Button> Trocar </Button>
            </Stack>
            <Stack direction="column" gap={1}>
              <Stack direction="column">
                <Typography variant="overline" textTransform="uppercase">
                  Full name
                </Typography>
                <Typography variant="body3">JORDAN RAMOS PAMPLONA</Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="overline" textTransform="uppercase">
                  Email
                </Typography>
                <Typography variant="body3"> jrpamplona23@gmail.com </Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="overline" textTransform="uppercase">
                  Telephone
                </Typography>
                <Typography variant="body3"> +55 (41) 99708-2252 </Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="overline" textTransform="uppercase">
                  CPF
                </Typography>
                <Typography variant="body3"> 086.312.909-98 </Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="overline" textTransform="uppercase">
                  mother's name
                </Typography>
                <Typography variant="body3">Andrea</Typography>
              </Stack>
              <Stack direction="column">
                <Typography variant="overline" textTransform="uppercase">
                  Birth date
                </Typography>
                <Typography variant="body3"> 25/09/2001 </Typography>
              </Stack>
            </Stack>
          </FlexWrapperStyle>
          <FlexWrapperStyle>
            <Typography variant="subtitle1">
              <strong>Payment methods</strong>
            </Typography>
            <Typography variant="body3" textAlign="center">No cards added</Typography>
            <Button variant="contained">ADD</Button>
          </FlexWrapperStyle>
        </Stack>
      </Container>
    </Page>
  );
}
