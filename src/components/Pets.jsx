
function Pets(props) {
  
    return (
    <div className="small-circle" style={{backgroundColor: props.color}}>
      {props.color}
    </div>
    );
}
    export default Pets;