<template>
    <img class="phebo-logo" alt="Phebo Logo" src="/phebologoww.png" />
  </template>
  
  <style>
  .phebo-logo {
    height: 180px;
    width: 300px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
  }
  
  @keyframes turn {
    100% {
      transform: rotateY(0deg);
    }
  }
  </style>
  