import { useEffect, useState } from "react"
import { getById } from "../../services/dataService"
import { useParams, Link } from "react-router-dom"

export default function Details() {

const params = useParams();
const [game, setGame] = useState({
    _id: '',
    title: {
        "title": " ",
        "category": " ",
        "maxLevel": " " ,
        "imageUrl": " ",
        "summary": " "
    }
  
})
 
    useEffect(()=> {
        console.log("USe");
      getById(params.gameId)
      .then(res => {
      setGame(res)
      })
    }, [params.gameId])

    console.log(game);
    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.title.imageUrl} />
                <h1>{game.title.title}</h1>
                <span className="levels">MaxLevel: {game.title.maxLevel}</span>
                <p className="type">{game.title.category}</p>
            </div>

            <p className="text">
                  {game.title.summary}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            {/* <div className="details-comments">
                <h2>Comments:</h2>
                <ul> */}
                    {/* <!-- list all comments for current game (If any) --> */}
                    {/* <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul> */}
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                {/* <p className="no-comment">No comments.</p>
            </div> */}

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <Link to={`/edit/${game._id}`} className="button">Edit</Link>
                <Link href="#" className="button">Delete</Link>
            </div>
        </div>

        {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        {/* <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article> */}

    </section>
    )
    
}