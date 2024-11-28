const person={
  PersonalInformation:{
    Name:"Md Jalal Molla",
    NickName:"Md Easmile Molla",
    Age:"28+",
    Education:"BScinCSE",
    Learning:"React",
    Hope:"TobeSoftwareEngineer",
    Preferedlang:"C++/Java/Python/JavaScript",
    Framework:"JUIC/Spring/Django/React",
    Database:"SQL/MongoDB",
    Otherintesnsion:"DataScience/MachineLearning"
  },
  theme: {
    backgroundColor: 'yellow',
    padding:"5px",
    margin:"500px",
    width:"500px",
    color: "black",
    border:"5px solid black"
},
jalal:{
    backgroundColor:'blue',
    padding:"10px",
    //margin:"500px",
    color:"black",
    border:"1.5px solid black"

},
image: {
    width: "150px", // ইমেজের প্রস্থ
    height: "150px", // ইমেজের উচ্চতা
    borderRadius: "50%", // বৃত্তাকার ইমেজ
    display: "block",
    border:"3px solid black", // কেন্দ্রীয় করার জন্য
    margin: "10px auto" // অটো মার্জিন
}

}

const today=new Date();
function TodayFormat(date){
  return new Intl.DatetimeFormat(
    'en-US',
    {weekday:'long'}

  ).format(date);

}

export default function MyApp(){
  return(
    <div>
      <div style={person.theme}>
        <h1>Today is: {TodayFormat(today)}</h1>
        <h2>Here is my inforamtion have a look!</h2>
        <img src="easmile.png"
        style={person.image}
        alt="Profile"
        />
        {Object.entries(person.PersonalInformation).map(([key,value])=>(
          <div style={person.jalal} key={key}>
            <strong>{key}:</strong> {value}

          </div>
        ))}

      </div>

    </div>
  );
}
