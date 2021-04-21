import { Select } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as actions from '../../redux-store/actions/index';

// Provinces
const options = [
    { name: "Alberta", abbr: "AB" },
    { name: "British Columbia", abbr: "BC" },
    { name: "Manitoba", abbr: "MB" },
    { name: "New Brunswick", abbr: "NB" },
    { name: "Newfoundland and Labrador", abbr: "NL" },
    { name: "Northwest Territories", abbr: "NT" },
    { name: "Nova Scotia", abbr: "NS" },
    { name: "Nunavut", abbr: "NU" },
    { name: "Ontario", abbr: "ON" },
    { name: "Prince Edward Island", abbr: "PE" },
    { name: "Quebec", abbr: "QC" },
    { name: "Saskatchewan", abbr: "SK" },
    { name: "Yukon", abbr: "YT" }
];

const Provinces = (props) => {

    // Handler when <Select> changes
    const selectChangeHandler = (event) => {
      props.fetchQuestions(event.target.value);
    }

    return (
        <Select placeholder="Province" onChange={selectChangeHandler}>
        {
          options.map((province, index) => {
            return <option key={index} value={province.abbr}>{province.name}</option>
          })
        }
        </Select>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: (province) => dispatch(actions.fetchQuestions(province))
    }
}

export default connect(null, mapDispatchToProps)(Provinces);