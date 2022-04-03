const timeOut = ms =>  
    new Promise( resolve => 
      setTimeout( () => resolve(true), ms ) ) ;

export default timeOut;