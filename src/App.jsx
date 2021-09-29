import { PhotoCamera } from '@mui/icons-material';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import "./App.css"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    return (
        < >
            <CssBaseline></CssBaseline>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className="icon" />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className="container">
                    <Container maxWidth='sm'>
                        <Typography variant='h2' color="textPrimary" align="center" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' color="textSecondary" align="center" paragraph>
                            Hello every one this is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
                        </Typography>
                        <div className="buttons">
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className="cardGrid" maxWidth="md">
                    <Grid container spacing={4}>
                        {
                            cards.map((card) => (

                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className="card">
                                        <CardMedia
                                            className="cardMedia"
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                        <CardContent className="cardContent">
                                            <Typography gutterBottom variant='h5'>
                                                Heading
                                            </Typography>
                                            <Typography>
                                                this is a media card , You can use this section to describ the content
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">View</Button>
                                            <Button size="small" color="primary">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            ))}
                    </Grid>

                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    all right resaverd by 
                </Typography>
            </footer>
        </>
    );
};

export default App;