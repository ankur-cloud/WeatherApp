import React, { useEffect, useState } from 'react'
import { TextField, Grid, Box, makeStyles, Toolbar, createMuiTheme, ThemeProvider, Container, AppBar, Divider, Card, CardMedia, Button } from '@material-ui/core'
import PrimarySearchAppBar from '../Appbar'
import axios from 'axios';
import Wearcard from './Wearcard';
// import debounce from 'lodash.debounce';


const useStyles = makeStyles({

})



const Weather = ({ dog }) => {



    const [search, setSearch] = useState([])
    const [city, setCity] = useState([])
    const [addCity, setaddCity] = useState([])
    const [cloud, setCloud] = useState([])
    const [weather, setWeather] = useState([])
    const [coordinates, setCoordinates] = useState([])
    const [winds, setWinds] = useState([])
    const [various, setVarious] = useState([])
    const [variouss, setVariouss] = useState([])

    const dogf = () => {
        const imf = search;
        dog(imf)

    }


    const fetchLocat = async () => {
        if (search.length >= 3) {

            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)

                console.log(data)
                setVariouss(data.sys)
                setaddCity(data)
                setCity(data.main)
                setCoordinates(data.coord)
                setWeather(data.weather)
                setCloud(data.clouds)
                setWinds(data.wind)

            } catch (error) {
                console.error(error)

            }
        }
    }
    // deboumce method for search hook
    // const a = document.getElementsByTagName('TextField');
    // a.addEventListener('input', setSearchData, false)


    const searchData3 = (event) => {
        let ds = 1;
        const value = event.target.value;
        setSearch(value)


        console.log('wow', ds++)


    }


    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay)
        };
    };


    const setSearchData = debounce(searchData3, 1200);

    // const addobj = Object.entries(addCity)
    // console.log(addobj)


    const addd = (preValue, event) => {
        setVarious((preValue) => {
            return [...preValue, addCity]
        });
        setSearch('')

    }
    // console.log(various);
    useEffect(() => {
        fetchLocat()
    }, [search])


    return (
        <div>
            <PrimarySearchAppBar color='secondary' setSearchData={setSearchData} />
            <Toolbar />

            <Container>

                <Divider />

                <br />

                {search.length !== 0 && <Button variant='contained' onClick={addd} >Add City</Button>}

                <br /><br />
                {<Grid>
                    <Wearcard city={city} weather={weather} addCity={addCity} coordinates={coordinates} cloud={cloud} winds={winds} rain={addCity.rain} add={addd} riseset={variouss} setVarious={setVarious} />

                </Grid>}


                <Grid container>
                    {various.map((vac, idx) => {

                        return <Wearcard key={`${vac.name}-${idx}`} id={vac.id} city={vac.main} weather={vac.weather} addCity={vac} coordinates={vac.coord} cloud={vac.clouds} winds={vac.wind} rain={vac.rain} setVarious={setVarious} riseset={variouss} />


                    })}

                </Grid>
            </Container>
        </div >)
}

export default Weather;

