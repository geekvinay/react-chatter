
# React Chat APP


This is a web-based application built on a modern technology stack consisting of <strong> React, Tailwind, Node.js, Express, and Socket.IO </strong> . The application provides a dynamic and responsive user interface built on React, which is combined with Tailwind, a CSS framework that allows developers to quickly and easily style web components.

The server-side of the application is built on <strong> Node.js and Express</strong>, which provide a robust and scalable platform for data management and server-side logic. The application also integrates <strong>Socket.IO</strong>, which enables real-time and bidirectional communication between clients and servers, allowing for efficient collaboration and data synchronization.

This application is designed to provide a seamless user experience while maintaining a high level of security and performance. The combination of React and Tailwind provides a modern and clean interface, while the back-end technologies ensure that data management and server-side logic are handled efficiently and securely. Additionally, the integration of Socket.IO enables real-time communication and collaboration, making this application ideal for teams working on projects that require frequent updates and changes.



## Demo
<strong> Here's a step-by-step description of the demo for the application you described:</strong>

<img src="./assets/img0.jpg" />

1. <strong>Global Chat</strong>
<p>Open the application and navigate to the "Chat" route. This will take you to the global chat, where you can see messages from all users. To send a message, type your message into the chat box and hit enter. The message will be sent on the "message" socket context and will be visible to all users in the chat.
</p>

<img src="./assets/img1.jpg" />

2. <strong>Room Chat</strong>
<p>
Navigate to the "Room" route by entering the desired room name as input. This will take you to a chat room specific to the entered room name. To join the room, enter the room id on the "join-room" context and click join. Once you have joined the room, you can send messages by typing your message into the chat box and hitting enter. The message will be sent on the "send-room" socket context and will be visible to all users in the room. To receive incoming messages, listen on the "receive-room" socket context.
</p>

<img src="./assets/img2.jpg" />

3. <strong>Private Chat</strong>
<p>
Currently under development, the "Private Chat" route enables one-to-one communication by creating a unique chat room for each unique pair of clients. To use this feature, navigate to the "Private Chat" route and select the user you want to chat with. A unique chat room will be created for you and the selected user, allowing you to communicate privately. This feature is not yet available for testing in this demo version of the application.
</p>

<img src="./assets/img3.jpg" />

Overall, the application provides multiple chat routes for different types of communication, allowing users to communicate globally, within specific rooms, and eventually one-on-one. The socket contexts enable real-time communication and updates, providing a seamless and efficient user experience.
