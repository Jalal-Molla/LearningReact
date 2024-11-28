const person = {
    PersonalInformation: {
      Name: "Md Jalal Molla",
      NickName: "Md Easmile Molla",
      Age: "28+",
      Education: "BSc in CSE",
      Learning: "React",
      Hope: "To be Software Engineer",
      PreferredLang: "C++/Java/Python/JavaScript",
      Framework: "JUIC/Spring/Django/React",
      Database: "SQL/MongoDB",
      OtherInterest: "Data Science/Machine Learning",
    },
    theme: {
      backgroundColor: "yellow",
      padding: "5px",
      margin: "20px auto",
      width: "500px",
      color: "black",
      border: "5px solid black",
    },
    jalal: {
      backgroundColor: "blue",
      padding: "10px",
      color: "white",
      border: "1.5px solid black",
      margin: "10px 0",
    },
    image: {
      width: "150px", // ইমেজের প্রস্থ
      height: "150px", // ইমেজের উচ্চতা
      borderRadius: "50%", // বৃত্তাকার ইমেজ
      display: "block",
      border: "3px solid black",
      margin: "10px auto", // কেন্দ্রীয় করার জন্য
    },
  };

  const today = new Date();

  function TodayFormat(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  export default function MyApp() {
    return (
      <div>
        <div style={person.theme}>
          <h1>Today is: {TodayFormat(today)}</h1>
          <h2>Here is my information, have a look!</h2>
          <img
            src="easmile.png"
            style={person.image}
            alt="Profile"
          />
          {Object.entries(person.PersonalInformation).map(([key, value]) => (
            <div style={person.jalal} key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
