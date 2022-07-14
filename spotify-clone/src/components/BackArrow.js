import { useHistory } from 'react-router-dom'

const BackArrow = () => {
    const history = useHistory();

    const handlePrevious = () => {
        history.go(-1);
    }
    return (
        <div className="backarrow">
            <button onClick={handlePrevious}><i className="backarrow-left"></i></button>
        </div>
    );
}
 
export default BackArrow;