// @flow
import * as React from 'react';
import Table from '../../components/Table/index';
import { tableConstants } from '../../components/Table/tableConstant';
export function Users() {
    const handleEdit = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
      }
      const handleDelete = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
      }
      const handleDetails = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
      }

     const dato = [
        {
          "title":"Users",
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
        }];
        

  return (
    <div>
    <Table cols={tableConstants(handleEdit,handleDelete,handleDetails)} data={dato} hoverable/>

    </div>
  );
};