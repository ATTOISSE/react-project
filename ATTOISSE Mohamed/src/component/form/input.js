/**
 * 
 * @param {string} value 
 * @param {string} placeholder 
 */
export function Input({value,onChange,placeholder}) {
    return <div>
        <input type="text" 
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e)=> onChange(e.target.value)}
        />
    </div>
}