
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

export function RaceSearch({onSearchChange,search}){
    return <div className="my-3">
      <Input value={search} onChange={onSearchChange}  placeholder="Rechercher..." />
  </div>
}
