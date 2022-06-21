import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import Person from '@mui/icons-material/Person';
import ArrowForward from '@mui/icons-material/ArrowForward';
import {styled} from '@mui/material/styles';
import {list} from './api-user.js';

const PREFIX = 'User';

const classes = {
    root: `${PREFIX}-root`,
    paper: `${PREFIX}-paper`,
    title: `${PREFIX}-title`
};

const StyledPaper = styled(Paper)(({
                                       theme
                                   }) => ({
        [`&.${classes.root}`]: {
            margin: `${theme.spacing(5)}`,
            padding: `${theme.spacing(1)}`,
        },
        [`& .${classes.title}`]: {
            margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
            color: theme.palette.openTitle
        }
    }
))
export default function Users() {
    const [users, setUsers] = useState([1, 3, 5]);

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })

        /*
        return function cleanup() {
            abortController.abort()
        }
         */
    }, []);

    return (
        <StyledPaper className={classes.root} elevated="4">
            <Typography variant="h6" className={classes.title}>
                All Users
            </Typography>
            <List dense>
                {users.map((item, i) => {
                    return <Link to={"/user/" + item._id} key={i}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <Person/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name}/>
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <ArrowForward/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Link>
                })
                }
            </List>
        </StyledPaper>
    );
}
