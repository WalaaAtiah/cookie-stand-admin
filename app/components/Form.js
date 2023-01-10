import React from "react";
import { useState, useContext } from "react";
import axios from 'axios'
import { AuthContext } from "../Context/Auth";
import useSWR from 'swr'


export default function Form() {
    const [location, setlocation] = useState("");
    const [Minimum, setMinimum] = useState("");
    const [Maximum, setMaximum] = useState("");
    const [Average, setAverage] = useState("");
    const [Owner, setOwner] = useState(0);
    const { tokens, username } = useContext(AuthContext);

    console.log(username=="Walaa")
    const config = {
        headers: {
            'Authorization': `Bearer ${tokens.access}`
        }
    }
    const url = "https://cookie-w-a.herokuapp.com/api/v1/cookie_stands/"; // the server url

    const fetcher = url => axios.get(url, config).then(res => res.data);
    // console.log("fetcher",fetcher)

    const { data, error, isLoading } = useSWR(url, fetcher);

    console.log(data);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    //for handeler the username 
    // if (username=="Walaa"){
    //     setOwner(2)
    // }else{
    //     setOwner(1)
    // }
    // console.log(Owner)

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

    const submitHandel = async (e) => {
        e.preventDefault();
        const userData = {
            location: location,
            "description": "test2",
            "hourly_sales": {
                "test2": "test"
            },
            minimum_customers_per_hour: Minimum,
            maximum_customers_per_hour: Maximum,
            average_cookies_per_sale: Average,
            "owner": 2
        };

        // console.log(data);

        axios.post(url, userData, config).then(res => res.data).catch(function (error) {
            console.log(error);
        });




    };
    const deleteHandeler = (id) => {
        console.log('deleteHandeler', id, url + id.toString())
        axios.delete(url + id.toString(), config).then(res => res.data).catch(function (error) {
            console.log(error);
        });

    }



    return (
        <div className="py-10 mx-60">
            <form onSubmit={submitHandel} className="w-full py-10 mb-6 text-center shadow-lg form 8/12 shadow-black-50 border-[#3FA4B0] border-2  shadow-[0_1px_1px_2px_rgba(250,250,250,0.1)] dark:border-[#3FA4B0] dark:border-2 rounded-xl dark:shadow-[0_1px_1px_1px_rgba(250,250,250,0.1)] dark:text-[#579ca5]">
                <h1 className="pb-5 text-2xl font-semibold">Cookie Stand Admin</h1>
                <div className="flex flex-col mb-2 text-sm">
                    <section>
                        <label for="Location" className="pr-3 mb-2 font-bold text-gray-800 dark:text-[#579ca5] " >Location :</label>
                        <input onChange={Handellocation} type="text" id="Location" name="Location" placeholder="Barcelona " className="w-9/12 p-2 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-gray-500" />
                    </section>
                </div>
                <div className="flex py-3 pl-16 mb-2 text-sm">
                    <section className="grid mx-3">
                        <label for="MinCPH" className="font-bold">Minimum Customers per Hours</label>
                        <input className="mt-3 dark:text-[#0c1314]" type="number" id="MinCPH" name="MinCPH" placeholder="2 " onChange={HandelMinimum} />
                    </section>
                    <section className="grid mx-3">
                        <label for="MaxCPH" className="font-bold">Maximum Customers per Hours</label>
                        <input className="mt-3 dark:text-[#0c1314]" type="number" id="MaxCPH" name="MaxCPH" placeholder="4 " onChange={HandelMaximum} />
                    </section>
                    <section className="grid mx-3">
                        <label for="Average" className="font-bold">Average Cookies per Sale</label>
                        <input className="mt-3 dark:text-[#0c1314]" type="text" id="Average" name="Average" placeholder="2.5" onChange={HandelAverage} />
                    </section>
                    <button type="submit" className="px-4 py-2 m-3 ml-10 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Create Stand
                    </button>
                </div>



            </form>

            <section className="w-full pt-10 pb-5 text-center shadow-[0_1px_1px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_1px_1px_rgba(250,250,250,0.1)] dark:text-[#c2dcdc] ">
                {data.length == 0 && <p className="mb-3 text-lg font-bold">Report Table Coming Soon...</p>}
                {data.length > 0 && <p className="mb-3 text-lg font-bold"> Report Table </p>}
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
                                <th className="border-[2px] border-gray-200 ">
                                    Delete
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
                                                {item.minimum_customers_per_hour}
                                            </td>
                                            <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                                {item.maximum_customers_per_hour}
                                            </td>
                                            <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                                {item.average_cookies_per_sale} 
                                            </td>
                                            <td className="border-[1px] border-cyan-700 hover:border-gray-200">
                                                { username=="Walaa" && (item.owner == 2 || !item.owner ) && <svg onClick={() => deleteHandeler(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>}
                                                { username=="Amani" && (item.owner == 1 || !item.owner ) && <svg onClick={() => deleteHandeler(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>}
                                               


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