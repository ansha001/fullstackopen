import React from "react";

const Statistic = (props) => {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
    );
  };

export default Statistic;