import { Person } from './Person'

const ListComp = ({readList}) => {
  return (
    <div>
        {readList.map((e)=> <Person {...e} key={e.id}/>)}
    </div>
  )
}
export default ListComp;
