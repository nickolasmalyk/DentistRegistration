import * as React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer>
            <p>&copy;{(new Date()).getFullYear()} - Softserve Academy</p>
            <p>Created by Lv-310.Net</p>
        </footer>
        );
    }
}
export default Footer;