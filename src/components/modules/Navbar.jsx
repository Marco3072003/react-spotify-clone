export default function Navbar({picture}){
    return(
        <nav className="navbar">
                <div className="backward-forward-wrapper">
                    <span className="icon backward">&#x25C0;</span> 
                    <span className="icon forward">&#x25B6;</span>
                </div>
                
                <div className="buttons-wrapper">
                    <button className="btn premium">Explore Premium</button>
                    <button className="btn install"><i className="fas fa-arrow-down"></i>Install App</button>
                    <img className="profile-picture"src={picture} alt="profile picture"/>
                    
                </div>
        </nav>
    )
}


