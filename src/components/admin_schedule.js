import React, { Suspense }  from 'react';
import { BsShieldX } from "react-icons/bs";
import { FaPray } from 'react-icons/fa';

class Admin_schedule extends React.Component{

    render(){
        const header = {
            width:'100%',
            height:'8%',
            backgroundColor:'#151500',
            color:'white',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }

        const body_scheduler ={
            width:'100%',
            height:'62%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
        }
        const contiene_body_iconos = {
            width:'100%',
            height:'70%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center'
        }
        const contiene_iconos ={
            width:'45%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column', 
        }
        const dummy_separator = {
            width:'10%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
        const icon_size = {
            width:'80%',
            height:'60%',
            color:'#787867',
        }

        const contiene_team_name = {
            height:'10%',
            marginTop:'5%'
        }

        const contiene_form = {
            width:'100%',
            height:'30%',
            backgroundColor:'blue',
            display:'flex',
        }
        

        return <div className='contiene_schedule'>
            <div style={header}>
                Programar partido
            </div>
            <div style={body_scheduler}>
                <div style={contiene_body_iconos}>
                    <div style={contiene_iconos}>
                    <BsShieldX style={icon_size}/>
                    <div style={contiene_team_name}>Santiago Bueras</div>
                    </div>
                    <div style={dummy_separator}>
                        Se enfrentan
                    </div>
                    <div style={contiene_iconos}>
                    <BsShieldX style={icon_size}/>
                    <div style={contiene_team_name}>JK UNIDOS</div>
                    </div>
                </div>
            </div>
            <div style={contiene_form}>
                <form>
                    
                </form>
            </div>
        </div>
    }
}

export { Admin_schedule  as default} 