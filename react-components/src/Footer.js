import React, {Component} from 'react';

let currentDate = new Date(); 

class Footer extends Component{
    render()
    {
        return(
            <footer>
                <p>All rights reserved &#169; <span> {currentDate.getFullYear()}</span></p> 
            </footer>
        )
    }
}

export default Footer;