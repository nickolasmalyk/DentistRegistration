import * as React from 'react';
import NavBar from '../layoutElements/navbar/navbar';
import Footer from '../layoutElements/footer';

class Homepage extends React.Component{
    render() {
        return(
            <div>
                <NavBar />
                <Footer />
            </div>
        );
    }
}
export default Homepage;