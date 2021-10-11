import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => {
  return {
    filter: state.contacts.filter,
    contacts: state.contacts.items,
  };
}

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch({ type: "REMOVE_CONTACT", payload: { id } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
