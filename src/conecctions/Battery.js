import React, { Component } from 'react'
import { Icon, Transition } from 'semantic-ui-react'


const chargeColors = [
    {
        charge: 50,
        type: 'low',
        iconName: 'battery half',
        color: 'yellow'
    },
    {
        charge: 30,
        iconName: 'battery quarter',
        type: 'danger',
        color: 'red'
    },
    {
        charge: 100,
        type: 'full',
        iconName: 'battery full',
        color: '#63E386'
    },
]



class Battery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            animation: 'pulse',
            duration: 1600,
            visible: true,
            charge: 100,
            iconName: 'battery full',
            iconColor: '#63E386'
         };
    }

    // Hacemos visible la animacion
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    
    render() {
        const { animation, duration, visible, charge, iconName } = this.state
        setInterval(async () => {

            chargeColors.map(color => {
                if(charge <= color.charge){
                    this.setState({
                        iconName: color.iconName,
                        iconColor: color.color
                    })
                }
            })
            this.toggleVisibility()
            this.setState({
                charge: charge - 5
            })
        }, 2000);
        return (
            // TODO: el color cambien en funcion del porcentaje de la bateria
            // recibir el valor del wifi
            <div style={{
                color:'#63E386'
            }} className='battery'>
                <Transition animation={animation} duration={duration} visible={visible}>
                    <Icon
                        onClick={this.toggleVisibility}
                        name={iconName}
                        size='large'
                    />
                </Transition>
            </div>
        );
    }
}

export default Battery;