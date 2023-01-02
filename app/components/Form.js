import React from "react";
import { useState } from "react";


export default function Form() {
    const [location, setlocation] = useState("");
    const [Minimum, setMinimum] = useState("");
    const [Maximum, setMaximum] = useState("");
    const [Average, setAverage] = useState("");
    const [data, setData] = useState([]);

    const Handellocation = (e) => {
        setlocation(e.target.value);
    }
    const HandelMinimum = (e) => {
        setMinimum(e.target.value);
    }
    const HandelMaximum = (e) => {
        setMaximum(e.target.value);
    }
    const HandelAverage = (e) => {
        setAverage(e.target.value);
    }

    const submitHandel = (e) => {
        e.preventDefault();
        const userData = {
            location: location,
            Minimum: Minimum,
            Maximum: Maximum,
            Average: Average,
        };

        console.log(userData);

        setData([...data, userData]);
    };



    return (
        <div className=" mx-60 ">
            <form onSubmit={submitHandel} className="form my-6 8/12 text-center w-full py-10 text-center shadow-lg shadow-black-50 	">
                <h1 className="text-2xl font-semibold pb-5">Cookie Stand Admin</h1>
                <div className="flex flex-col text-sm mb-2">
                    <section>
                        <label for="Location" className="font-bold mb-2 text-gray-800 pr-3 " >Location :</label>
                        <input onChange={Handellocation} type="text" id="Location" name="Location" placeholder="Barcelona " className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg w-9/12" />
                    </section>
                </div>
                <div className="flex text-sm mb-2 pl-16 py-3">
                    <section className="grid mx-3">
                        <label for="MinCPH" className="font-bold">Minimum Customers per Hours</label>
                        <input   className="mt-3" type="number" id="MinCPH" name="MinCPH" placeholder="2 " onChange={HandelMinimum} />
                    </section>
                    <section className="grid mx-3">
                        <label for="MaxCPH" className="font-bold">Maximum Customers per Hours</label>
                        <input  className="mt-3" type="number" id="MaxCPH" name="MaxCPH" placeholder="4 " onChange={HandelMaximum} />
                    </section>
                    <section className="grid mx-3">
                        <label for="Average" className="font-bold">Average Cookies per Sale</label>
                        <input className="mt-3" type="text" id="Average" name="Average" placeholder="2.5" onChange={HandelAverage} />
                    </section>
                    <button type="submit" className="  rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 m-3 ml-10 ">
                        Create
                    </button>
                </div>



            </form>

            <section className="w-full pt-10 text-center shadow-lg shadow-black-50 pb-5 ">
            {data.length == 0 &&<p className="mb-3 font-bold text-lg">Report Table Coming Soon...</p>}
            {data.length > 0 &&<p className="mb-3 font-bold text-lg"> Report Table </p> }
                {data.length > 0 &&
                <table className="w-11/12 ml-5 mb-5">
                    <thead className="divide-y divide-slate-200">
                        <tr className=" bg-cyan-700 hover:text-white ">
                            <th className="border-[2px] border-gray-200  ">
                                Location
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                Minimum Customers per Hour
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                Maximum Customers per Hour
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                Average Cookies per Sale
                            </th>
                        </tr>


                    </thead>
                    <tbody className="divide-y divide-slate-200 mb-5">
                        {data.length > 0 &&
                            data.map((item) => {
                                return (
                                    <tr className="hover:bg-cyan-500  hover:border-[2px] hover:border-gray-200">
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.location}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.Minimum}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.Maximum}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.Average}
                                        </td>
                                    </tr>

                                );
                            })}

                    </tbody>


                </table>}


                {/* </table> */}




            </section>


        </div>



    )
}