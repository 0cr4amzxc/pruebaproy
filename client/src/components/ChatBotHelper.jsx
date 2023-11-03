import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

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
              "¡Hola! Soy Marcuitos, tu asistente en este sitio web. ¿En qué puedo ayudarte hoy? 😊👋",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              {
                value: 1,
                label: "¿De qué se trata este sitio web? 🤔",
                trigger: "3",
              },
              { value: 2, label: "Estoy buscando información 🕵️‍♂️🔍" , trigger: "4" },
            ],
          },
          {
            id: "3",
            message:
            "En este sitio web encontrarás información sobre violencia de género, educación sexual integral, normativas y eventos enfocados en la lucha contra la violencia  📚🔍🚺📰",
            trigger: "5",
          },
          {
            id: "4",
            message:
            "Nuestro sitio web ofrece una gran variedad de información 🌟, ¿En qué estás interesado 🤔?",
            trigger: "5",
          },
          {
            id: "5",
            // Add options and trigger for the next step
            options: [
              { value: 1, label: "Violencia de género", trigger: "6" },
              { value: 2, label: "Realizar una denuncia", trigger: "7" },
              { value: 3, label: "Normativas", trigger: "8" },
              { value: 4, label: "Eventos", trigger: "9" },
            ],
          },
          {
            id: "6",
            message:
              "Si te interesa Aquí encontrarás información sobre violencia de género 🚺",
            trigger: "10",
          },
          {
            id: "7",
            message:
              "🚨 Antes de hacer una denuncia te recomendamos que te informes sobre el tema. Aquí encontrarás información sobre violencia",
            trigger: "11",
          },
          {
            id: "8",
            message: "Quieres leer mas sobre normativas 🔍, aqui encontraras mas informacion 📚",
            trigger: "12",
          },
          {
            id: "9",
            message: "Probablemente hay muchas actividad cerca de tu zona 📅, aqui encontraras mas informacion",
            trigger: "13",
          },
          {
            id: "10",
            component: (
              <Link to="/informate" className="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-link"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
                <span>Articulos Informativos</span>
              </Link>
            ),
            trigger: "5",
          },
          {
            id: "11",
            component: (
              <Link to="/test" className="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-link"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
                <span>Test violencia</span>
              </Link>
            ),
            end: true,
          },
          {
            id: "12",
            component: (
              <Link to="/informate" className="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-link"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
                <span>Material sobre normas</span>
              </Link>
            ),
            end: true,
          },
          {
            id: "13",
            component: (
              <Link to="/eventos" className="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-link"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 15l6 -6" />
                  <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                  <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                </svg>
                <span>Eventos, Actividades</span>
              </Link>
            ),
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default ChatBotHelper;
