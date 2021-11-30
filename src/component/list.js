const List = (props) => {
  const listData = props.data;
  console.log(listData)
  return (
    <div>
      <ol>
        {listData && listData.map((item,index) => (
          <li key={index}>
            <a href={item.url} target="_blank">{item.name}</a>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default List