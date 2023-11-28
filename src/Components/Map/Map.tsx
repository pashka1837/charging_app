import DG from '2gis-maps';
import { Box } from '@mui/joy';
import { useEffect, useState } from 'react';
function getLocation() {
    if (!navigator.geolocation) {
        alert(`Геолокация выключена`);
    } 
  }
// function errorPosition() {
//     ([43.243837,76.91135]);
//  }
//  function showPosition(position: GeolocationPosition) {    
//     let center = [ position.coords.latitude, position.coords.longitude];    
//   }

export default function Map() {

    
   
    useEffect(() => {     
        getLocation()  
        let map = DG.map('map-container');
        map.setView([43.243837,76.91135], 13)
        map.locate({setView: true, timeout: 2000, enableHighAccuracy: true})
        .on('locationfound', function(e) {
            DG.marker([e.latitude, e.longitude]).addTo(map);
        })
        .on('locationerror', function(e) {
            DG.popup()
            .setLatLng([43.243837,76.91135]) 
            .setContent('Доступ к определению местоположения отключён')                         
            .openOn(map);
        });
        return () => map && map.remove();
      }, []);

           
      
      
    
      return <Box id="map-container" 
                   sx={{ width: '100%',
                   pt: '5%', 
                   mt: '5%',
                   height: '500px',
                    borderRadius: '10px'}} />;
  
}
