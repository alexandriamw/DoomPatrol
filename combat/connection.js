//let id = id;
//need information for ID
function initialize() {
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(id, {
        debug: 2
    });
    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }
        console.log('ID: ' + peer.id);
    });
    peer.on('disconnected', function () {
        console.log('Connection lost. Please reconnect');
        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });
    peer.on('close', function () {
        conn = null;
        console.log('Connection destroyed');
    });
    peer.on('error', function (err) {
        console.log(err);
        alert('' + err);
    });
};



function join() {
    // Close old connection
    if (conn) {
        conn.close();
    }
    // Create connection to destination peer specified in the input field
    conn = peer.connect(recvIdInput.value);

    conn.on('open', function () {
        //conn.peer connection name
        console.log("Connected to: " + conn.peer);
        // Check URL params for comamnds that should be sent immediately
        var command = getUrlParam("command");
        if (command)
            conn.send(command);
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        addMessage("<span class=\"peerMsg\">Peer:</span> " + data);
    });
    conn.on('close', function () {
        console.log("Connection closed");
    });
};

module.exports = peer;