import React from 'react';

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit,handleDelete) => {
  return [
    {
      title: 'Title',
      render: rowData => {
        return <span>{rowData.title}</span>;
      },
    },
    {
      title: 'Category',
      render: rowData => {
        return <span>{rowData.category.title}</span>;
      },
    },
    {
      title: 'Description',
      render: rowData => {
        return <span>{rowData.description}</span>;
      },
    },
  
   
   
    {
      title: 'rates',
      render: rowData => {
        return <span>{rowData.rates}</span>;
      },
    },
    {
      title: 'workStart',
      render: rowData => {
        return <span>{rowData.workStart}</span>;
      },
    },

    {
      title: 'rates',
      render: rowData => {
        return <span>{rowData.rates}</span>;
      },
    },
    {
      title: 'favorites_count',
      render: rowData => {
        return <span>{rowData.favorites_count}</span>;
      },},

       {
      title: 'ratworkEndes',
      render: rowData => {
        return <span>{rowData.raworkEndtes}</span>;
      },
    },
    
    {
      title: 'Action',
      render: rowData => {
        return<div> <button className='btn btn-warning' onClick={handleEdit(rowData)}>Edit</button>
        <button className='btn btn-success' onClick={handleDelete(rowData)}>Delete</button>
        </div>
      },
    },
  ];
};
