import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatBotHelper = () => {
  return (
    <ThemeProvider
      theme={{
        background: "#eaeaea",
        headerBgColor: "#00b0ff",
        headerFontColor: "#fff",
        botBubbleColor: "#00b0ff",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
      }}
    >
      <ChatBot
        className="shadow-2xl bg-base-100"
        floating={true}
        placeholder="Escribe tu mensaje."
        botAvatar={"https://i.postimg.cc/5N3RTCt5/gozu.jpg"}
        hideUserAvatar={true}
        headerTitle={
          <div className="flex col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-robot"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
              <path d="M12 2v2"></path>
              <path d="M9 12v9"></path>
              <path d="M15 12v9"></path>
              <path d="M5 16l4 -2"></path>
              <path d="M15 14l4 2"></path>
              <path d="M9 18h6"></path>
              <path d="M10 8v.01"></path>
              <path d="M14 8v.01"></path>
            </svg>
            <span className="text-xl">ChatBot</span>
          </div>
        }
        floatingIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-robot"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
            <path d="M12 2v2"></path>
            <path d="M9 12v9"></path>
            <path d="M15 12v9"></path>
            <path d="M5 16l4 -2"></path>
            <path d="M15 14l4 2"></path>
            <path d="M9 18h6"></path>
            <path d="M10 8v.01"></path>
            <path d="M14 8v.01"></path>
          </svg>
        }
        steps={[
          {
            id: "1",
            message:
              "¡Hola! Soy Marcuitos, tu asistente en este sitio web. ¿En qué puedo ayudarte hoy?",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              { value: 1, label: "¿De qué se trata este sitio web?", trigger: "3" },
              { value: 2, label: "Estoy buscando información", trigger: "4" },
            ],
          },
          {
            id: "3",
            message:
              "En este sitio web encontrarás información sobre violencia de género, educación sexual integral, normativas y eventos enfocados en la lucha contra la violencia.",
            trigger: "5",
          },
          {
            id: "4",
            message:
              "Nuestro sitio web ofrece una gran variedad de información, ¿en qué estás interesado?",
            trigger: "5",
          },
          {
            id: "5",
            // Add options and trigger for the next step
            options: [
              { value: 1, label: "Violencia de género", trigger: "6" },
              { value: 2, label: "Educación sexual integral", trigger: "7" },
              { value: 3, label: "Normativas", trigger: "8" },
              { value: 4, label: "Eventos", trigger: "9" },
            ],
          },
          {
            id: "6",
            message: "Aquí encontrarás información sobre violencia de género.",
            end: true,
          },
          {
            id: "7",
            message: "Aquí encontrarás información sobre educación sexual integral.",
            end: true,
          },
          {
            id: "8",
            message: "Aquí encontrarás información sobre normativas.",
            end: true,
          },
          {
            id: "9",
            message: "Aquí encontrarás información sobre eventos.",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default ChatBotHelper;
