import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [datas, setDatas] = useState([])
  
  useEffect(() => {
    axios.get("https://api.currencyfreaks.com/v2.0/rates/latest", {
      params: {
        'apikey' : 'ba6ea4503ac14ffcb28ae9d37309cc24',
        'symbols' : 'CAD,EUR,IDR,JPY,CHF,GBP'
      }
    })
    .then(res => {
      setDatas(res.data.rates)
    })
  }, [])

  return (
    <div className="container">
      <div className="box">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
          {
            Object.entries(datas).map(([uang,nilaiuang], index) => (
              <tr key={index}>
                <td>{uang}</td>
                <td>{parseFloat(nilaiuang) + parseFloat((nilaiuang * 0.05))}</td>
                <td>{nilaiuang}</td>
                <td>{parseFloat(nilaiuang) - parseFloat((nilaiuang * 0.05))}</td>
              </tr>
            ))
          }
          
          </tbody>
        </table>
        <div className="copyright">
          <p>Rate are based from 1 USD</p>
          <p>Copyright M Jidan Ilham Ichlasul Amal</p>
          <p>This application uses API from https://currencyfreaks.com</p>
        </div>
      
      </div>
    </div>
  );
}

export default App;
