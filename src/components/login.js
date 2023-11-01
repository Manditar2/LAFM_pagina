import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

class Login extends React.Component{


    render(){


        const caja_principal = {
            width:'100vw',
            height:'100vh',
            backgroundColor:'#FFFFF',
            display:'flex',
            textAlign:'center',
            justifyContent: 'center',
            flex:'1 1',
        }

        // Título del login
        const titulo_div = {
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            display:'flex',
        }
        
        const contenedor_derecho = {
            backgroundColor:'#ffff',
            height:'100%',
            width:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }

        const contiene_login = {
            width:'65%',
            height:'70%',
            backgroundColor:'#ffff',
            display:'flex',
            flexDirection:'column',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
        }

        
        const icono = {
            width:'20px',
            height:'20px',
            marginTop:'2%',
            marginLeft:'2%',
            marginRight:'2%',
        }
        const git = {
            marginTop:'2%',
            fontWeight:'700'
        }
        const contiene_imagen = {
            width:'100%',
            display:'flex',
            textAlign:'center',
            justifyContent:'center',
            paddingTop:'8%',
            paddingBottom:'5%',
        }

        const texto_informativo = {
            fontSize:'10px',
            color:'#aba9bc',
            width:'80%',
        }

        // Caja que contiene texto abajo del login
        const contiene_informativo = {
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }
        
        const contiene_form = {
            width:'100%',
            height:'100%',
            backgroundColor:'#ffff',
            display:'flex',
            textAlign:'center',
            justifyContent:'center',
            paddingTop:'10%',
        }

        // caja hija de contiene_form
        const formulario = {
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#ffff',
            width:'100%',
        }

        const input_formulario = {
            border:'none',
            outline:'none',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            backgroundColor:'#F9F7FF',
            height:'12%',
            width:'60%',
            display:'block',
            marginLeft:'20%',
            marginBottom:'5%',
        }

        // El botón de Mantener conectado
        const organizar_cajas = {
            width:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            fontSize:'12px',
            color:'#1c3434',
        }
        
        const contiene_checkbox = {
            marginLeft:'10%',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
        }

        const registrate = {
            marginRight:'10%',
            color:'#008bde',
            cursor:'pointer',
        }

        
        return <div style={caja_principal}>
            <div className = "contenedor_login">
                <div className = "contenedor_login_izquierdo">
                    <div style = {titulo_div}>
                    <DiGithubBadge style = {icono} />
                    <div style = {git}>Manditar2</div>
                    </div>
                    <div style ={contiene_imagen}><div className = "imagen_login"> </div></div>
                    <h2>¡Bienvenidos a la Liga!</h2>
                    <div>Club amigos del fútbol de Maipú</div>
                    {/* <h4>Lenguajes de favoritos:</h4>
                    <div>
                        <DiJava style={icono_habilidad}/>
                        <DiPython style={icono_habilidad}/>
                        <DiJavascript style={icono_habilidad} />
                    </div> */}

                </div>
                <div style={contenedor_derecho}>
                    <div style = {contiene_login}>
                        <h2 style = {{color:'#160101'}}>Log in</h2>
                        <div style = {contiene_informativo}><div style = {texto_informativo}>Ingrese con sus credenciales de administrador.</div></div>
                        <div style = {contiene_form}>
                            <form style={formulario}>
                                <input style = {input_formulario} placeholder='Usuario'></input>
                                <input style = {input_formulario} placeholder ='Contraseña' type= "password"></input>
                                    <div style = {organizar_cajas}>
                                        <div style = {contiene_checkbox}>
                                        <input type = "checkbox" id = "keep_conectado"></input>
                                        <label for = "keep_conectado">Mantener conectado</label>
                                        </div>
                                        <div style ={registrate}>Regístrate</div>
                                    </div>
                                <input type = "submit" className = "login_boton_enviar" value = "Acceder"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export { Login  as default} 