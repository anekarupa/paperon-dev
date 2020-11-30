import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '8em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  button: {
    ...theme.typography.masuk,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  menu: {
    backgroundColor: theme.palette.common.warna02,
    color: 'white',
    borderRadius: '5px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}))

export default function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const tabs = (
    <React.Fragment>
      <Tabs className={classes.tabContainer} indicatorColor="primary">
        <Tab className={classes.tab} component={Link} to="/" label="Beranda" />
        <Tab className={classes.tab} component={Link} to="/layanan" label="Layanan" aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} onMouseOver={event => handleOpen(event)} />
        <Tab className={classes.tab} component={Link} to="/tentang" label="Tentang" />
        <Tab className={classes.tab} component={Link} to="/kontak" label="Kontak" />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Masuk
            </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} classes={{ paper: classes.menu }} elevation={0} >
        <MenuItem onClick={handleClose} component={Link} to="/layanan" classes={{ root: classes.menuItem }} >Layanan</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/kuesioner" classes={{ root: classes.menuItem }} >Kuesioner</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/monitoring" classes={{ root: classes.menuItem }} >Monitoring</MenuItem>
      </Menu>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} disableRipple>
              <img
                src={logo}
                alt="my logo"
                className={classes.logo}
              />
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}