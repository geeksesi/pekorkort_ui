import { connect } from 'react-redux'
import Question from '../component/Question'
import {
   SELECT_ANSWER,
   NEW_QUEST,
} from '../actions'

const mapStateToProps = (state) => {
   return {
      question: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      SELECT_ANSWER: (value) => dispatch(SELECT_ANSWER(value)),
      NEW_QUEST: () => dispatch(NEW_QUEST()),

   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Question);