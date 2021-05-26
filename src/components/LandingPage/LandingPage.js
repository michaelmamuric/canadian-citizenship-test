import { Select, Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as actions from '../../redux-store/actions/index';
import classes from './LandingPage.module.css';
import SkeletonDisplay from '../SkeletonDisplay/SkeletonDisplay';

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

const LandingPage = (props) => {

    // Destructure from props for easier referencing
    const { fetchQuestions, isLoading } = props;

    // Handler when <Select> changes
    const selectChangeHandler = (event) => {
      fetchQuestions(event.target.value);
    }

    // Component to Render
    let componentToRender = (
        <>
            <h1 className={classes.title}>Welcome to the Canadian Citizenship Practice Test.</h1>
            <br />
            <p>
                To start, please select your province of residence. If you do not live in Canada, 
                just select the province you are most interested in.
            </p>
            <br />
            <Select placeholder="Province" onChange={selectChangeHandler}>
            {
                options.map((province, index) => {
                    return <option key={index} value={province.abbr}>{province.name}</option>
                })
            }
            </Select>
        </>
    );

    // Render when page is loading
    if(isLoading) {
        componentToRender = <SkeletonDisplay />;
    }

    return componentToRender;
}

// Map Redux State
const mapStateToProps = (state) => {
    return {
        isLoading: state.quiz.isLoading
    }
}

// Map Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: (province) => dispatch(actions.fetchQuestions(province))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);