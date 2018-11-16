// import React, { Component } from 'react';

// const Ninjas = (props) => {

//     const { ninjas, deleteNinja } = props;
//     const ninjaList = ninjas.map( ninja => {
//         return ninja.age > 28 ? (
//             <div key={ninja.id} className="ninja">
//                 <div>Name: {ninja.name}</div>
//                 <div>Age: {ninja.age}</div>
//                 <div>Belt: {ninja.belt}</div>
//                 <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
//             </div>
//         ) : null
//     });

//     return ( 
//         <div className="ninja-list">
//             { ninjaList }
//         </div>
//         );
// }

// export default Ninjas;



import React, { Component } from 'react';

class Ninjas extends Component {
    state = {  }

    render() { 

    // const { ninjas, deleteNinja } = this.props;
    // const ninjaList = ninjas.map( ninja => {
    //  (
    //     <div key={ninja.id} className="ninja">
    //         <div>Name: {ninja.name}</div>
    //         <div>Age: {ninja.age}</div>
    //         <div>Belt: {ninja.belt}</div>
    //         <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
    //     </div>
    // ) 
    // });

        return ( 
            <div>
                {this.props.ninjas.map(n => {
                    return(
                        <div className="ninja" key={n.id}>
                            <div>{n.name}</div>
                            <div>{n.age}</div>
                            <div>{n.belt}</div>
                            <button onClick={ () => {this.props.deleteNinja(n.id)}}> Delete </button>
                        </div>
                     )
                })}
            </div>
         );
    }
}
 
export default Ninjas;