import { Document } from 'react-pdf/dist/entry.webpack';
import React, { Component } from 'react';
import NavBar from './navbar';



export default props=>{

    return(
      <div>
      <NavBar/>
      <center>
      <iframe
      src="https://docs.google.com/gview?url=https://drive.google.com/uc?id=1SBBib1lxUmrz4XFSStqhSuBhZKZbqRV4&embedded=true"
      frameborder="0"
      styles={{width: '500px', height: 600}}>
      </iframe>
      </center>
      </div>
    );
}
