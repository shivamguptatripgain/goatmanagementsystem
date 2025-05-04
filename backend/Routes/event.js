const { 
    createEvent, 
    getAllEvent, 
    deleteEvent, 
    createVillages, 
    getAllVillages, 
    getBeneficiaryDetailsofParticularVillage 
  } = require('../Controllers/event');
  
  const express = require('express');
  const router = express.Router();

  

  // Event Routes
  router.get('/', getAllEvent);
  router.delete('/delete/:id', deleteEvent);
  
  // Village Routes
  router.post('/villages/create', createVillages);
  router.get('/villages', getAllVillages);
  router.delete('/villages/delete/:id', deleteEvent);
  router.get('/villages/:id', getBeneficiaryDetailsofParticularVillage);
  
  module.exports = router;
  