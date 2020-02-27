import React from "react";
import "./Faq.scss";

const Faq = props => {
  const { toggleFaq } = props;

  const QUESTIONS = [
    {
      question: "What is this?",
      body:
        "This application is a calculator that finds out your average Total Daily Energy Expenditure by checking your caloric consumption and weekly weight change. It relies on the 7700kcal per 1kg (3500kcal per 1lb). With an accurate TDEE number it can be easier to find out exactly what is your caloric requirement for effective weight loss or weight gain. The tool allows to set your goal weight and desired weekly change as well."
    },
    {
      question: "How does it work?",
      body:
        "It is simple - you enter your details and goals in the left panel column Initial Input and then Start a week, keep entering the daily weight as well as the total caloric consumption and the tool will calculate your TDEE. If you skip a day don't worry it will not be taken into account, but the accuracy of the number might be a bit off. By calculating the TDEE the tool, will automatically make an adjustment for your total daily caloric needs to meet the goal."
    },
    {
      question: "Do I need to enter the calories from today or day before",
      body:
        "Up to you really. Both should eventually average out to your curent TDEE. I usually weigh myself in the morning and enter the calories for the day before. So it looks like the weight from the morning is a result of caloric consumption of yesterday"
    },
    {
      question: "How is the data saved?",
      body:
        "The data is saved a) locally in your browser and  b) (optionally) on Google's Firebase server if you decide to signup, you can use the fake email/password all you want, but remember the password as its recovery might not be easy ;). Program tries to save your data at each change of the data, however you can also save manually in the save menu to the right"
    },
    {
      question: "Who are you?",
      body:
        "I am just a dude who likes gym and nutrition science as well as learning front-end development. I decided to create this tool to help me with my cutting diet."
    },
    {
      question: "Are you going to further develop it?",
      body:
        "To an extent. Few things I hope to implement: 'Goal Met' scenario, revamping the compact view, make it mobile-friendly, export/import to file, and maybe some MyFitnessPal integration ¯\\_(ツ)_/¯ "
    },
    {
      question: "Can I support/thank you?",
      body:
        "There is a Paypal donation button under the login form. Funds will probably go to cover server cost first and my further endeavors in web development. Thank you kindly. For questions, suggestions, anything hit me up at zakrofil@gmail.com"
    }
  ];

  return (
    <div className="faq">
      <div className="textContent">
        <div className="textWrapper">
          <h1>Instructions and FAQ</h1>
          <div className="questionWrapper">
            {QUESTIONS.map(entry => {
              return (
                <div className="question">
                  <h4>{entry.question}</h4>
                  <p>{entry.body}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="buttonWrapper">
          <button onClick={toggleFaq}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
