import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";
    const Services = () => {
        return (
        <>
         <div className="my-5 mb-5 bg-black" >
          <h1 className="text-center">Our Services</h1>

         </div>
         <div className="container-fluid mb-5">
                <div className="row ">
                <div className="col-10 mx-auto">
                <div className="row gy-4">
                {
                    Cdata.map((val,ind) => {
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
export default Services;    