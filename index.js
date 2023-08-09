function Navbar(){
    return(
        <nav>
        <img className="Airbnblogo" src="Images/airbnb-logo.png" ></img>
        </nav>
    )
}

function Hero(){
    return(
        <section className="hero">
            <img src="Images/photo-grid.png"  className="photogrid"></img>
            <h1 className="h-h1">Online Experiences</h1>
            <h3 className="h-h3">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </section>
    )
}
const data=[
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "Images/katie-zaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "USA",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "Images/wedding-photography.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Germany",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "Images/mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Online",
        openSpots: 3,
    },
    {
        id: 4,
        title: "Horse Riding Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "Images/horse.jpg",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "USA",
        openSpots: 0,
    },
    {
        id: 5,
        title: "Learn Snow skying",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "Images/snow.jpg",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Germany",
        openSpots: 27,
    },
    {
        id: 6,
        title: "Group Mountain Trekking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "Images/trek.jpg",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Online",
        openSpots: 3,
    }
]
function Card(props){
    let Badge="";
    if (props.items.openSpots===0){
        Badge="SOLD OUT"
    }
    else if(props.items.location=="Online"){
        Badge="ONLINE";
    }
    else{
        console.log();
    }
    return(
        <div className="card">
            {Badge!="" && <div className="card--badge">{Badge}</div>}
            <img className="image" src={props.items.coverImg}></img>
            <img className="star" src="Images/star.png"></img>
            <span className="sp">{props.items.stats.rating} <p className="grey">({props.items.stats.review_ct})• {props.items.location}</p> </span>
            <p >{props.title}</p>
            <p ><b>From ${[props.items.amount]} </b>/ person</p>

        </div>
    )
}
const cards=data.map(items =>{
    return(
        <Card
            key={items.id}
            items={items}
        />
    )
})
function App(){
    return(
        <div>
       <Navbar/>
        <Hero/>
        <section className="cards-list">
            {cards}
            </section>
        

    </div>        
    )

}
ReactDOM.render(<App/>,document.getElementById("root")) 