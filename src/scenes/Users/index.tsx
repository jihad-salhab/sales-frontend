// Filename - Users.js
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Modal } from 'antd';
import userService from '../../services/users/userService';
import GetAllUserOutput from '../../services/users/dto/getAllUserOutput';
import UpdateUserInput from '../../services/users/dto/updateUserInput';

interface MyTableState {
    allUsers: GetAllUserOutput[];
    deleteModalVisible: boolean;
    recordToDelete: GetAllUserOutput[] ;
    editModalVisible: boolean;
    recordToEdit: UpdateUserInput[] ;
  }
  
export class Users extends React.Component<{}, MyTableState>{
    columns: any = []; // Define the type of columns
    allUsers: any = []; // Define the type of data
    
    constructor(props:any) {
        super(props);
    
        this.state = {
            allUsers :[], // Initialize an empty array to hold the data
            deleteModalVisible: false,
            recordToDelete: [],
            editModalVisible: false,
            recordToEdit: [],
        };
    }
    async componentDidMount() {
        this.allUsers = await userService.getAll();
        this.setState(this.allUsers );
    }

    async delete(record: any) {
        await userService.delete(record.id);
        this.allUsers = this.allUsers.filter((x: GetAllUserOutput) => x.id !== record.id);
    }

    async update(record: any) {
        await userService.update(record);
    }

    showEditModal = (record:[]) => {
        this.setState({
          editModalVisible: true,
          recordToEdit: record,
        });
      };
    
      hideEditModal = () => {
        this.setState({
          editModalVisible: false,
          recordToEdit: [],
        });
      };


    showDeleteModal = (record:[]) => {
        this.setState({
          deleteModalVisible: true,
          recordToDelete: record,
        });
      };
    
      hideDeleteModal = () => {
        this.setState({
          deleteModalVisible: false,
          recordToDelete: [],
        });
      };
      handleDelete = () => {
        const  recordToDelete  = this.state.recordToDelete;
    
        // Implement the delete action here, e.g., send a delete request to an API
        console.log('Delete:', recordToDelete);
        this.delete(recordToDelete);
       // After successful delete, remove the record from the state
        // this.setState((prevState) => ({
        //   allUsers: prevState.allUsers.filter((record:GetAllUserOutput) => record.id !== recordToDelete.id),
        //   deleteModalVisible: false,
        //   recordToDelete: null,
        // }));
      };

      handleEdit = () => {
        const  recordToEdit  = this.state.recordToEdit;
    
        // Implement the delete action here, e.g., send a delete request to an API
        console.log('Delete:', recordToEdit);
        this.update(recordToEdit);
       // After successful delete, remove the record from the state
        // this.setState((prevState) => ({
        //   allUsers: prevState.allUsers.filter((record:GetAllUserOutput) => record.id !== recordToDelete.id),
        //   deleteModalVisible: false,
        //   recordToDelete: null,
        // }));
      };

	public render() {
       
        console.log("this.allUsers");
        console.log(this.allUsers);
        this.columns = [
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
              },
              {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
              },
              {
                title: 'Actions',
                key: 'actions',
                render: (text:any, record:any) => (
                  <span>
                    <Button onClick={() => this.showEditModal(record)}>Edit</Button>
                    <Button onClick={() => this.showDeleteModal(record)}>Delete</Button>
                  </span>
                ),
              }
          ];
		return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={this.allUsers}
                    pagination={false} // Remove pagination if not needed
                />
                <Modal
                    key="delete"
                    title="Confirm Delete"
                    open={this.state.deleteModalVisible}
                    onOk={this.handleDelete}
                    onCancel={this.hideDeleteModal}
                    >
                    <p>Are you sure you want to delete this record?</p>
                </Modal>
                <Modal
                    key="edit"
                    title="Edit User"
                    open={this.state.editModalVisible}
                    onOk={this.handleEdit}
                    onCancel={this.hideEditModal}
                    >
                    <p>Are you sure you want to delete this record?
                        <input type="text"  />
                    </p>
                </Modal>
            </div>
        );
	}
}


export default Users
