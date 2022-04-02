import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logedInAction } from './redux-store/profile/profile-actions';

const Comp = () => {
  const dispatch = useDispatch();
  const { isloged, email } = useSelector( state => state.profile );
  console.log( isloged );

  return (
    <div onClick={ () => dispatch( logedInAction({email:'veldasrdurai72@gmail.com'}) ) } >
        { !isloged ? 'Hello World' : email } 
    </div> );
}

export default Comp;