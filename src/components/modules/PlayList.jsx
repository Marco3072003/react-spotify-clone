import playlistPic from '../../assets/images/playlist-picture.jpg';
const listItem = [
    {picture : playlistPic, title:'Playlist 1'},
    {picture : playlistPic, title:'Playlist 2'},
    {picture : playlistPic, title:'Playlist 3'},
    {picture : playlistPic, title:'Playlist 4'},
    {picture : playlistPic, title:'Playlist 5'},
]


export default function PlayList(){
    return (
        <div className="play-list">
            <div className ='title'>
                <div className="title-wrapper">
                    <span className="hamburger-icon">☰</span><span className="play-list-title">YOUR PLAYLIST</span>
                </div>
                <button className="button-plus">+</button>
            </div>
            

            {listItem.map((Item,index)=>{
                return(
                    <PlayListItem 
                    key={index}
                    picture = {Item.picture} 
                    title = {Item.title} 
                    />
                )
            })}
        </div>
        
    )
}


function PlayListItem({picture, title}){
    return (
        <div className="play-list-item"><img src={picture} alt="Cover Playlist"/>{title}</div>
    );
}