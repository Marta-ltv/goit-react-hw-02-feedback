import React from "react";
// import PropTypes from 'prop-types'


export const Statistics = ({ good, neutral, bad }) => (
    <ul>
        <li>{good}</li>
        <li>{neutral}</li>
        <li>{bad}</li>
    </ul>
)

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,})).isRequired,
// }