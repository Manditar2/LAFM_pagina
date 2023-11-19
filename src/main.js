import React, { Suspense }  from 'react';
import {IoLogIn} from "react-icons/io5";



const Main_body = React.lazy(() => import('./components/main_body'))
const Calendario = React.lazy(() => import('./components/calendario'))
class Main_page extends React.Component{

    constructor(props){
        super(props);
        // 0: main, 1: calendario: 2: tabla, else: main.
        this.state = {
            ruta: 0,
        }
        this.renderizar_componentes = this.renderizar_componentes.bind(this)
    }

    renderizar_componentes(){
        if(this.state.ruta === 0){
            return (<Main_body/>)
        }
        else if(this.state.ruta == 1){
            return (<Calendario/>)
        }
    }

    seleccionar_ruta(value){
        this.setState({ruta: value})
    }


    render(){
        const caja_principal = {
            width:'100%',
            height:'170vh',
            backgroundColor:'#F8F8FF',
            display:'flex',
            flex:'1 1',
            flexDirection:'column',
        }

        const navbar = {
            width:'100%',
            height:'55px',
            backgroundColor:'#000E00',
            padding:'0',
            margin:'0',
            border:'0',
        }
        const separa = {
            width:'100%',
            height:'100%',
            displayDirection:'row',
            display:'flex',
            justifyContent:'space-between',
        }
        const contiene_icono = {
            display:'inline-block',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'5px',

        }
        const icono_login = {
            width:'30px',
            height:'35px',
            marginRight:'15px',
            color:'#BBC3BB',
        }

        const link = {
            textDecoration:'none',
            color:'#BBC3BB',
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            font:'20px',
        }
        
        const banner = {
            height:'30%',
            width:'100%',
            background: 'inherit',
            display:'flex',
            alignItems:'end',
            zIndex:'10'
        }
        
        const logo_titulo = {
            height:'200px',
            width:'100%',
            backgroundColor:'inherit',
        }
        
        
        const body_page = {
            width:'100%',
            height:'80%',
            backgroundColor:'#FEFEFE',
            display:'flex',
            borderRadius:'5px',
            zIndex:'3',
        }
        return <div style={caja_principal}>
            <div style={navbar}>
                <div style={separa}>
                <div className='contiene_botones'>
                    <div className='boton_navbar' onClick = { () => {this.seleccionar_ruta(0)} } >
                        <a style={link}>Inicio</a>
                        </div>
                    <div className='boton_navbar'><a href="#" style={link}>Posiciones</a></div>
                    <div className='boton_navbar'><a href="#" style={link}>Miembros</a></div>
                    <div className='boton_navbar' onClick = { () => {this.seleccionar_ruta(1)}} >
                        <a style={link}>Calendario</a>
                        </div>
                    <div className='boton_navbar'><a href="#" style={link}>Contacto</a></div>
                </div>
                <div className='boton_navbar_login'>
                    <div style={contiene_icono}><IoLogIn style={icono_login}/></div></div>

                </div>
            </div>
                <div className='caja_fondo'>
                <div style={banner}>
                <div style={logo_titulo}>
                    <div className='imagen_logo_titulo'>
                    </div>
                </div>
                </div>
                <div style={body_page}>
                    <Suspense fallback = {<div> Loading ..</div>}>
                    {this.renderizar_componentes()}
                    </Suspense>
                </div>
                </div>
        </div>
    }
}

export { Main_page  as default} 