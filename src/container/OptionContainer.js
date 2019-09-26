import { connect } from 'react-redux'
import Options from '../component/Options'
import {
   OPTION_SUBMITE,
   ADD_CATEGORY,
   REMOVE_CATEGORY,
   RANDOM_CHECK,
   NEW_CHECK,
   WRONGS_CHECK,
   EMPTYS_CHECK,
   LENGTH_UPDATE,
   RESULT_VALUE
} from '../actions'

const mapStateToProps = (state) => {
   return {
      options: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      OPTION_SUBMITE: () => dispatch(OPTION_SUBMITE()),
      ADD_CATEGORY: (category_id, category_name) => dispatch(ADD_CATEGORY(category_id, category_name)),
      REMOVE_CATEGORY: (category_id) => dispatch(REMOVE_CATEGORY(category_id)),
      RANDOM_CHECK: (value) => dispatch(RANDOM_CHECK(value)),
      NEW_CHECK: (value) => dispatch(NEW_CHECK(value)),
      WRONGS_CHECK: (value) => dispatch(WRONGS_CHECK(value)),
      EMPTYS_CHECK: (value) => dispatch(EMPTYS_CHECK(value)),
      LENGTH_UPDATE: (value) => dispatch(LENGTH_UPDATE(value)),
      RESULT_VALUE: (value) => dispatch(RESULT_VALUE(value)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Options);