import { useState } from 'react'
import Heading from "./Heading.js";
import Button from "./Button.js";
import Statistics from './Statistics';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [feedback, setfeedback] = useState(false);
  const total = good + neutral + bad;

  const getPercent = (x, total) => {
    let result = (x / total) * 100;

    return Math.round(result);
  };

  const percentPositive = getPercent(good, total);

  const Avg = (val, total) => {
    const sum = val.reduce((n, item) => {
      return n + item.number * item.num;
    }, 0);

    let result = sum / total;

    return Math.round(result);
  };

  const average = Avg(
    [
      { number: good, num: 1 },
      { number: neutral, num: 0 },
      { number: bad, num: -1 },
    ],
    total
  );

  const handleButtonClick = (type) => {
    setfeedback(true);

    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const statisticsProps = {
    feedback: feedback,
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: average,
    percentPositive: percentPositive,
  };

  return (
    <div>
      <Heading text="Give Feedback" />
      <Button onClick={() => handleButtonClick("good")} text="good" />
      <Button onClick={() => handleButtonClick("neutral")} text="neutral" />
      <Button onClick={() => handleButtonClick("bad")} text="bad" />
      <Statistics {...statisticsProps} />
    </div>
  );
};

export default App