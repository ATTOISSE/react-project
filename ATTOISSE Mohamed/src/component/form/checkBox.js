export function CheckBox({id,checked,onChange,label}) {
   return <div className="form-check">
    <input type="checkbox"
        className="form-check-input" 
        value={checked}
        onChange={(e)=> onChange(e.target.checked)}
    />
    <label htmlFor={id} className="form-check-label">{label}</label>
   </div> 
}