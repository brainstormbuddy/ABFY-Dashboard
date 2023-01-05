import React, { useState } from 'react';
// @mui
import {
  Container,
  Modal,
  Backdrop,
  Fade,
  Box,
  Stack,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from '@mui/material';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import PrimaryTextField from '../components/core/textfield/PrimaryTextField';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Buy() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Page title="Dashboard: Buy">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Offset CO₂
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
          <Stack direction="column" gap={2}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6">Select an NGO</Typography>
              <IconButton onClick={handleOpen}>
                <Iconify icon={'bi:info-circle-fill'} width={22} height={22} />
              </IconButton>
            </Stack>
            <Button variant="text">Select an NGO</Button>
          </Stack>
          <Stack direction="row" gap={2}>
            <Box>
              <Iconify icon={'bi:info-circle-fill'} width={22} height={22} />
            </Box>
            <Typography variant="p">
              Donations to supported institutions will be made directly by Ambipar, with 5% (five percent) of the
              purchase price of Ambify being allocated, and another 5% (five percent) when Ambify is
              compensated.Contributions will occur without any user discounts. If in doubt, please contact
              supportambify@ambify.com{' '}
            </Typography>
          </Stack>
          <Button variant="contained">CONTINUE</Button>
        </Stack>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              ONG
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Ambipar will allocate the value in reais of this operation to the NGO you selected without any discount on
              your purchase, without any loss, you choose and we donate!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="text" onClick={handleClose}>
                I UNDERSTOOD
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Page>
  );
}
