import {Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
// import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#15171c"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    outline:"none",
    border:"none",
    '&:focus':{
      outline:"none",
      border:"none",
    },
    '&:active':{
      outline:"none",
      border:"none",
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#15171c",
    padding:'0'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  dropitems: {
    width: "100%",
  },
  headings: {
    color: "white",
    // fontSize:"16px"
  },
  headingblock: {
    background: "#15171c",
    borderLeft: "4px solid #15171c",
    '&:hover': {
      background: "#252831",
      borderLeft: "4px solid #632ce4",
      cursor: "pointer",
    }
  },
  topwrap:{
    display:"flex",
    justifyContent: "space-between",
    alignItems:"center",
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "flex-end",
    },
  },
  lead: {
    [theme.breakpoints.down('xs')]: {
      display: "none"
    },
  },
  profiledrop:{
    background: "#15171c",
    padding:"0",
    width: "80px",
    outline:"none",
    border:"none",
    '&:hover': {
      background: "#15171c",
      padding:"0",
      outline:"none",
      border:"none",
    },
    '&:focus': {
      background: "#15171c",
      padding:"0",
      outline:"none",
      border:"none",
    }
  },
  itemdropdown: {
    background: "#414757",
    padding: "0"
  },
  dropdownitems: {
    marginTop: "8px",
    '&:hover': {
      background: "#632ce4",
      color: "#fff"
    },
 
  },
  subitems:{
    width: "100%",
    padding: "15px",
    paddingLeft: "40px",
    '&:hover': {
      background: "#632ce4",
      cursor: "pointer"
    }
  }
}));
function ResponsiveDrawer(props) {

  const classes = useStyles();
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
  <>

  <Accordion className={classes.ex} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary
  expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
  aria-controls="panel1a-content"
  id="panel1a-header"
  className={classes.headingblock}
  >
     <Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Property
</Typography>
  </AccordionSummary>
  <AccordionDetails className={classes.itemdropdown}>
      <List className={classes.dropitems}>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/viewprojects'>
      <ListItem  className={classes.subitems}  button key={'View Projects'}>
      <h7>View Projects</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/addproject'>
      <ListItem className={classes.subitems} button key={'Add Project'}>
      <h7>Add Project</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/viewdeveloper'>
      <ListItem className={classes.subitems} button key={'View Developer'}>
      <h7>View Developer</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/adddeveloper'>
      <ListItem className={classes.subitems} button key={'Add Developer'}>
      <h7>Add Developer</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/searchtool'>
      <ListItem className={classes.subitems} button key={'Search Tool'}>
      <h7>Search Tool</h7>
      </ListItem>
      </Link>
      </List>
  
  </AccordionDetails>
</Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary
  expandIcon={<ExpandMoreIcon style={{ color: "white" }}/>}
  aria-controls="panel1a-content"
  id="panel1a-header"
  className={classes.headingblock}
  >
     <Typography variant="h7" className={classes.headings}>
     <i className="fa fa-building"></i>Property
</Typography>
  </AccordionSummary>
  <AccordionDetails className={classes.itemdropdown}>
      <List className={classes.dropitems}>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/viewprojects'>
      <ListItem  className={classes.subitems}  button key={'View Projects'}>
      <h7>View Projects</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/'>
      <ListItem className={classes.subitems} button key={'Add Project'}>
      <h7>Home</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/viewdeveloper'>
      <ListItem className={classes.subitems} button key={'View Developer'}>
      <h7>View Developer</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/adddeveloper'>
      <ListItem className={classes.subitems} button key={'Add Developer'}>
      <h7>Add Developer</h7>
      </ListItem>
      </Link>
      <Link style={{ color: '#fff', textDecoration: 'none'}} to='/searchtool'>
      <ListItem className={classes.subitems} button key={'Search Tool'}>
      <h7>Search Tool</h7>
      </ListItem>
      </Link>
      </List>
  
  </AccordionDetails>
</Accordion>

</>
  );

return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.topwrap}>
          <Typography className={classes.lead} variant="h6" noWrap>
            Lead Management System
          </Typography>
          <div  style={{display: 'flex'}} >

          <SearchBar style={{height : "32px", margin:"auto 20px"}}/>

          <Dropdown>
                    <Dropdown.Toggle className={classes.profiledrop} id="dropdown-basic">
                    <img style={{height : "38px", borderRadius: "50%", width: "40px"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTBIOoSFMx3dCEPOnRAWLFmbJYa_eggwSww&usqp=CAU" />
                     
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {/* <Dropdown.Item className={classes.username} >Signed in as<br/><h6 style={{marginTop: "5px"}} >Victor</h6></Dropdown.Item> */}
                    <div style={{paddingLeft : "25px"}} className={classes.username} >Signed in as<br/><h6 style={{marginTop: "5px"}} >Victor</h6></div>
                    <hr style={{margin: "0px"}} />
                      <Dropdown.Item className={classes.dropdownitems}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
          </div>
          </div>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon style={{color:"white"}}/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
<Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} style={{ padding: '0', margin:'0'}}/>
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
        {props.children}
      </div>
    </div>
  );
}
ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default ResponsiveDrawer;
