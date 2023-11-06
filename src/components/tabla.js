import React, { Component } from 'react';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1, // initial page
      loading: false,
      mappedData: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }


  loadData = () => {
    this.setState({ loading: true });
    fetch('http://127.0.0.1:8000/routes/all_matchs')
      .then((response) => response.json())
      .then((newData) => {
        const mappedData = newData.map(item => ({
            partido_id: item.partido_id,
            id_local: item.id_local__team_name,
            id_visita: item.id_visita__team_name,
            date: item.date,
            goles_local: item.goles_local,
            goles_visita: item.goles_visita
          }));
          console.log(mappedData)

          this.setState({
            loading: false,
            mappedData: mappedData  // Asigna los datos mapeados al estado
          })
      }
      )
      .catch((error) => {
        console.log(error)
      });
  };

  render() {
    const contiene_tabla = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }

    const contiene_titulo = {
        width:'100%',
        height:'40%',
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    }
    const contiene_thead = {
        backgroundColor:'blue',
        
    }
    return (
      <div style={contiene_tabla}>
        <h3>Proximos partidos</h3>
        <table style={contiene_titulo}>
          <thead style={contiene_thead}>
            <tr>
              <th>Local</th>
              <th>Visita</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mappedData.map((item) => (
              <tr key={item.partido_id}>
                <td>{item.id_local}</td>
                <td>{item.id_visita}</td>
                <td>{item.date}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
        {this.state.loading && <div>Loading more data...</div>}
        {console.log(this.state.mappedData)}
        {console.log("uwu")}
      </div>
    );
  }
}

export default MyTable;