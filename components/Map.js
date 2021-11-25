import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {getCenter} from 'geolib';

const Map = ({ searchResults }) => {
    const [selectedLocation, setSelectedLocation] = useState({});
    console.log(selectedLocation);
    //transform the search result object into the
    //{ latitude: 52.516272, longitude: 13.377722 } object
    const cordinates = searchResults.map(result => ({
        latitude: result.lat,
        longitude: result.long
    }));

    //the lotitude and longitude of the centre of locations cordinates
    const center = getCenter(cordinates);
    console.log(center);
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return (
        <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/rohansaju/ckwdsgigl8sjg14mva670n99m'
        mapboxApiAccessToken={process.env.mapbox_token}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                    latitude={result.lat}
                    longitude={result.long}
                    offsetLeft={-20}
                    offsetTop={-10}
                    >
                        <p onClick={() => setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce' role='img' aria-label='push-pin'>📌</p>
                    </Marker>
                    {/*the popup that should show when we click on a marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude= {result.lat}
                        longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(false)}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map;
