import React, { useState } from 'react';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import DashboardMenu from '../contents/Dashboard/DashboardMenu';
import '../styles/Forum.css';
import { useNavigate } from 'react-router-dom';


const Forum = () => {
  const forumTopics =  [
    { id: 1, title: 'Bem-vindo', content: 'Seja bem-vindo ao nosso fórum!' },
    {
      id: 2,
      title: 'Dicas',
      content: 'Compartilhe dicas e truques interessantes.'
    },
    {
      id: 3,
      title: 'Empregos',
      content: 'Anúncios de oportunidades de emprego.'
    },
    {
      id: 4,
      title: 'Free-Lances',
      content: 'Ofertas e busca por trabalhos freelance.'
    },
    {
      id: 5,
      title: 'Dúvidas',
      content: 'Tire suas dúvidas sobre o nosso serviço.'
    }
  ]

  const [selectedTopic, setSelectedTopic] = useState({
    id: 0,
    title: "string",
    content: "string"
},);
  const [openDialog, setOpenDialog] = useState(false);

  const handleTopicClick = (topic: React.SetStateAction<{ id: number; title: string; content: string; }>) => {
    setSelectedTopic(topic);
    setOpenDialog(true);
  };

  const handleTopicOpen = (id: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    if(id === 1){
      // eslint-disable-next-line react-hooks/rules-of-hooks
      navigate('/welcome')
    }
  };


  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

   return (
    <div className='forum-container-content'>
      <DashboardMenu />
      <div className='forum-container'>
        <Typography variant='h4' className='forum-heading'>
          Fórum
        </Typography>
        <div className='forum-topics'>
          {forumTopics.map((topic) => (
            <div key={topic.id} className='forum-topic'>
              <div className='topic-details'>
                <div className='topic-title'>{topic.title}</div>
                <div className='topic-content'>{topic.content}</div>
              </div>
              <div className='topic-actions'>
                <button className='forum-button' onClick={() => handleTopicOpen(topic.id)}>
                  Entrar
                </button>
                <button className='forum-button'onClick={() => handleTopicClick(topic)}>
                  Ver Melhores Tópicos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Melhores Tópicos de {selectedTopic && selectedTopic.title}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Forum;
