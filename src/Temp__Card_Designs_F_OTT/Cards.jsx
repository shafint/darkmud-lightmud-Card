import Child__Cards from "./Card_Childs/Child__Cards.jsx";
import "./Card_Childs/Cards__Childs.css";
import C_Data_ex from "./Card__data/C_Data_ex.jsx"
const Cards = () => {
    const colorCom=()=>{
        document.body.classList.toggle("Light")
    }
    return (
        <>
        <div className="sun__Moon" onClick={colorCom}></div>
            <div className="container">
                <div className="card">
                        {
                            C_Data_ex.map((val) => {
                                return (<Child__Cards
                                    key={val.id}
                                    Icons={val.Icons}
                                    Card_type={val.Type}
                                    Doller={val.Doller}
                                    Space={val.Space}
                                    Domain={val.Domain}
                                    Emaill={val.Emaill}
                                    Supports={val.Support}
                                />)
                            })
                        }
                </div>
            </div>
        </>
    )
}
export default Cards;