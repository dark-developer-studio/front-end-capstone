import React from 'react';

import {
  Grid,
  Typography,
  IconButton,
  Container,
  InputAdornment,
  FilledInput
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

export default function Banner() {
  return (
    <Container style={{ padding: 0 }}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        wrap="nowrap"
        style={{
          backgroundColor: '#445c82', height: 80, padding: 10, margin: 0, borderRadius: '0px 0px 3px 3px'
        }}
      >
        <Typography variant="h3" style={{ color: 'white' }}>Project Catwalk</Typography>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <FilledInput
              style={{ borderBottom: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
              inputProps={{
                style: {
                  color: 'white'
                }
              }}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton aria-label="search">
                    <SearchIcon style={{ color: 'white' }} />
                  </IconButton>
                </InputAdornment>
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ height: 40 }} justify="center" alignItems="baseline">
        <Typography variant="subtitle1" component="p">Important information</Typography>
      </Grid>
    </Container>
  );
}
