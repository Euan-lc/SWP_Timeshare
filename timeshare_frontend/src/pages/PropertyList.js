import {useEffect, useState} from "react";
import PropertyCard from '../components/PropertyCard';
import Stack from '@mui/material/Stack';

export default function PropertyList() {
    const apiUrl = process.env.REACT_APP_API;
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState();

    const fetchData = () => {
        fetch(`${apiUrl}/api/property/all`).then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Error fetching data")
            }
        ).then(data => {
                setData(data);
                setLoaded(true);
            }
        ).catch(error => {
            console.log(error)
        })
    };

    useEffect(() => {
        fetchData()
    }, []);

    if (!loaded) {
        return (
            <div>I'm a list of properties waiting to be loaded</div>
        )
    }
    return (
        <Stack>
            {data.map(x => {
                return <PropertyCard key={x.id}
                                     name={x.name}
                                     img={x.img}
                                     imgAlt={x.imgAlt}
                                     price={x.price}
                                     rating={x.rating}
                                     location={x.location}
                                     orientation={'horizontal'}
                                     sx={{my:2}}
                />
            })}
        </Stack>
    )
}