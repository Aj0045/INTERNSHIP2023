function Details(props){
    return(
        <div>
            <h1>Hello,{props.name}</h1>
        </div>
    );
}
function Multipledata(props){
    return(
        <div>
            <h4>Hello,{props.name} your email is:{props.email}</h4>
        </div>
    );
}

export default Details;
export {Multipledata};