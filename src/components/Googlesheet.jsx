import axios from 'axios';
import config from '../assets/config.json';

const API_KEY = config.API_KEY;
const SHEET_ID = config.SHEET_ID;

export const Googlesheet = async () => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data.values; 
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching sheet data', error);
      throw new Error('The Google Sheet could not be reached. Please wait for the approval try again later.');
    }
  };