export default function Contents({title, listCard }){
    return(
    <div className="content-wrapper">
        <h1>{title}</h1>
        <div className ="playlist-card-wrapper">
            {
                listCard.map((listCard,index)=>{
                    const{cover,songTitle, desc} = listCard;
                    return(
                        <PlayListCard 
                        key={index}
                        cover = {cover}
                        songTitle = {songTitle}
                        desc = {desc}                        
                        />
                    )
                })
            }
        </div>
    </div>
    )
}

function PlayListCard({cover,songTitle,desc}){
    return(
        <div className="playlist-card">
            <img className="cover" src={cover} alt="play-list card cover"/>
            <div className="desc">
                <h3>{songTitle}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}