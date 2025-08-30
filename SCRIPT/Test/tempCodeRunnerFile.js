
const ans = Client.flatMap(client =>
  client.reviews.map(review => ({
    Rating: review[0].replace("[","").replace("]","").replace("★",""),      
    Username: review[1].replace("[","").replace("]","").replace("★",""),    
    Review: review[2].replace("[","").replace("]","").replace("★",""),
    Date: review[3].replace("[","").replace("]","").replace("★","")         
  }))
);