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
        <div className="py-10 mx-60">
            <form onSubmit={submitHandel} className="w-full py-10 mb-6 text-center shadow-lg form 8/12 shadow-black-50 border-[#3FA4B0] border-2  shadow-[0_1px_1px_2px_rgba(250,250,250,0.1)] dark:border-[#3FA4B0] dark:border-2 rounded-xl dark:shadow-[0_1px_1px_1px_rgba(250,250,250,0.1)] dark:text-[#579ca5]">
                <h1 className="pb-5 text-2xl font-semibold">Cookie Stand Admin</h1>
                <div className="flex flex-col mb-2 text-sm">
                    <section>
                        <label for="Location" className="pr-3 mb-2 font-bold text-gray-800 " >Location :</label>
                        <input onChange={Handellocation} type="text" id="Location" name="Location" placeholder="Barcelona " className="w-9/12 p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-gray-500" />
                    </section>
                </div>
                <div className="flex py-3 pl-16 mb-2 text-sm">
                    <section className="grid mx-3">
                        <label for="MinCPH" className="font-bold">Minimum Customers per Hours</label>
                        <input   className="mt-3 dark:text-[#0c1314]" type="number" id="MinCPH" name="MinCPH" placeholder="2 " onChange={HandelMinimum} />
                    </section>
                    <section className="grid mx-3">
                        <label for="MaxCPH" className="font-bold">Maximum Customers per Hours</label>
                        <input  className="mt-3 dark:text-[#0c1314]" type="number" id="MaxCPH" name="MaxCPH" placeholder="4 " onChange={HandelMaximum} />
                    </section>
                    <section className="grid mx-3">
                        <label for="Average" className="font-bold">Average Cookies per Sale</label>
                        <input className="mt-3 dark:text-[#0c1314]" type="text" id="Average" name="Average" placeholder="2.5" onChange={HandelAverage} />
                    </section>
                    <button type="submit" className="px-4 py-2 m-3 ml-10 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Create
                    </button>
                </div>



            </form>

            <section className="w-full pt-10 pb-5 text-center shadow-[0_1px_1px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_1px_1px_rgba(250,250,250,0.1)] dark:text-[#c2dcdc] ">
            {data.length == 0 &&<p className="mb-3 text-lg font-bold">Report Table Coming Soon...</p>}
            {data.length > 0 &&<p className="mb-3 text-lg font-bold"> Report Table </p> }
                {data.length > 0 &&
                <table className="w-11/12 mb-5 ml-5">
                    <thead className="divide-y divide-slate-200">
                        <tr className=" bg-cyan-700 hover:text-white dark:hover:text-black">
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
                    <tbody className="mb-5 divide-y divide-slate-200 ">
                        {data.length > 0 &&
                            data.map((item) => {
                                return (
                                    <tr className="hover:bg-cyan-500  hover:border-[2px] hover:border-gray-200 dark:hover:bg-cyan-800">
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