import RecentlyCover from '../../assets/images/cover-tulus.jpg';
import TopMixCover from '../../assets/images/cover-overtunes.jpg';
import ForYouCover from '../../assets/images/cover-coldplay.jpg';
import YouLikeCover from '../../assets/images/cover-ed.png';
import Contents from '../modules/Contents'

const contents = [
    {
        title: 'Recently Played', 
        ListCard:{
        cover:[RecentlyCover,RecentlyCover,RecentlyCover,RecentlyCover],
        songTitle: ['Manusia','Manusia','Manusia',],
        desc: [
            'Koleksi lagu indonesia yang populer belakangan ini',
            'Koleksi lagu indonesia yang populer belakangan ini',
            'Koleksi lagu indonesia yang populer belakangan ini',
            'Koleksi lagu indonesia yang populer belakangan ini'
        ]
        }
    },

    {
        title: 'Your Top Mixes', 
        ListCard:{
        cover:[TopMixCover,TopMixCover,TopMixCover,TopMixCover],
        songTitle: ['I Still Love You','I Still Love You','I Still Love You','I Still Love You'],
        desc: [
            'Koleksi lagu indonesia yang populer belakangan ini',
            'Koleksi lagu indonesia yang populer belakangan ini',
            'Koleksi lagu indonesia yang populer belakangan ini',
            'Koleksi lagu indonesia yang populer belakangan ini'
        ]
        }
    },

    {
        title: 'Made For You', 
        ListCard:{
        cover:[ForYouCover,ForYouCover,ForYouCover,ForYouCover],
        songTitle: ['Paradise','Paradise','Paradise','Paradise'],
        desc: [
                'Koleksi lagu luar negeri yang populer belakangan ini',
                'Koleksi lagu luar negeri yang populer belakangan ini',
                'Koleksi lagu luar negeri yang populer belakangan ini',
                'Koleksi lagu luar negeri yang populer belakangan ini'
              ]
        }
    },

    {
        title: 'More of What You Like', 
        ListCard:{
        cover:[YouLikeCover,YouLikeCover,YouLikeCover,YouLikeCover],
        songTitle: ['Shape Of You','Shape Of You','Shape Of You','Shape Of You'],
        desc: [
            'Koleksi lagu luar negeri yang populer belakangan ini',
            'Koleksi lagu luar negeri yang populer belakangan ini',
            'Koleksi lagu luar negeri yang populer belakangan ini',
            'Koleksi lagu luar negeri yang populer belakangan ini'
          ]
        }
    },

]

for(const content of contents){
    const {ListCard} = content;
    content.ListCard = ListCard.cover.map((cover,index)=>({
        cover,
        songTitle: ListCard.songTitle[index],
        desc: ListCard.desc[index]
    }));
}



export default function MainContent(){
    
    return (
    
        <div className="main-content">
            {
                contents.map((content,index)=>{
                    return(
                        <Contents
                        key={index}
                        title = {content.title}
                        listCard = {content.ListCard}
                        />
                    )

                })
            }
        </div>
    )
}