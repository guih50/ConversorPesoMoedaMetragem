import React,{Component} from 'react';
import './Conversor.css';

export default class Conversor extends Component{

    constructor(props){
        super(props);
        this.state = {
            distanciaA_valor:"",
            distanciaB_valor:0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let distanciaB_valor = this.state.distanciaA_valor*3.281;
        this.setState({distanciaB_valor})
    }

    render() {
        return(
            <div className="conversor">
                <h2>{this.props.distanciaA} para {this.props.distanciaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({distanciaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.distanciaB_valor} Pés </h2>
            </div>
        )
    }
};