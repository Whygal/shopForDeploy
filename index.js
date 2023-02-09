import express from "express"
import cors from "cors"
import { dummyTodo } from './data.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { todosAllowedUpdates } from './data.js'
dotenv.config();

const { PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('client/build'))
mongoose.set('strictQuery', true)
// app.get('/api/getAllTodo', async(req,res) => {
//     //db function for getting the todos
//     res.send(dummyTodo)
// })

// app.post('/api/todos/addTodo', async (req,res) => {
//     console.log(req.body)
//     const todo = {...req.body}

//     // db function for adding inside the db
//     dummyTodo.push(todo)
//     console.log(dummyTodo)
//     res.send(dummyTodo)
// })

// app.put('/api/todos/updateTodo/:id', async (req,res) => {
//     console.log(req.params)
//     const {id} = req.params
//     const newTitle = req.body.title

//     const clone = [...dummyTodo]

//     const todoIndex = clone.findIndex(td => td.id === +id)

//     clone[todoIndex].title = newTitle

//     res.send(clone)
// })

// app.delete('/api/todos/deleteTodo/:id', async (req,res) => {
//     // at the db you will have findOneAndDelete
//     const {id} = req.params
//     const clone = [...dummyTodo]
//     const todoIndex = clone.findIndex(td => td.id === +id)
//     if(todoIndex === -1){
//         res.status(404).send({message:"no such todo with the specified index"})
//     }
//     clone.splice(todoIndex,1)
//     res.send(clone)
// });



//schemas

const TodoSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    price:{
        type: Number,
        // required: true, 
    },
    description:{
        type: String,
        // required: true, 
    },
    image:{
        type: String,
        // required: true, 
    },
    title:{
        type: String,
        // required:true,
    },
    category:{
        type: String,
        // required: true, 
    },
    rating:{
       rate:{type:Number},
       count:{type:Number}
    },
    dateCreated:{
        type: Date,
        default: Date.now(),
    }
})

// model related to the specific schema
const Todos = mongoose.model('Todos', TodoSchema);

app.get('/api/getAllTodos', async(req,res) => {
    try{
        const allTodos = await Todos.find({})
        res.status(200).send(allTodos)
    } catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }
})

app.post('/api/addOneTodo', async(req,res) =>{
    try{
        const title = req.body.title
        const id = req.body.id
        const price = req.body.price
        const description = req.body.description
        const category = req.body.category
        const rate = req.body.rate
        const img = req.body.image
        const newTodo = new Todos(
            {
                id:id,
                title:title,
                price:price,
                description:description, 
                category:category, 
                rate:rate,
                image:img,
            }
            )
        await newTodo.save()
        res.status(200).send(newTodo)
} catch(e){
    console.log(e)
    res.status(500).send({message:e})
}
})

app.post('/api/addAllProducts', async(req, res)=> {
    try{
            const products = Todos.insertMany(req.body) 
            res.status(200).send(products)
    }catch(e){
        console.log(e)
        res.status(500).send({message:e})
    }
})
app.put('/api/todos/updateTodo/:id', async (req,res) => {
const updates = Object.keys(req.body);
const isValidOperation = updates.every((update) =>
  todosAllowedUpdates.includes(update)
);

if (!isValidOperation) {
    res.status(400).send({message: "Invalid updates"})
}

try {
    const todo = await Todos.findOne({_id: id})
  if (!todo) {
    res.status(404).send({message: "todo does not exist"})
  }
  updates.forEach((update) => (todo[update] = req.body[update]));
  await todo.save();
  res.status(200).send(todo)
} catch (e) {
    console.log(e)
    res.status(500).send({message:e})
     }
    })

    app.delete('/api/todos/deleteTodo/:id', async (req,res) => {
        try{
            const { id } = req.params
            const deletedTodo = await Todos.findOneAndDelete({id: id})
            if(!deletedTodo){
                res.status(404).send({message:"no such todo with the specified id"})
            }
            res.status(200).send(deletedTodo)
    
        } catch(e){
            console.log(e)
            res.status(500).send({message:e})
     
        }
    })

    app.get('*', (res, req) => {
        res.sendFile(__dirname+'client/build/index.html')
    })
// mongoose.connect("mongodb://127.0.0.1:27017/todosApp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (info) => {
    app.listen(PORT,() => {
        console.log("info", info)
        console.log('i am listening')
    })    
  })

// app.listen(PORT, ()=>{ 
//     console.log('i am listening')
// })

 