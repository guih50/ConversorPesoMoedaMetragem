import React,{Component} from 'react';
import './Conversor.css';

export default class Conversor extends Component{

    constructor(props){
        super(props);
        this.state = {
            pesoA_valor:"",
            pesoB_valor:0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let pesoB_valor = this.state.pesoA_valor/2.2046;
        this.setState({pesoB_valor})
    }

    render() {
        return(
            <div className="conversor">
                <h2>{this.props.pesoA} para {this.props.pesoB}</h2>
                <input type="text" onChange={(event)=>{this.setState({pesoA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
        <h2>{this.state.pesoB_valor} {this.props.pesoB}</h2>
            </div>
        )
    }
};