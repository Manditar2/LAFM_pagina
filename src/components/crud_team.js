import React, { Suspense }  from 'react';

class Crud_Team extends React.Component{
render(){
    const header = {
        height:'6%',
        display:'flex',
        marginLeft:'20px',
        paddingTop:'20px',
        color:'#F2ECFF',
        flexDirection:'row',
    }

    const header_title = {
        width:'70%',
        fontSize:'22px'
    }

    const agregar_button = {
        width:'30%',
        display:'flex',
        justifyContent:'end',
        marginRight:'20px',
        color:'#15bbe4',
        fontWeight:'850'

    }

    const lower_body = {
        height:'94%',
        width:'100%',
        color:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }

    const contiene_tabla = {
        width:'96%',
        height:'90%',
    }

    const header_tabla = {
        height:'5%',
        backgroundColor:'#43454A',
        fontWeight:'810',
        display:'flex',
        alignItems:'center',
    }
    const contiene_team = {
        marginLeft:'20px',
    }
    const contiene_info = {
        height:'7%',
        backgroundColor:'#01040f',
        display:'flex',
        alignItems:'center',
        color:'#15bbe4',
        fontWeight:'810',
    }

    
    return <div className='crud_team_body'>
            <div style={header}>
                <div style={header_title}>
                Seleccione un equipo que modificar
                </div>

                <div style={agregar_button}>
                    + Agregar equipo
                </div>
            </div>
            <div style={lower_body}>
                <div style={contiene_tabla}>
                    <div style={header_tabla}>
                    <div style={contiene_team}>
                        Equipo
                    </div>
                    </div>
                    <div style={contiene_info}>
                    <div style={contiene_team}>
                        Sporting Satelite
                    </div>
                    </div>
                    <div style={contiene_info}>
                    <div style={contiene_team}>
                        JK UNIDOS
                    </div>
                    </div>
                    <div style={contiene_info}>
                    <div style={contiene_team}>
                        JK JUNIORS
                    </div>
                    </div>
                    

                </div>
            </div>
    </div>
}
}

export { Crud_Team  as default} 