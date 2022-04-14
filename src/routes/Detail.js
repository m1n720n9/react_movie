
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail (){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async()=>{
        const json = await(await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
        setMovies(json.data.movie);
        setLoading(false);
    console.log(json) //id를 알고 있으니까 API로부터 정보를 fetch 해올 수 있음
    };
    useEffect(()=>{
       getMovie();
       
    },[])
    console.log(id)
    return (
        <div>
            {loading ? <h2>loading...</h2> : <h1>Detail</h1>}
            <nav>
                <ul>
                    <li>Home</li>                    
                </ul>
            </nav>
            <hr />
            <h3>{movies.title} ({movies.year})</h3>
            <img src={movies.medium_cover_image}></img>
            {movies.description_full}
            <br />
            
            <br />
            {movies.language}
            {movies.rating}
        </div>
    )       
}

export default Detail;

// {movies.genres.map((g) => <span>{g}</span>)} 왜 한번만 실행되고 다음부터는 오류가 뜰까?


/* mission....
    Detail screen에 로딩이나 다른 것들 채워넣기,,,,
    그리고 movie가 state에 있지 않아. API에서 json 받아와서 아무것도 안 하고 있어..~
    json을 state에 넣어주면 어떨까..? 좋겠지요
    영화의 상세정보 보여주기
    nav 만들어서 home, about page..? 제가요?
*/

/* import { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail (){
    const {id} = useParams();
    const getMovie = async()=>{
        const json = await(await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
    console.log(json) //id를 알고 있으니까 API로부터 정보를 fetch 해올 수 있음
    };
    useEffect(()=>{
       getMovie();
    },[])
    console.log(id)
    return <h1>Detail</h1>
}

export default Detail; */