import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dropdown from 'react-bootstrap/Dropdown';
import {Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#15171c"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#15171c"
  },
  drawerContainer: {
    overflow: 'auto',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dropitems: {
    width: "100%",
  },
  headings: {
    color: "white",
    fontSize:"16px"
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
  itemdropdown: {
    background: "#414757",
    padding: "0"
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

export default function ClippedDrawer() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Appbar drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          
        {/* <List> */}
        
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
        {/* </List> */}

        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

      </main>
    </div>
  );
}
