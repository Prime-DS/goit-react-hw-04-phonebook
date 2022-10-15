
export default function ContactList({items,removeContacts}) {
    // console.log(items)
    const elements = items.map(({name,number,id}) => {
        return <li key={id}>{name} tel:{number} <button onClick={()=>removeContacts(id)}>Delete</button></li>
    })
  return (
    <ol>{elements}</ol>
  )
}
