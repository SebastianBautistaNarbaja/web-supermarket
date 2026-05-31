interface Props{
    onFilter : (category : number) => void
}

export default function CategoryFilter({onFilter} : Props){
    return(
        <ul className="flex gap-5 justify-center">
            <li className="border rounded-lg p-4" onClick={()=> onFilter(0)}>todos</li>
            <li className="border rounded-lg p-4" onClick={()=> onFilter(1)}>Fruits</li>
            <li className="border rounded-lg p-4" onClick={()=> onFilter(2)}>HomeAppliances</li>
            <li className="border rounded-lg p-4" onClick={()=> onFilter(3)}>PersonalCare</li>
            <li className="border rounded-lg p-4" onClick={()=> onFilter(4)}>Pets</li>
        </ul>
    )
}