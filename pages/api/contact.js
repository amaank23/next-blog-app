import { MongoClient } from 'mongodb'

async function handler(req, res){
    if(req.method === 'POST'){
        const { name, email, message } = req.body;
        let db;
        let client;
        if(!name || name.trim() === '' || !email || email.trim() === '' || !message || message.trim() ===''){
            res.status(400).json({ message: 'Something went wrong, Please try again' })
            return
        }
        if(!email.includes('@')){
            res.status(422).json({ message: 'Invalid Data Found' });
            return
        }
        // Connect to the Database
        try {
            client = new MongoClient(process.env.connectionString)
            await client.connect();
            console.log('Connected successfully to server');
        } catch (error) {
            console.log(error.message);
            res.status(502).json({ message: 'Something went wrong, could not connect to the server' })
            return;
        }
        
        // SAVE THE DATA INTO THE DATABASE
        try {
            db = client.db();
            await db.collection('contacts').insertOne({ name, email, message });
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Something went wrong, could not insert the data' })
            return;
        }


        res.status(201).json({ message: 'thanks For contacting us, We will reply as soon as possible' })
    }
}

export default handler