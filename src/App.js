import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home"


function App() {
  return <Router>
    <Switch>
      <Route path="/hello">
        <h1>hello</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App; 


 





/* #7.6
React Router는 다이나믹(동적) url을 지원해줌. 다이나믹 하다는 건 url에 변수를 넣을 수 있다는 의미. id를 적으면 이 변수를 넣어주기 위해서는 유저가 movie 경로로 와서 여기에 id를 적으면 Detail을 보여주도록 함 새로고침을 하면
유저가 무비로 가서 아이디를 입력하면 디테일을 보여줌 이렇게 되면 무비 컴포넌트에서 movie/변수의 경로로 보낼 수 있기 때문

컴포넌트를 렌더링 한다는 건 함수를 불러오는 것. props는 object 일 뿐이고, 우리는 그걸 열어서 item을 꺼내 쓰는 것
>> (props) >> ({id, coverImg, ....})
*/

/* url 안에 있는 id값이 무엇인지 알아내기! 
  useParams : url에 있는 값을 반환해주는 함수 특히 변하는 값 (변수)
*/


/* #7.5
Switch의 역할은 Route를 찾는 건데 Route는 URL을 의미함.
Route를 찾으면 컴포넌트를 렌더링함

BrowserRouter와 HashRouter 차이 : HashRouter 뒤어 # 가 붙어

react-router-dom : 컴포넌트들의 모음집
url 지켜보다가 url이 바뀌면 어떤 걸 보여줄 지 결정해 
유저가 있는 URL에 따라 유저에게 보여주고 싶은 것들을 담은 Router를 렌더링 해줌
Switch 컴포넌트의 역할은 한번에 하나의 Route만 렌더링 하기 위함
React Router에서는 두개의 Route를 한번에 렌더링 할 수 있음

Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트

Route를 만들면 그 안에 넣어준 게 렌더링 됨
*/

/* #7.4 
 React.js 앱에서 페이지를 전환하는 방법!

<Movie coverImg={movie.medium_cover_image} />
coverImg 마음대로 이름 지어도 됨
{movie.medium_cover_image} API에서 받는 data이기 때문에 API에 있는 것과 이름이 같아야 함

key는 React.js에서만, map 안에서 component들을 render 할 때 사용하는 것
 */

/* React Router >> 페이지를 전환하는 것 
route screen page
*/

//App.js는 더 이상 영화들을 보여주지 않고 router를 render 함.
//router는 URL을 보고 있는 component고 router는 우리에게 Home component를 보여주게 됨


/* #7.3 */
/* map을 쓸 때마다 key를 element에 줘야함 */

/* .then 이란 ?
서버에서 데이터를 가져오는 작업(응답)이 완료된 이후에 then의 인자에 들어가있는 함수가 실행된다.
이거 보다는 async-await 사용함

  useEffect(()=>{
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    .then(response => response.json())
    .then(json => {setMovies(json.data.movies); setLoading(false);})
    .then()
  }, []);

  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  }, []);
*/

