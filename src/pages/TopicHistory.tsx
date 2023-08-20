import { useState } from 'react';
import { Typography, Container } from '@mui/material';
import DashboardMenu from '../contents/Dashboard/DashboardMenu';
import '../styles/TopicHistoryPage.css'; 

const topicHistory = [
  {
    id: 1,
    user: 2,
    username: 'Usuário1',
    title: 'Título do Tópico 1',
    content: 'Mensagem interessante do tópico 1. @user',
    replies: ''
  },
  {
    id: 2,
    user: 1,
    username: 'Usuário2',
    title: 'Título do Tópico 2',
    content: 'Mensagem interessante do tópico 2.',
    replies: ''
  },
  {
    id: 1,
    user: 2,
    username: 'Usuário1',
    title: 'Título do Tópico 1',
    content: 'Mensagem interessante do tópico 1. @useer',
    replies: ''
  },
  {
    id: 2,
    user: 1,
    username: 'Usuário2',
    title: 'Título do Tópico 2',
    content: 'Mensagem interessante do tópico 2.',
    replies: ''
  }, {
    id: 1,
    user: 2,
    username: 'Usuário1',
    title: 'Título do Tópico 1',
    content: 'Mensagem interessante do tópico 1. @user',
    replies: ''
  },
  {
    id: 2,
    user: 1,
    username: 'Usuário2',
    title: 'Título do Tópico 2',
    content: 'Mensagem interessante do tópico 2.',
    replies: ''
  }, {
    id: 1,
    user: 2,
    username: 'Usuário1',
    title: 'Título do Tópico 1',
    content: 'Mensagem interessante do tópico 1. @user',
    replies: ''
  },
  {
    id: 2,
    user: 1,
    username: 'Usuário2',
    title: 'Título do Tópico 2',
    content: 'Mensagem interessante do tópico 2.',
    replies: ''
  }, {
    id: 1,
    user: 2,
    username: 'Usuário1',
    title: 'Título do Tópico 1',
    content: 'Mensagem interessante do tópico 1. @user',
    replies: ''
  },
  {
    id: 2,
    user: 1,
    username: 'Usuário2',
    title: 'Título do Tópico 2',
    content: 'Mensagem interessante do tópico 2.',
    replies: ''
  }, {
    id: 1,
    user: 2,
    username: 'Usuário1',
    title: 'Título do Tópico 1',
    content: 'Mensagem interessante do tópico 1. @user',
    replies: ''
  },
  {
    id: 2,
    user: 1,
    username: 'Usuário2',
    title: 'Título do Tópico 2',
    content: 'Mensagem interessante do tópico 2.',
    replies: ''
  }
  // ... outros tópicos
]

const formatMessage = (message: string) => {
  const formattedMessage = message.replace(
    /@([a-zA-Z0-9_]+)/g,
    '<span class="mention">@$1</span>'
  );
  return { __html: formattedMessage };
};

const TopicHistoryPage = () => {
  const [allTopics] = useState(topicHistory);

  const sendReply = (topicId: number, reply: string) => {

  };

  return (
    <div className='topic-history-container-content'>
      <DashboardMenu />
      <Container maxWidth='md' className='topic-history-container'>
        <Typography variant='h4' gutterBottom className='topic-history-heading'>
          Histórico de Tópicos
        </Typography>
        <div className='topic-history-list'>
          {allTopics.map(topic => (
            <div key={topic.id} className='forum-topic'>
              <div className='topic-details'>
                <div className='topic-title'>{topic.title}</div>
                <div
                  className='topic-content'
                  dangerouslySetInnerHTML={formatMessage(topic.content)}
                ></div>
                <div className='topic-user'>Por: {topic.username}</div>
              </div>
              <div className='topic-reply'>
                <div className='reply-content'>
                  <textarea
                    className='reply-input'
                    placeholder='Digite sua resposta...'
                  ></textarea>
                  <button
                    className='reply-button'
                    onClick={() => sendReply(topic.id, 'resposta da mensagem')}
                  >
                    Enviar Resposta
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopicHistoryPage;