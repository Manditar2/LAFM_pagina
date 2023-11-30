import React, { Suspense }  from 'react';

const Crud_Team = React.lazy(() => import('./crud_team'))
class Team_managment extends React.Component{
    render(){
        const header = {
            width:'100%',
            height:'6%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#0097BC',
            color:'white'
        }
        
        const segmentar_main ={
            display:'flex',
            width:'100%',
            height:'100%',
            flexDirection:'row',
            color:'white',
        }
        const main_derecho = {
            display:'flex',
            width:'20%',
            height:'100%',
            alignItems:'center',
            flexDirection:'column',
            borderLeft: '0.5px solid #43454A',
        }

        const dummy_separator = {
            width:'100%',
            height:'25%',
        }

        const main_izquierdo = {
            display:'flex',
            width:'80%',
            height:'100%',
        }

        return <div className='contiene_managment'>
            <div style={header}>
                    Administración de equipos 
            </div>
            <div style={segmentar_main}>
                <div style={main_izquierdo}>
                    <Crud_Team/>
                    
                </div>
                <div style={main_derecho}>
                    <div style={dummy_separator}></div>
                    <div className='boton_lower_managment'> Equipos</div>
                    <div className='boton_lower_managment'> Jugadores</div>
                    <div className='boton_lower_managment'> Entrenadores</div>
                </div>
                
            </div>
        </div>
    }

}

export { Team_managment  as default} 