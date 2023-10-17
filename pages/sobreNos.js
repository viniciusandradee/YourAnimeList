"use client"
import React, { Component } from "react";
import axios from 'axios';
import SobreNos from '../components/sobreNos'
import Header from "../components/header"
import Footer from "../components/footer"
import "../CSS/sobreNos.css"

export default function sobreNos() {
    return (
      <>
          <Header/>
          <SobreNos/>
          <Footer/>
      </>
    )
  }
