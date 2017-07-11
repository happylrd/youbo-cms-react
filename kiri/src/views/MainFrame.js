import React from 'react';

import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import grey from 'material-ui/colors/grey';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import {Link,Route,BrowserRouter as Router,Switch} from "react-router-dom";

import Home from './Home';
import Tweets from './Tweets';
import AppNavBar from "../components/AppNavBar";
import TweetDetail from './TweetDetail';
import logo from '../common/image/logo.png';
import TweetFragments  from './TweetFragments';
import UserFollows from './UserFollows';
import Users from './Users';
import Role from './Role';
import Orgs from './Orgs';


class MainFrame extends React.Component{

	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			drawerOpen:false
		};

		this.static = {
			username:"luoop"
		}
	}

	handleDrawerOpen = () =>{
		this.setState({drawerOpen:!this.state.drawerOpen});
	};


	render(){
		const classes = this.props.classes;
		const mailFolderListItems = (
			<div>
				<Link to="/Home" style={{textDecoration:"none"}} >
					<ListItem button >
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</Link>
				<Link to="/Tweets" style={{textDecoration:"none"}} >
				<ListItem button>
					<ListItemIcon>
						<MailIcon />
					</ListItemIcon>
					<ListItemText primary="Tweets" />
				</ListItem>
				</Link>
				<Link to="/Fragments" style={{textDecoration:"none"}} >
				<ListItem button>
					<ListItemIcon>
						<SendIcon />
					</ListItemIcon>
					<ListItemText primary="Fragments" />
				</ListItem>
				</Link>
				<Link to="/Users" style={{textDecoration:"none"}} >
				<ListItem button>
					<ListItemIcon>
						<DraftsIcon />
					</ListItemIcon>
					<ListItemText primary="User" />
				</ListItem>
				</Link>
			</div>
		);

		const otherMailFolderListItems = (
			<div>

				<Link to="/UserFollow" style={{textDecoration:"none"}} >
				<ListItem button>
					<ListItemIcon>
						<MailIcon />
					</ListItemIcon>
					<ListItemText primary="UserFollow" />
				</ListItem>
				</Link>
				<Link to="/Role" style={{textDecoration:"none"}} >
				<ListItem button>
					<ListItemIcon>
						<ReportIcon />
					</ListItemIcon>
					<ListItemText primary="Role" />
				</ListItem>
				</Link>
				<Link to="/Orgs" style={{textDecoration:"none"}} >
					<ListItem button>
						<ListItemIcon>
							<ReportIcon />
						</ListItemIcon>
						<ListItemText primary="Org" />
					</ListItem>
				</Link>
			</div>
		);

		return(
			<Router>
				<div>
					<AppNavBar
						offset={this.state.drawerOpen?classes.offset:{}}
						onLeftIconButtonTouchTap={this.handleDrawerOpen}
					/>
					<Drawer docked={false}
					        open={this.state.drawerOpen}
					        onRequestClose={this.handleDrawerOpen}
					>
						<Paper className={classes.drawerHead}
							square={true}>
							<Avatar className={classes.avatar} src={logo}/>
						</Paper>
						<div>
							<List className={classes.list} disablePadding>
								{mailFolderListItems}
							</List>
							<Divider />
							<List className={classes.list} disablePadding>
								{otherMailFolderListItems}
							</List>
						</div>
					</Drawer>
					<div className={this.state.drawerOpen?classes.offset:{}}>
						{
							<Switch>
								<Route path='/Home' component={Home}/>
								<Route path="/Tweets" exact component={Tweets}/>
								<Route path="/Tweets/:tweetId" component={TweetDetail}/>
								<Route path="/Fragments" component={TweetFragments} />
								<Route path="/Users" component={Users} />
								<Route path="/UserFollow" component={UserFollows} />
								<Route path="/Users" component={Users} />
								<Route path="/Role" component={Role} />
								<Route path="/Orgs" component={Orgs} />
							</Switch>
						}
					</div>
				</div>
			</Router>
		);
	}
}

const styleSheet = createStyleSheet('MainFrame', {
	offset:{
		marginLeft:400
	},
	list: {
		width: 400,
		flex: 'initial'
	},
	listFull: {
		width: 'auto',
		flex: 'initial'
	},
	avatar: {
		backgroundColor:grey[900],
		width:150,
		height:150,
		margin:"auto",
		marginTop:"15%"
	},
	drawerHead:{
		height:300
	}
});

export default withStyles(styleSheet)(MainFrame);
