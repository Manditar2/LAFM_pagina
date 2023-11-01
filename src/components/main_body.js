import React from 'react';

class Main_body extends React.Component{

    render(){
        const body_page = {
            width:'100%',
            height:'100%',
            backgroundColor:'#FEFEFE',
            display:'flex',
            borderRadius:'5px',
            flexDirection:'column',
            zIndex:'3',
        }
        
        const contiene_titulo = {
            width:'100%',
            height:'10%',
            display:'flex',
            justifyContent:'center',
            paddingTop:'20px',
            fontSize:'40px',
            fontWeight:'550',
            color:'#000E00',
        }
        const descripción = {
            width:'100%',
            height:'10%',
            display:'flex',
            justifyContent:'center',
            paddingTop:'20px',
            color:'#000E00',
        }
        const contiene_captions = {
            width:'100%',
            height:'90%',
            display:'flex',
            flexDirection:'row',

        }
        const contiene_info_partido = {
            width:'50%',
            height:'100%',
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
        }

        const equipos = {
            
        }



        return <div style={body_page}>
                <div style={contiene_titulo}>
                    <div className='titulo_main'>¡Bienvenidos a la Liga!</div>
                </div>
                <div style={descripción}>
                </div>
                <div style={contiene_captions}>
                    <div className='caption'>
                        <div className='tit_caption'>
                            ¡Únete a la Liga!
                        </div>
                        <div className='info_caption'> Esta iniciativa partió juntando tan solo a un grupo de amigos,
                        ahora somos más de 200 personas jugando en el mayor campeonato de maipú. </div>
                    </div>
                    <div style={contiene_info_partido}>
                    <div className='info_partido'> Próximo encuentro </div>
                    <div>
                        Redacted vs Redacted
                    </div>
                    </div>

                </div>
        </div>
    }

}
export { Main_body  as default} 