const person = {
    personalinformation: {
        Name: "Md Jalal Molla",
        Age: "28+",
        Country: "Bangladesh",
        Religion: "Islam",
        Status:"Alhamdulliah"
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
};

export default function App() {
    return (
        <div>
            <div style={person.theme}>
            <h2>Here is my information ok have a look.</h2>
            <img
                src="easmile.png"
                alt="Profile"
                style={person.image}
            />

            {Object.entries(person.personalinformation).map(([key, value]) => (
                <div style={person.jalal} key={key}>
                    <strong>{key}:</strong> {value}
                </div>
            ))}
        </div>

        </div>

    );
}
