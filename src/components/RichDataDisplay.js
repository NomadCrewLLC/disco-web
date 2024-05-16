// components/TextContent.js
import React from 'react';

const renderText = (node) => {
  // Checks if the text needs to be bold and italic
  if (node.bold && node.italic) {
    return <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>{node.text}</span>;
  }
  // Checks if the text needs to be bold
  if (node.bold) {
    return <span style={{ fontWeight: 'bold' }}>{node.text}</span>;
  }
  // Checks if the text needs to be italic
  if (node.italic) {
    return <span style={{ fontStyle: 'italic' }}>{node.text}</span>;
  }
  // Return plain text
  return <span>{node.text}</span>;
};

const renderElement = (element) => {
    // console.log('element', element);
  switch (element.type) {
    case 'heading':
      const Tag = `h${element.level}`; // Dynamically choose the heading level
      return <Tag>{element.children.map((child, index) => <React.Fragment key={index}>{renderText(child)}</React.Fragment>)}</Tag>;
    case 'paragraph':
      return element.children.map((child, index) => <React.Fragment key={index}>{renderText(child)}</React.Fragment>);
    default:
      return null;
  }
};

const RichData = (attribute) => {
    // console.log('attribute', attribute);
  if (!attribute || attribute.length === 0) return <p>No content available.</p>;

  return (
    <div>
      {attribute.map((item, index) => (
        <div key={index}>{renderElement(item)}</div>
      ))}
    </div>
  );
};

export default RichData;
