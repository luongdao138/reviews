import React, { useState } from 'react';
import { reviews } from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const { name, id, text, job, image } = reviews[index];

  const handleSurprise = () => {
    let randomIndex = Math.round(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex++;
    }
    setIndex((index) => {
      if (randomIndex > reviews.length - 1) {
        return 0;
      }
      return randomIndex;
    });
  };

  const handlePrevReview = () => {
    setIndex((index) => {
      if (index - 1 < 0) {
        return reviews.length - 1;
      }
      return index - 1;
    });
  };

  const handleNextReview = () => {
    setIndex((index) => {
      if (index + 1 > reviews.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  return (
    <div className='item'>
      <div className='img-wrapper'>
        <img src={image} alt='' />
        <div className='circle'></div>
        <FaQuoteRight className='quote-right' />
      </div>
      <div className='infor-wrapper text-center'>
        <p className='name'>{name}</p>
        <p className='job'>{job}</p>
        <p className='text'>{text}</p>
      </div>
      <span className='action'>
        <FaChevronLeft className='action-arrow' onClick={handlePrevReview} />
        <FaChevronRight className='action-arrow' onClick={handleNextReview} />
      </span>
      <button className='suprise-btn' onClick={handleSurprise}>
        Surprise me
      </button>
    </div>
  );
};

export default Reviews;
