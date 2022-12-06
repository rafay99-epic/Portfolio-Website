// First, we require the MongoDB driver
const mongodb = require('mongodb');

// Next, we specify the connection string for our MongoDB database
const connectionString = 'mongodb+srv://rafay99:19march1999@rafay-blog.lh2nzt8.mongodb.net/?retryWrites=true&w=majority';

// Then, we use the MongoClient to connect to our MongoDB database using the connection string
mongodb.MongoClient.connect(connectionString, function(err, db) {
  // If there was an error connecting to the database, log it to the console
  if (err) {
    console.log('Error connecting to the database:', err);
    return;
  }

  // Otherwise, log a success message
  console.log('Successfully connected to the database!');

  // Now we can perform various operations on our database, such as inserting a document
//   try {
//         db.admin.insertOne({ 
//             username: "rafay99", 
//             password: "19march1999",
//             email: "99marafay@gmail.com" 
//         });
//     } catch (e) {
//         console.log (e);
//     };

//     console.log("Document inserted successfully");
//     db.close();
  
  
  
  db.admin.insertMany({
    username: 'rafay',
    password: 'password123'
  }, function(err, result) {
    // If there was an error inserting the document, log it to the console
    if (err) {
      console.log('Error inserting document:', err);
      return;
    }

    // Otherwise, log the result to the console
    console.log('Successfully inserted document:', result);

    // Finally, we close the connection to the database
    db.close();
  });
});

