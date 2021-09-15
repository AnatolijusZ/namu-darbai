
function Pets(props) {
  
    return (
    <div className="small-circle" style={{backgroundColor: props.color, borderRadius: props.r}}>
      {props.color}
      {console.log(props.r)}
    </div>
    );
  }
  export default Pets;