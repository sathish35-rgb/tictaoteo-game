import { FaTimes, FaPen,FaRegCircle }  from "react-icons/fa";
const  Icon = (props) => {
    if(props.icon == "circle"){
        return <FaRegCircle />
    }
    else if(props.icon == "cross"){
        return <FaTimes />
    }
    else{
        return <FaPen />
    }

}




export default Icon;