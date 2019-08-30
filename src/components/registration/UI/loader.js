import React,{Component} from 'react';
import  './loader.css';
import Aux from './Aux';
import Backdrop from './Backdrop';

class Loader extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show;
    }
render(){
    return (
<Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className="loader" style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>Loading...</div>
    </Aux>
    )
}
}
export default Loader;