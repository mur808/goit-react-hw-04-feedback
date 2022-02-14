import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const plusFeedback = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  const total = () => good + neutral + bad;
  const positivePercentage = () =>
    (Number.parseInt(good) / Number.parseInt(total())) * 100;

  return (
    <>
      <Section title={"Pleas leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          plusFeedback={() => plusFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {total() ? (
          <Statistics
            Good={good}
            Neutral={neutral}
            Bad={bad}
            Total={total()}
            PositiveFeedback={`${Number.parseInt(positivePercentage())} %`}
          />
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </Section>
    </>
  );
}



