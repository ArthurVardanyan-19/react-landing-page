import { useSelector} from 'react-redux';

function Div(){
    const x = useSelector(state=>state.name);
    return(
        <div>
            {x}
        </div>
    )
}

export default Div;