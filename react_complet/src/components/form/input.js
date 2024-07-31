export function Input({value,placeholder,onChange,name}){
    return <div>
    <input type="text" 
        value={value || ''}
        className="form-control "
        name={name}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
    />
    </div>
}