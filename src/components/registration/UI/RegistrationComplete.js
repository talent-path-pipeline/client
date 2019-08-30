import React,{Component} from 'react';
import Aux from './Aux';

class RegistrationComplete extends Component {
render(){

    return(
        <Aux>
            <img src={require('../d20Roll.gif')} alt="Dice Roll Gif" />
            <h3>The die has been cast!</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac molestie eros. Donec fermentum mollis mauris. Interdum et malesuada fames ♦️ ac ante ipsum primis in faucibus. Fusce bibendum in metus vel congue. Mauris sagittis, quam sed porttitor hendrerit, 🥇mi mi ultricies nibh, ac sodales erat lectus non odio. Donec et sem tempus, venenatis erat non, vestibulum velit. Vivamus ut turpis quis metus mollis faucibus.</p>
            <button type="button" onClick={this.props.goHome}>Go Home and Login</button>
        </Aux>
    );
}
}
export default RegistrationComplete;