import React from "react";
import Card from "./Card"
import Cdata2 from "./Cdata2"
    const Team = () => {
        return (
        <>
           <div className="my-5 text-center mb-5 bg-black" >
          <h1 >Meet Our Team</h1>
          <p className="text-info mb-0 Detail-font ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p className="text-info mb-0 Detail-font ">Quaerat molestiae sint dolores fugit? Officia necessitatibus cum sint sapiente, magni, odit consequuntur.</p>

         </div>
         <div className="container-fluid mb-5">
                <div className="row ">
                <div className="col-10 mx-auto">
                <div className="row gy-4">
                {
                    Cdata2.map((val,ind) => {
                        return <Card key={ind} 
                        imasrc={val.imasrc} 
                        title={val.title} 
                        detail={val.detail}
                        />
                    })
                }
          </div>
          </div>
          </div>
          </div>

         
        </>);
    };
export default Team;    