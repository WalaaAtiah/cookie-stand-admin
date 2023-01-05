import React from "react";
import { useState } from "react";
import { staticdata } from "./staticdata"

export default function ReportTable() {
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

            <section className="w-full pt-10 text-center shadow-lg shadow-black-50 pb-5 ">
                <p className="mb-3 font-bold text-lg">No Cookie Stands Available</p>
                {/* {data.length > 0 && */}
                <table className="w-11/12 ml-5 mb-5">
                    <thead className="divide-y divide-slate-200">
                        <tr className=" bg-cyan-700 hover:text-white ">
                            <th className="border-[2px] border-gray-200  ">
                                Location
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                6am
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                7am
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                8am
                            </th>
                            <th className="border-[2px] border-gray-200  ">
                                9am
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                10am
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                11am
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                12am
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                1pm
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                2pm
                            </th>
                            <th className="border-[2px] border-gray-200  ">
                                3pm
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                4pm
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                5pm
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                6pm
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                7pm
                            </th>
                            <th className="border-[2px] border-gray-200 ">
                                Total
                            </th>
                        </tr>


                    </thead>
                    <tbody className="divide-y divide-slate-200 mb-5">
                        
                        

                            {staticdata.map((item) => {
                                return (
                                    <tr className="hover:bg-cyan-500  hover:border-[2px] hover:border-gray-200">
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.location}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['6am']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['7am']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['8am']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['9am']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['10am']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['11am']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['12pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['1pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['2pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['3pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['4pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['5pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['6pm']}
                                        </td>
                                        <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                            {item.time_sale['7pm']}
                                        </td>
                                        
                                    </tr>

                                );
                            })}

                    </tbody>


                </table>


                {/* </table> */}




            </section>


        </div>



    )
}