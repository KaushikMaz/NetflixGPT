const ShimmerUI=()=>{
    const arr=Array(7).fill(null)

    return(
        
        <div className="flex ">
        {arr.map((_,index)=><div key={index} className="md:h-64 md:w-44 m-2 bg-gray-300 animate-pulse">
            
        </div>)}

        </div>
    )
}

export default ShimmerUI