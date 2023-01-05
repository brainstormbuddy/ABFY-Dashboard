// @mui
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// component
import Iconify from '../../../components/Iconify';

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ContentStyle = styled('div')(() => ({
  maxWidth: '450px',
  width: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const CommonInputStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  borderRadius: '8px',
  backgroundColor: theme.palette.primary.lighter,
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
}));

const TokenInputStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  borderRadius: '8px',
  backgroundColor: theme.palette.warning.lighter,
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
}));

export default function Impact() {
  return (
    <RootStyle>
      <Typography variant="h6" sx={{ mb: 5, textTransform: 'uppercase' }}>
        My Impact
      </Typography>
      <ContentStyle>
        <CommonInputStyle>
          <Iconify icon={'fluent:food-20-regular'} width={22} height={22} />
          <Typography variant="p">0.000</Typography>
        </CommonInputStyle>
        <CommonInputStyle>
          <Iconify icon={'zondicons:travel-walk'} width={22} height={22} />
          <Typography variant="p">0.000</Typography>
        </CommonInputStyle>
        <CommonInputStyle>
          <Iconify icon={'fa-solid:car'} width={22} height={22} />
          <Typography variant="p">0.000</Typography>
        </CommonInputStyle>
        <CommonInputStyle>
          <Iconify icon={'carbon:home'} width={22} height={22} />
          <Typography variant="p">0.000</Typography>
        </CommonInputStyle>
        <TokenInputStyle>
          <Iconify icon={'bi:sun'} width={22} height={22} />
          <Typography variant="p">25.000</Typography>
        </TokenInputStyle>
        <Typography variant="h2" textAlign={'center'}>
          25.00
        </Typography>
        <Typography variant="h6" textAlign={'center'} marginBottom={'16px'}>
          KgCO₂
        </Typography>
        <Typography variant="subtitle2" textAlign={'center'}>
          That's the <strong>total carbon</strong> you've produced so far. Take a deep breath and make up!
        </Typography>
      </ContentStyle>
    </RootStyle>
  );
}
