import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TransactionSwitch from './TransactionSwitch/TransactionSwitch';

import slideInLeft from '../../../../../../../animation/slideInLeft';

const TransactionMapStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90vh;
    width: 100vw;

    background-color: #00ff00;
    animation: ${slideInLeft} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

const TransactionMap = ({onClick}) => {
    const { 
        requestFromLocation, 
        requestToLocation 
    } = useSelector( state => state.transactionMapChatReducer );
    useEffect( () => {
        var directionsService = new window.google.maps.DirectionsService();
        var directionsRenderer = new window.google.maps.DirectionsRenderer();
        var requestFromLocationOnMap = new window.google.maps.LatLng(requestFromLocation[1], requestFromLocation[0]);
        var requestToLocationOnMap   = new window.google.maps.LatLng(requestToLocation[1], requestToLocation[0]);
        var mapOptions = {
            zoom:10,
            center: requestFromLocationOnMap
          }
          var map = new window.google.maps.Map(document.getElementById('direction-map'), mapOptions);
          directionsRenderer.setMap(map);
        
          var request = {
            origin: requestFromLocationOnMap,
            destination: requestToLocationOnMap,
            travelMode: 'WALKING'
          };
          directionsService.route(request, function(result, status) {
            if (status === 'OK') {
              directionsRenderer.setDirections(result);
            }
          });
    },[ 
        requestFromLocation, 
        requestToLocation 
    ])
    return (
        <TransactionMapStyle>
            <div id='direction-map' style={{
                position:'absolute',
                top:'0',bottom:'0',
                right:'0',left:'0'
            }}> 
            </div>
            <TransactionSwitch onClick={onClick} />
        </TransactionMapStyle>
    );
}

export default TransactionMap;