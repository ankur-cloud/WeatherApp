import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonBase, Grid, IconButton, Link, } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    root: {
        maxWidth: 345, marginBottom: '30px', marginRight: '10px'
    },
    mapfun: {
        display: 'flex', justifyContent: 'center'
    }
});



export default function Wearcard({ city, weather, addCity, coordinates, cloud, winds, system, rain, id, setVarious, riseset }) {


    const classes = useStyles();

    const imf = `https://source.unsplash.com/1600x900/?${addCity.name}`

    const Moons = ({ icn, main, desc, clouds }) => {

        const omgimg = `http://openweathermap.org/img/wn/${icn}.png`
        return (
            <Grid container className={classes.mapfun}>
                <h3>{main}  : </h3>
                <h3>{desc} </h3>
                <img src={omgimg} alt='asdasd' />
            </Grid>
        )
    }

    const deleteIt = (id) => {
        setVarious(
            (pdata) => pdata.filter((cval) => {
                return cval.id !== id;
            }
            )
        )


    }




    let dete = new Date((addCity.dt * 1000) + (addCity.timezone * 1000))
    console.log(dete);





    return (

        <Card className={classes.root}>

            <CardActionArea>


                <CardMedia
                    component="img"
                    alt={addCity.name}
                    height="100"
                    image={imf}
                    title={addCity.name}
                />

                <CardContent>
                    <Typography>

                    </Typography>
                    <Typography display='block' variant='subtitle2'>
                        Sunrise : {new Date(riseset.sunrise * 1000).toLocaleTimeString('en-IN')}&nbsp;
                        Sunset&nbsp;:{new Date(riseset.sunset * 1000).toLocaleTimeString('en-IN')}
                    </Typography>
                    <Typography display='block' variant='subtitle2'>
                        {addCity.name}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2" display='block'>
                        Clouds:{cloud.all + '%'}&nbsp;
                        Lat:{coordinates.lat + ''}&nbsp;
                        Lon:{coordinates.lon + ''}&nbsp;

                    </Typography>
                    <Typography gutterBottom component="h3" >
                        Temp:{city.temp}  &deg;C&nbsp;&nbsp;
                        Humidity:{city.humidity}&nbsp;g/Kg&nbsp;
                        Pressure:
                        {city.pressure}&nbsp; Pascal &nbsp;
                        Min Temp&nbsp;
                        {city.temp_min}  &deg;C&nbsp;&nbsp;
                        Max Temp&nbsp;
                        {city.temp_max}  &deg;C&nbsp;&nbsp;
                    </Typography>
                    {/* <Typography gutterBottom component="h3" >Humidity:
                        {city.humidity}

                    </Typography> <Typography gutterBottom component="h3" >Pressure:
                        {city.pressure}
                    </Typography> <Typography gutterBottom component="h3">
                        Min Temp&nbsp;
                        {city.temp_min}  &deg;C
                    </Typography> <Typography gutterBottom component="h3"  >
                        Max Temp
                        {city.temp_max}  &deg;C
                    </Typography> */}
                    <Typography variant="body2" color="primary" >
                        Visibility : {addCity.visibility} 'meters'
                        cod :  {addCity.cod}
                        <br />
                        Date :  {dete.toString()}


                    </Typography>

                    <Grid>
                        {
                            weather.map((wea) => (<Moons key={wea.id} icn={wea.icon} main={wea.main} desc={wea.description} />
                            )

                            )
                        }
                    </Grid>


                    <div>
                        <Typography variant='subtitle2' label='ssada'>Degree:{winds.deg} °</Typography>
                        <Typography variant='subtitle2'>Gust:{winds.gust}</Typography>
                        <Typography variant='subtitle2'>Speed:{winds.speed}</Typography>

                    </div>



                </CardContent>
            </CardActionArea>
            <IconButton aria-label="delete" onClick={() => { deleteIt(id) }} >
                <DeleteIcon style={{ fontSize: 30 }} />
            </IconButton>

        </Card>
    );
}
