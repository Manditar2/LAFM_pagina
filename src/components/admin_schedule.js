import React, { Suspense }  from 'react';
import { LuSwords } from "react-icons/lu";
import { BsShieldX } from "react-icons/bs";
import { FaPray } from 'react-icons/fa';

class Admin_schedule extends React.Component{

    render(){
        const header = {
            width:'100%',
            height:'8%',
            backgroundColor:'#270101',
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
            width:'40%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column', 
        }
        const dummy_separator = {
            width:'20%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }
        const icon_size = {
            width:'80%',
            height:'60%',
            color:'#666699',
        }

        const swords = {
            width:'30%',
            height:'50%',
            color:'#464555',
        }


        const contiene_team_name = {
            height:'10%',
            marginTop:'5%'
        }

        const contiene_form = {
            width:'100%',
            height:'30%',
            display:'flex',
            flexDirection:'column',
        }
        const form_box = {
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
        }

        const input_boxes = {
            width:'100%',
            height:'40%',
            display:'flex',
            flexDirection:'row',
        }

        
        const contiende_select = {
            width:'40%',
            display:'flex',
            justifyContent:'center',
            height:'100%',
        }
        
        const date_box = {
            width:'20%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        }

        const contiene_submit = {
            display:'flex',
            width:'100%',
            height:'70%',
            justifyContent:'end',
            alignItems:'center',
            marginRight:'15%',
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
                    <LuSwords style={swords}/>
                    </div>
                    <div style={contiene_iconos}>
                    <BsShieldX style={icon_size}/>
                    <div style={contiene_team_name}>JK UNIDOS</div>
                    </div>
                </div>
            </div>
            <div style={contiene_form}>
                <form action="/procesar-formulario" method="post" style={form_box}>
                    <div style={input_boxes}>
                    <div style={contiende_select}>
                    <select id="seleccionarColor" name="color" className='select_formulario'>
                <option value="1">Santiago Bueras</option>
                <option value="2">JK UNIDOS</option>
                <option value="3">JK JUNIORS</option>
                </select>
                </div>
                <div style={date_box}>
                <label for="fecha_encuentro">Fecha</label>
                <input type="date" id="fecha_encuentro" name="fecha_encuentro" className='date_input'></input>
                </div>
                <div style={contiende_select}>
                    <select id="seleccionarColor" name="color" className='select_formulario'>
                    <option value="1">Santiago Bueras</option>
                <option value="2">JK UNIDOS</option>
                <option value="3">JK JUNIORS</option>
                </select>
                </div>
                    </div>
                    <div style={contiene_submit}>
                    <button type="submit" className='boton_schedule_form'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    }
}

export { Admin_schedule  as default} 