import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error("Please define MONGODB_URI in your .env.local")
}

// Use appropriate options for MongoDB Atlas or local
const options = uri.includes("localhost")
  ? { useNewUrlParser: true, useUnifiedTopology: true }
  : {
      tls: true,
      tlsAllowInvalidCertificates: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

let client
let clientPromise

// Use global cache to avoid multiple connections in dev
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise
