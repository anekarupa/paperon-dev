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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    marginBottom: '3em',
    [theme.breakpoints.down("md")]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: '1.25em'
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down("md")]: {
      height: '7em'
    },
    [theme.breakpoints.down("xs")]: {
      height: '5.5em'
    },
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
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    "&:hover": {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '35px',
    width: '35px'
  },
  drawer: {
    backgroundColor: theme.palette.common.warna02,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  masuk: {
    backgroundColor: theme.palette.common.warna01,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,

  }
}))

export default function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [
    { name: "Layanan", link: "/layanan" },
    { name: "Kuesioner", link: "/kuesioner" },
    { name: "Monitoring", link: "/monitoring" },
  ]

  const routes = [
    { name: "Beranda", link: "/" },
    { name: "Layanan", link: "/layanan", ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined, mouseOver: event => handleOpen(event) },
    { name: "Tentang", link: "/tentang" },
    { name: "Kontak", link: "/kontak" },
  ]

  const tabs = (
    <React.Fragment>
      <Tabs value={false} className={classes.tabContainer} indicatorColor="primary">
        {routes.map((route, index) => (
          <Tab key={`${route.link}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Masuk
            </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} classes={{ paper: classes.menu }} elevation={0} keepMounted style={{zIndex: 1302}} >
        {menuOptions.map((option, i) => (
          <MenuItem key={`${option.link}`} onClick={handleClose} classes={{ root: classes.menuItem }} component={Link} to={option.link} >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{ paper: classes.drawer }} >
        <div className={classes.toolbarMargin} />
        <List disablePadding >
          {routes.map((route, index) => (
            <ListItem key={`${route.name}`} divider button onClick={() => setOpenDrawer(false)} component={Link} to={route.link} >
              <ListItemText disableTypography className={classes.drawerItem} >
              {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem divider button onClick={() => setOpenDrawer(false)} component={Link} className={classes.masuk} to="/masuk" >
            <ListItemText disableTypography className={classes.drawerItem} >Masuk</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer} >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} disableRipple>
              <img
                src={logo}
                alt="my logo"
                className={classes.logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}