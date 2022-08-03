import pic from "./images/cover.png"


function FrontCover () {
    return (
        <div className="page-cover">
            <h1>YearBook</h1>
            <img src={pic} alt="pic"/>
        </div>
    )
}

export default FrontCover