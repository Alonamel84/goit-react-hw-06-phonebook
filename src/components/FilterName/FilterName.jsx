import s from '../FilterName/FilterName.module.css'
import PropTypes from 'prop-types';
import { filterContact } from '../../redux/actions';
import { connect } from 'react-redux';
const FilterName = ({ onChange }) => {
    return(
        <>
            <label className={ s.label}>
          Find contacts by name
                <input name='filter'
            type="text"
            placeholder="Enter name"
            onChange={onChange}
            
            ////-----REACT VERSION-----///
            // value={value}
            //  onChange={onChange}
            //------------------------//                     
          />
    </label >
         
   </>
    )
};

const mapDispatchToProps = {
  filterContact,
};
export default connect(null, mapDispatchToProps)(FilterName);
FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
