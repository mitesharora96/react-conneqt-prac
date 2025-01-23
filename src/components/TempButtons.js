function TempButtons({count,setCount}){
    return(
        <>
        <button className="tempButtons" onClick={()=>{setCount(count-1)}}> <span>-</span></button>
        <button className="tempButtons" onClick={()=>{setCount(count+1)}}> <span>+</span></button>

        </>
    )
}
export default TempButtons