import { Link } from "react-router-dom";
const Child__Cards = (props) => {
    const { Icons, Card_type, Doller, Space,
        Domain, Emaill, Supports } = props;
    return (
        <>
            <div className="box">
                <div className="content">
                    <div className="icon">
                        {Icons}
                    </div>
                    <h3>{Card_type}</h3>
                    <h4><sup>$</sup>{Doller}</h4>
                    <ul>
                        <li>{Space}</li>
                        <li>{Domain}</li>
                        <li>{Emaill}</li>
                        <li>{Supports}</li>
                    </ul>
                    <Link className="btn" to="">Order Now</Link>
                </div>
            </div>

        </>
    )
}
export default Child__Cards;