import React from "react";
import Heading from "./Heading.js";
import Statistic from "./Statistic.js";

const Statistics = (props) => {
    if (!props.feedback) {
      return <p>No feedback has been given</p>;
    }
  
    return (
      <div>
        <Heading text="Statistics" />
        <table>
          <tbody>
            <Statistic name="good" value={props.good} />
  
            <Statistic name="neutral" value={props.neutral} />
  
            <Statistic name="bad" value={props.bad} />
  
            <Statistic name="total" value={props.total} />
  
            <Statistic name="average" value={props.average} />
  
            <Statistic
              name="percentPositive"
              value={props.percentPositive + "%"}
            />
          </tbody>
        </table>
      </div>
    );
  };

  export default Statistics;