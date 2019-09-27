function connection(Peer){
    let peer = Peer;
    peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
      });
      //connecter ID requires access to DB to grab the connection of the user it is battling
      let connecterID = "test";

      let conn = peer.connect(connecterID);
      
      //if recieving Information
      conn.on('open', function(data) {
          console.log("Recieved: " + data);
      });

      //Send the String hello to recieved ID
      conn.send('Hello')
}