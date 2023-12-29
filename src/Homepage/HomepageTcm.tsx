import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    width: "60%",
    margin: 'auto'
}
const slideImages = [
    {
        url: 'https://images.squarespace-cdn.com/content/v1/58fe78906a4963418dc5c8c4/1523385236116-DQW8L6RHXO1PEV6M9EBT/fiveelements.jpg?format=2500w',
        caption: 'Slide 1'
    },
    {
        url: 'https://drreiche.de/wp-content/uploads/2019/06/Phytotherapie_Praxis_f%C3%BCr_Integrative_Medizin-768x476.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://s.zentrum-der-gesundheit.de/img/d6844f351ad304eb9a6ee2ebf62349b9?width=721&height=405',
        caption: 'Slide 3'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                            {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default function Homepage() {
    return <Slideshow />
}