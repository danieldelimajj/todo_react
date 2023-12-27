import { useState} from 'react'
import { Container, ListContainer, InputStyle, ButtonStyle, UlStyle, Item } from './styles.js'

function App() {
    const [tasks, setTasks] = useState([])

    const[inputValue, setInputValue] = useState('')

    function inputChange(event) {
      setInputValue(event.target.value) 
    }

    function buttonClick(){
        setTasks([...tasks, inputValue])
    }

    return (
    <Container>
        <ListContainer>
            <InputStyle placeholder="Digite a sua tarefa" onChange={inputChange} />
            <ButtonStyle onClick={buttonClick}>Adicionar Tarefa</ButtonStyle>

             <UlStyle>
            {tasks.map ((item, index) => ( <Item key={index}>{item}</Item> )) }
             </UlStyle>
         </ListContainer>
    </Container>
    )   
}

export default App 