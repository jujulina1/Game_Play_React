import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { edit, getById } from "../../services/dataService";

export default function Edit() {

    const initialVelues = {

            _id: '',
            title: {
                title: 'HAHHA',
                category: '',
                maxLevel: '',
                imageUrl: '',
                summary: ''
            }
          
    
    }
    
    const {gameId} = useParams();
    const [game, setGame] = useState(initialVelues);
    useEffect(() => {
           getById(gameId)
           .then(res => setGame(res))
    }, [])
    const onChangeHandler = (e) => {
         setGame(state => ({...state, [e.target.name]: e.target.value}))
    }


    const onSubmitHandler = (e) => {
         e.preventDefault();

         edit(game._id, game.title.title, game.title.category, game.title.maxLevel, game.title.imageUrl, game.title.summarye)
         .then(x => console.log(x))
    }
    return (
        <section id="edit-page" className="auth">
        <form id="edit" onSubmit={onSubmitHandler}>
            <div className="container">

                <h1>Edit Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value={game.title.title} onChange={onChangeHandler}/>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={game.title.category} onChange={onChangeHandler}/>

                <label htmlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value={game.title.maxLevel} onChange={onChangeHandler}/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={game.title.imageUrl} onChange={onChangeHandler}/>

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary" value={game.title.summary} onChange={onChangeHandler}></textarea>
                <input className="btn submit" type="submit" value="Edit Game"/>

            </div>
        </form>
    </section>
    )
    
}