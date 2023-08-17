export const Filter = ({phoneFilter, changeFilter}) => {
    return (
        <>
        <label >Find contacts by name
        <input value={phoneFilter} onChange={e => changeFilter(e.target.value)}  />
        </label>
        </>
    )
}