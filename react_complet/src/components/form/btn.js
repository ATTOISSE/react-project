export function Button({value,color,onclick}){
    return <>
        <button type="submit" className={`btn btn-${color} mt-3`} onClick={onclick}> {value}</button>
    </>
}