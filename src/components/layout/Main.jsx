import Navbar from '../modules/Navbar';
import MainContent from '../modules/MainContent';
import ProfilePicture from '../../assets/images/profile-picture.jpg';

export default function Main(){
    return(
        <main>
            <div className="container-main">
                <Navbar 
                picture = {ProfilePicture}
                />
                <MainContent />
            </div>
        </main>
    )
}