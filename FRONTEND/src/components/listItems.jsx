import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import LayersIcon from '@mui/icons-material/Layers';
import CodeIcon from '@mui/icons-material/Code';

const MainListItems = () => {
  const navigateTo = useNavigate(); // Initialize useHistory

  // Function to handle "Practice" button click
  const handlePracticeClick = () => {
    // Navigate to the '/practice' route
    navigateTo('/practice');
  };

  const handleAddQuestionClick = () => {
    // Navigate to the '/practice' route
    navigateTo('/addquestion');
  };

  const handleDisplayQuestionClick = () => {
    // Navigate to the '/practice' route
    navigateTo('/questionbank');
  };

  const handleCommunityClick = () => {
    // Navigate to the '/practice' route
    navigateTo('/community');
  };

  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={handleCommunityClick}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Community" />
      </ListItemButton>
      <ListItemButton onClick={handleAddQuestionClick}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Questions" />
      </ListItemButton>
      <ListItemButton onClick={handleDisplayQuestionClick}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Question Bank" />
      </ListItemButton>
      {/* "Practice" button */}
      <ListItemButton onClick={handlePracticeClick}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Practice" />
      </ListItemButton>
    </>
  );
};

export default MainListItems;
