
export function useLocationTotal(staticdata){
    const total ={
        "6am":0,
        "7am":0,
        "8am":0,
        "9am":0,
        "10am":0,
        "11am":0,
        "12pm":0,
        "1pm":0,
        "2pm":0,
        "3pm":0,
        "4pm":0,
        "5pm":0,
        "6pm":0,
        "7pm":0,
        "total":0

    }
    
    staticdata.map((item) => {
        total[item.location] = item.time_sale["6am"]+item.time_sale["7am"]+item.time_sale["8am"]+item.time_sale["9am"]+item.time_sale["10am"]+item.time_sale["11am"]+item.time_sale["12pm"]+item.time_sale["1pm"]+item.time_sale["2pm"]+item.time_sale["3pm"]+item.time_sale["4pm"]+item.time_sale["5pm"]+item.time_sale["6pm"]+item.time_sale["7pm"]
        total["6am"] += item.time_sale["6am"]
        total["7am"] += item.time_sale["7am"]
        total["8am"] += item.time_sale["8am"]
        total["9am"] += item.time_sale["9am"]
        total["10am"] += item.time_sale["10am"]
        total["11am"] += item.time_sale["11am"]
        total["12pm"] += item.time_sale["12pm"]
        total["1pm"] += item.time_sale["1pm"]
        total["2pm"] += item.time_sale["2pm"]
        total["3pm"] += item.time_sale["3pm"]
        total["4pm"] += item.time_sale["4pm"]
        total["5pm"] += item.time_sale["5pm"]
        total["6pm"] += item.time_sale["6pm"]
        total["7pm"] += item.time_sale["7pm"]
        total["total"]+=total[item.location]
        return ( 
             total  
        )})

        return total
    //write the function that you want


}
export default useLocationTotal 