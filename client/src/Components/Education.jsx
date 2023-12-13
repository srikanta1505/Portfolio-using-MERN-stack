import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Education = () => {
  const [active, setActive] = useState(false);

  const ActiveHandler = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <main className=" bg-slate-800 pb-10 text-white">
        <div className="mx-5 text-3xl text-teal-600 font-semibold">
          Education
        </div>

        <div className=" flex mt-8 mx-12 md:mx-36 h-12  bg-black items-center justify-between rounded-xl">
          <div className="pl-10 text-xl">Post Graduation</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>

        <div className=" flex mt-3 mx-12 md:mx-36 h-12  bg-black items-center justify-between rounded-xl ">
          <div className="pl-10 text-xl">Graduation</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>

        <div className=" flex mt-3 mx-12 md:mx-36 h-12  bg-black items-center justify-between rounded-xl ">
          <div className="pl-10 text-xl">Intermediate</div>
          <button
            onClick={ActiveHandler}
            className=" pr-5 text-4xl text-teal-600 "
          >
            {active ? <CiCircleMinus /> : <CiCirclePlus />}
          </button>
        </div>

        <div className=" flex mt-3 mx-12 md:mx-36 h-12  bg-black items-center justify-between rounded-xl ">
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

export default Education;
