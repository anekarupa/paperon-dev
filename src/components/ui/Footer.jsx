import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.warna02,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '18em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '15em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '12em'
    },
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer} >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2} >
            <Grid item component={Link} to="/" className={classes.link} >
              Beranda
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2} >
            <Grid item component={Link} to="/layanan" className={classes.link} >
              Layanan
            </Grid>
            <Grid item component={Link} to="/kuesioner" className={classes.link} >
              Kuesioner
            </Grid>
            <Grid item component={Link} to="/monitoring" className={classes.link} >
              Monitoring
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2} >
            <Grid item component={Link} to="/tentang" className={classes.link}>
              Tentang
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2} >
            <Grid item component={Link} to="/kontak" className={classes.link}>
              Kontak
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img alt="footer adornment" src={footerAdornment} className={classes.adornment} />
    </footer>
  )
}