import React, {Suspense} from 'react';

const MyTable = React.lazy(() => import('./tabla'))

class Calendario extends React.Component{

    render(){
        const body_page = {
            width:'100%',
            height:'100%',
            backgroundColor:'#FEFEFE',
            display:'flex',
            borderRadius:'5px',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'cener',
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
        
        return <div style={body_page}>
            <div style = {contiene_titulo}>
            <div className='titulo_main'>Revisa los próximos encuentros</div>
            </div>
            <div className='contiene_tabla'>
            <Suspense fallback = {<div> Loading ..</div>}>
                <MyTable/>
            </Suspense>
            </div>
        </div>
    }
    




}

export { Calendario  as default} 