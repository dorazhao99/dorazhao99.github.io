import React, { Component, useState } from 'react'
import { Document, Page } from 'react-pdf';

const Resume = props => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { file } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/resume.pdf"/>
    </div>
  );
};

export default Resume;
