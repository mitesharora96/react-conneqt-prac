function Buttons({count,setCount}){
    return (
        <>
        <button onClick={()=>{setCount(count+1)}}> Increment</button>
        <button onClick={()=>{setCount(count-1)}}> Decrement</button>
        </>
    )
}
export default Buttons