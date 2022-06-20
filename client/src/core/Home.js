import React from 'react';
import { styled } from '@mui/material/styles';
// import makeStyles from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import unicornbikeImg from './../assets/images/unicornbike.jpg';

const PREFIX = 'Home';

const classes = {
    card: `${PREFIX}-card`,
    title: `${PREFIX}-title`,
    media: `${PREFIX}-media`
};

const StyledCard = styled(Card)((
    {
        theme
    }
) => ({
    [`&.${classes.card}`]: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },

    [`& .${classes.title}`]: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },

    [`& .${classes.media}`]: {
        minHeight: 400
    }
}));

export default function Home() {

    return (
        <StyledCard className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className="{classes.media}" image={unicornbikeImg} title="Unicorn Bicycle"></CardMedia>
            <CardContent>
                <Typography variant="body2" component="p">
                    Welcome to the MERN Skeleton home page.
                </Typography>
            </CardContent>
        </StyledCard>
    );
}

/*
export default function Home() {
    return (
        <Card>
            <Typography variant="h2">
                <CardMedia image={unicornbikeImg} title="Unicorn Bicycle"></CardMedia>
                <CardContent>
                    <Typography varian="body2" component="p">Welcome to the MERN Skeleton home page</Typography>
                </CardContent>
            </Typography>
        </Card>
    );
}
*/
