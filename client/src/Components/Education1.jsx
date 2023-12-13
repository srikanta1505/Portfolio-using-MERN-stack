import React, { useReducer } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";


const initial=[false,false,false,false]

const reducer=(state,action)=>{
  switch(action.type){
       case "active":
              const updatedButtons = [...state.initial];
              updatedButtons[action.payload] = !updatedButtons[action.payload];
              return { ...state, buttons: updatedButtons };
            default:
              return state;
          }
              
    }
const Education1 = () => {

    const[state,dispatch]=useReducer(reducer,initial)
 
  };

  return (
    <React.Fragment>
      <main className=" bg-slate-800 pb-10 text-white">
        <div className="mx-5 text-3xl text-teal-600 font-semibold">
          Education
        </div>

        <div className=" flex mt-8 mx-20 h-12  bg-black items-center justify-between rounded-xl transform hover:scale-105">
          <div className="pl-10 text-xl"
          onClick={()=>dispatch({type:"active", payload:0})}
          >Post Graduation</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>

        <div className=" flex mt-3 mx-20 h-12  bg-black items-center justify-between rounded-xl ">
          <div className="pl-10 text-xl">Graduation</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>

        <div className=" flex mt-3 mx-20 h-12  bg-black items-center justify-between rounded-xl ">
          <div className="pl-10 text-xl">Intermediate</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>

        <div className=" flex mt-3 mx-20 h-12  bg-black items-center justify-between rounded-xl ">
          <div className="pl-10 text-xl">Schooling</div>
          <button
            onClick={ActiveHandler}
            className="pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Education1;
