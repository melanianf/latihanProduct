import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Product from './Product';


// function selamatDatang(mahasiswa){
//     if(mahasiswa.angkatan < 2019){
//         return "Selamat datang maba" + mahasiswa.nama;
//     }
//     else{
//         return "....";
//     }
// }

// // function getNama(mahasiswa){
// //     return "Nama : " + mahasiswa.nama + "NIM : " + mahasiswa.nim;
// // }

// const mahasiswa = {
//     nama : "melani",
//     nim : "17410846",
//     angkatan : "2018"
// }

// const element = (
//     <h1>
//         Mahasiswa, {getNama(mahasiswa)}
//     </h1>
// );

// function tick() {
    //     const element = (
    //       <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //       </div>
    //     );
    //     ReactDOM.render(element, document.getElementById('root'));
    //   }
      
    //   setInterval(tick, 1000);

// ReactDOM.render(element, document.getElementById('root'));
    
  
/**
 * component and props
*/

    // function Product(props){
    //     return (<div><h1>{props.judul}</h1><h3>{Props.harga}</h3></div>)
    // }
    // ReactDOM.render(<Product judul = 'Power Bank' harga = '100.000'/>, document.getElementById('root'));

    //atau
    //const element = <Product judul = 'Power Bank' harga = 'Rp. 100.000'/>;

    //ReactDOM.render(<element, document.getElementById('root'));

    // class Product extends React.Component{
    //     render(){
    //         return(<div><h1>{this.props.judul}</h1><h3>Rp.{this.props.harga}</h3></div>)
    //     }
    // }

    // ReactDOM.render(<Product judul = 'Power Bank' harga = '100.000'/>, document.getElementById('root'));

    const element = <Product judul ="Powerbank from Product.js" harga ="100.000 from Product.js"/>;

    ReactDOM.render(element, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
