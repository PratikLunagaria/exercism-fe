import axios from 'axios';
import {TESTIMONIALS_URL, TRACKS_URL} from "../config";

export const getTestimonials = (params) => axios.get(TESTIMONIALS_URL, {params: params});
export const getTracks = () => axios.get(TRACKS_URL);
