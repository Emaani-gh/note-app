import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Component/Layout";
import { Main } from "./Component/Main";
import { NewNote } from "./Component/NewNote";
import { NoteDetails } from "./Component/NoteDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = { <Main/>}/>
            <Route path="/add-Note" element = {<NewNote />}/> 
            <Route path="/notes/:id" element = {<NoteDetails />}/>
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
