import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neu',
  headerBgColor: '#91709b',
  headerFontColor: '#ffffff',
  headerFontSize: '26px',
  botBubbleColor: '#91709b',
  botFontColor: '#ffffff',
  userBubbleColor: '#e7bb41',
  userFontColor: '#242424',
};

const steps = [
  {
    id: '1',
    message: "Coucou :) Tu t'appelles comment ?",
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: "Enchanté, moi c'est Abdou :) Cherche-tu des droides chauds dans ton parsec ?",
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: "Coquin va ! Sinon t'as du poulet ?",
    end: true,
  },
];

const ChatbotComp = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps}  />;
  </ThemeProvider>
);

export default ChatbotComp;