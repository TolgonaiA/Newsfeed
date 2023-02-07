import React from 'react';
import {IAuthor} from "../models";

interface AuthorProps {
  author: IAuthor
}

const Author = ({author}: AuthorProps) => {
  return (
    <h2 className='md:text-3xl text-emerald-800 text-2xl'>
      {author.firstName + ' ' + author.lastName}
    </h2>
  );
};

export default Author;