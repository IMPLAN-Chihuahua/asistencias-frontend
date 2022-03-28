import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { getRepresentativesThatAreOnReunion } from './AssistanceList';
import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function AssistanceScreen() {

    const reps = getRepresentativesThatAreOnReunion();

    return (
        <Container className='animate__animated animate__fadeIn'>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {reps.map((rep, index) => (
                    <Person {...rep} key={index} />
                ))}
            </List>
            <br />
            <NavLink to="/">
                <Button variant='outlined' color='secondary'>
                    Go back
                </Button>
            </NavLink>
        </Container>
    );
}

export const Person = ({ name, date, deptName }) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {`Representante de: ${deptName}. Activo en la reunión desde`}
                            </Typography>
                            {` — ${date}`}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}