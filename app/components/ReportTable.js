import React from "react";
import { useState } from "react";
import { staticdata } from "./staticdata"
import { useLocationTotal } from '../CustomHook/total';


export default function ReportTable() {
    const total = useLocationTotal(staticdata)

    const [flage, setFlage] = useState(false)

    const onClickHandler = () => {
        setFlage(true)
        // e.preventDefault();
    }


    return (
        <div className=" mx-60">

            <section className="w-full pt-10 pb-5 text-center shadow-lg shadow-black-50 dark:text-[#9ab9bc]">
            <button type="button" onClick={onClickHandler} className="px-4 py-2 m-3 ml-10 text-white bg-blue-500 rounded hover:bg-blue-600">
                        OverView
                    </button>
                {!flage &&<p className="mb-3 text-lg font-bold">No Cookie Stands Available</p>}
                {/* {data.length > 0 && */}
                {flage &&<table className="w-11/12 mb-5 ml-5">
                    <thead className="divide-y divide-slate-200 dark:text-black">
                        <tr className=" bg-cyan-700 hover:text-white">
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
                                12pm
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
                    <tbody className="mb-5 divide-y divide-slate-200">



                        {staticdata.map((item) => {
                            return (
                                <tr className="hover:bg-cyan-500  hover:border-[2px] hover:border-gray-200 dark:hover:text-black">
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
                                    <td className=" bg-slate-200 font-bold border-[1px] border-cyan-700 hover:border-gray-200 dark:text-black dark:bg-slate-400">
                                        {total[item.location]}
                                    </td>

                                </tr>

                            );
                        })}
                        <tr className=" bg-slate-200 hover:bg-cyan-500  hover:border-[2px] hover:border-gray-200 dark:text-black dark:bg-slate-400 dark:hover:bg-cyan-500 ">
                            <td className=" font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                Total
                            </td>
                            <td className=" font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["6am"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["7am"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["8am"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["9am"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["10am"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["11am"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["12pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["1pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["2pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["3pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["4pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["5pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["6pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["7pm"]}
                            </td>
                            <td className="font-bold border-[1px] border-cyan-700 hover:border-gray-200">
                                {total["total"]}
                            </td>

                        </tr>

                    </tbody>
                    


                </table>}


                {/* </table> */}




            </section>

            <section className="w-full pt-10 pb-5 shadow-lg shadow-black-50 dark:text-[#829c9e]">

            {!flage &&<h2 className="ml-8"> 0 Locations World Wide </h2>}
            {flage &&<h2 className="ml-8"> 8 Locations World Wide </h2>}

            
            
            
            </section>



        </div>



    )
}