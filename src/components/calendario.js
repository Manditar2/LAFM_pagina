/*import React, {Suspense} from 'react';

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

export { Calendario  as default} */

import React from 'react';
import { Suspense } from 'react';

class Main_body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        partidos: [] // Asegúrate de inicializar correctamente tu estado
        };
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/routes/schedule')
        .then(response => response.json())
        .then(data => {
            this.setState({
                partidos: data,
            })
        })
    }
    renderPartidosPorSemana(matchweekData) {
            return matchweekData.map(partido => (
            <div key={partido.match_id}>
                {partido.played ? (<p>{partido.team1__name} {partido.score1} - {partido.score2} {partido.team2__name}</p>
    ) : (
        <p>{partido.team1__name} - {partido.team2__name} | {partido.date} {partido.hour}</p>
    )}
            </div>
            ));
        }
    render() {
        const { partidos } = this.state;
        // Verifica si partidos existe antes de mapear
        if (!partidos) {
        return <div>Cargando...</div>;
        }

        // Agrupa los partidos por matchweek
        const partidosPorSemana = partidos.reduce((acc, partido) => {
        const { matchweek } = partido;
        if (!acc[matchweek]) {
            acc[matchweek] = [];
        }
        acc[matchweek].push(partido);
        return acc;
        }, {});

        return (
        <div>
            {Object.keys(partidosPorSemana).map(matchweek => (
            <div key={matchweek}>
                <h2>Fecha {matchweek}</h2>
                {this.renderPartidosPorSemana(partidosPorSemana[matchweek])}
            </div>
            ))}
        </div>
        );
    }

}

export { Main_body  as default} 