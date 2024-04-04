import './Card.css'

const Card = (props) =>{


    return(

        <div className="cardWrap">
            <img className='cardImg' src={props.image} alt="image from bkend" />

            <div>
                <h1 className="cardName">name: {props.name}</h1>
                <p className="cardEmail"> email: {props.email}</p>
                <p className="cardGender">gender: {props.gender}</p>
            </div>
        </div>
    )
}

export default Card