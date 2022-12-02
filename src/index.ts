import app from './app'
import createCharacters from './endpoints/createCharacter'
import deleteCharacter from './endpoints/deleteCharacter'
import getAllCharacters from './endpoints/getAllCharacters'

app.get('/character', getAllCharacters)

app.put('/character', createCharacters)

app.delete('/character/:id', deleteCharacter)

//app.get('/movies', )
//app.delete('/movies', )