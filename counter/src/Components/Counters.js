// /**
//  * importing the required npm modules
//  * 
//  * @author:Sai karthik
//  */

// // import React, { Component,useState } from 'react';

// // class Counters extends Component {

// //     const [num,setNum]= useState();

// //     const incNum =()=>{
// //         setNum(10);
// //         return;
// //     }




// //     render() {
// //         return (
// //             <>
// //                 <div className="mainpage_div">
// //                     <div className="content_div">
// //                         <h1>{ }</h1>
// //                         <div className="btn_div">
// //                             <button>Incrementt</button>
// //                             <button>Decrementt</button>
// //                         </div>
// //                     </div>
// //                 </div>
                
// //             </>
// //         );
// //     }
// // }


// // export default Counters;


// import React from 'react';

// class Counters extends React.Component {
//     state = { count: 0 }

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     decrement = () => {
//         this.setState({
//             count: this.state.count - 1
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Counter</h2>
//                 <div>
//                     <button onClick={this.decrement}>-</button>
//                     <span>{this.state.count}</span>
//                     <button onClick={this.increment}>+</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Counters;
