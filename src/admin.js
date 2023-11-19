import React, { Suspense }  from 'react';
import { RiAdminFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";



const Admin_schedule = React.lazy(() => import('./components/admin_schedule'))
class Admin extends React.Component{

    render(){

        const principal_box = {
            width:'100%',
            height:'100vh',
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#F8F8FF',
        }
        
        const lateral_bar = {
            width:'20%',
            height:'100%',
            backgroundColor:'#002278',
            display:'flex',
            flexDirection:'column',
        }

        const header_lateral = {
            width:'100%',
            height:'15%',
            display:'flex',
            backgroundColor:'#718AF4',
            flexDirection:'row',
        }

        const contain_icon_header = {
            width:'40%',
            height:'100%',
            backgroundColor:'#0072B4',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

        }

        const icon_style_header = {
            width:'50%',
            height:'50%',
            color:'#FFFADE'

        }

        const contain_title_header = {
            width:'60%',
            height:'100%',
            backgroundColor:'#0072B4',
            display:'flex',
            alignItems:'center',
            color:'#FAF7FF',
        }


        const upper_body = {
            width:'100%',
            height:'7%',
            backgroundColor:'#002278',
            display:'flex',
            alignItems:'center',
            color:'#FAF7FF',
            flexDirection:'row',
            borderBottom: '1px solid #F9735A',
        }

        const contain_upperBody_title = {
            width:'95%',
            marginLeft:'5%',
        }
        
        const lower_body = {
            width:'100%',
            height:'100%',
            display:'flex: 1 1',
            flexDirection:'column',
        }

        const calendario_icon = {
            color:'#FFB551',
            width:'20px',
            height:'20px',
        }
        const footbal_icon = {
            color:'#A60000',
            width:'20px',
            height:'20px',
        }

        const team_icon = {
            width:'20px',
            height:'20px',
            color:'#0097BC'
        }
        
        const photo_icon = {
            width:'20px',
            height:'20px',
            color:'#DA1D67'
        }

        const dummy_separator = {
            width:'100%',
            height:'60%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'end'
        }


        const body_box = {
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100%',
        }


        return <div style={principal_box}>
            <div style = {lateral_bar}>
                <div style={header_lateral}>
                    <div style = {contain_icon_header}>
                    <RiAdminFill style={icon_style_header}/>
                    </div>
                    <div style = {contain_title_header}>
                        <h5>Panel administrador</h5>
                    </div>
                </div>
                <div style={upper_body}>
                    <div style={contain_upperBody_title}>
                        Menú
                    </div>
                    </div>
                    <div style={lower_body}>
                        <div className='boton_lower_body'>
                            <div className='left_boton_lowerBody'>
                            <FaCalendarAlt style={calendario_icon}/>
                            </div>
                            <div className='right_boton_lowerBody'>
                                Programar partido
                            </div>
                        </div>

                        <div className='boton_lower_body'>
                        <div className='left_boton_lowerBody'>
                            <IoFootballOutline style={footbal_icon}/>
                        </div>
                        <div className='right_boton_lowerBody'>
                               Agregar resultado
                            </div>
                        </div>
                        
                        <div className='boton_lower_body'>
                        <div className='left_boton_lowerBody'>
                            <RiTeamLine style={team_icon}/>
                        </div>
                        <div className='right_boton_lowerBody'>
                               Adminstrar equipos
                        </div>

                        </div>
                        <div className='boton_lower_body'>
                        <div className='left_boton_lowerBody'>
                            <MdAddAPhoto style={photo_icon}/>
                        </div>
                        <div className='right_boton_lowerBody'>
                               Agregar momentos
                        </div>
                        
                        </div>
                        
                    <div style={dummy_separator}>  
                    <div className='boton_end_body'>
                    <div className='left_boton_lowerBody'>
                            Salir
                        </div>
                    </div>
                    </div>
                    </div>

            </div>
            <div style={body_box}>
                <Admin_schedule/>
            </div>
        </div>
    }
}

export { Admin  as default} 