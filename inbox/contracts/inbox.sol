pragma solidity ^0.4.25;

contract inbox {
    string public message;

    function inbox(string initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string newMessage) public {
        message = newMessage;
    }


}

