import GameItem from "./GameItem/GameItem";


export default function Home({games}) {

    console.log(games);

    let allGames = Object.values(games)
    // console.log(allGames);
    return (
        <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />

        <div id="home-page">
            <h1>Latest Games</h1>

             {/* Display div: with information about every game (if any)  */}
        
             {allGames.map(x => <GameItem key={x._id} {...x}/>)}
             {/* Display paragraph: If there is no games  */}
             {allGames.lenght === 0 ? <p className="no-articles">No games yet</p> : ''}
            {/* <p className="no-articles">No games yet</p> */}
        </div>
    </section>
    )
    
}