import React from "react";
// import PropTypes from 'prop-types'


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul>
        <li>Goog:<span>{good}</span></li>
        <li>Neutral:<span>{neutral}</span></li>
        <li>Bad:<span>{bad}</span></li>
        <li>Total:<span>{total}</span></li>
        <li>Positive feedback:<span>{positivePercentage}%</span></li>
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