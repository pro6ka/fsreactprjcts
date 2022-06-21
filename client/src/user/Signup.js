import React, {useState} from 'react';
import {create} from './api-user';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Icon from '@mui/material/Icon';
import {Link} from 'react-router-dom';
import {styled} from '@mui/material/styles';

const PREFIX = 'Signup';
const classes = {
    card: `${PREFIX}-card`,
    title: `${PREFIX}-title`,
    textField: `${PREFIX}-textField`,
    error: `${PREFIX}-error`,
};

const StyledCard = styled(Card)(({
    theme
}) => ({
    [`&.${classes.card}`]: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    }
}));

export default function Signup() {
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        };
        console.log(user);
        create(user).then((data) => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setValues({...values, error: '', open: true})
            }
        });
    };

    return (
        <div>
            <StyledCard className={classes.card}>
                <CardContent>
                    <Typography variant="6" className={classes.title}>Sign Up</Typography>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        varlue={values.name}
                        onChange={handleChange('name')}
                        margin='normal'
                    />
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        className={classes.textField}
                        varlue={values.email}
                        onChange={handleChange('email')}
                        margin='normal'
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        varlue={values.password}
                        onChange={handleChange('password')}
                        margin='normal'
                    />
                    <br/>
                    {
                        values.error &&(
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>error</Icon>
                                {values.error}
                            </Typography>
                        )
                    }
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={clickSubmit}
                        className={classes.submit}
                    >Submit</Button>
                </CardActions>
            </StyledCard>
            <Dialog open={values.open} disableBackdropClick={true}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New account successfully created.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/signin">
                        <Button color="primary" autoFocus="autoFocus" variant="contained">
                            Sign In
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}