import React, { useEffect, useState } from 'react'
import moment, { relativeTimeRounding } from "moment";
import { getAllUsers, deleteUser, downloadFile, getUserFileCount } from '../api/getAPI'
import { SearchOutlined, DeleteFilled, EyeOutlined, StopOutlined, CloseOutlined, CheckOutlined, EditFilled, DownloadOutlined } from '@ant-design/icons';
import { Table, Input, Button } from 'antd'
import { Link } from "react-router-dom";


export default function MyDriveList() {
  const [usersList, setUsersList] = useState([])
  const [userFileCount, setUserFileCount] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllUsers(setUsersList)
    // getUserFileCount()
  }, [setUsersList])

  const onDeleteUser = (user) => {
    deleteUser(user)
    setUsersList(pre => {
      return pre.filter(usersList => usersList._id !== user)
    })
  }

  // const onEditNameItem = (item) => {
  //   console.log('TODO:')
  // }

  // const onDownloadNameItem = (item) => {
  //   // console.log(item)
  //   downloadFile(item)
  // }
  const columns = [

    {
      title: 'Username',
      dataIndex: 'name',
      width: '50%',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search by username'
              value={selectedKeys}
              onChange={(e) => { setSelectedKeys(e.target.value ? [e.target.value] : []); confirm({ closeDropdown: false }) }}
              onPressEnter={() => confirm()}
              onBlur={() => confirm()}
            />
            <Button onClick={() => confirm()} type='primary'>Search</Button>
            <Button onClick={() => clearFilters()} type='danger'>Reset</Button>
          </>
        )
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    // {
    //   title: 'Password',
    //   dataIndex: 'password',
    //   width: '20%',
    //   // sorter: (a, b) => new Date(b.date) - new Date(a.date),
    //   // render: cts => <p>{moment(cts).format('MMMM do YYYY [at] HH:mm [UTC]')}</p>
    // },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '15%',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search by email'
              value={selectedKeys}
              onChange={(e) => { setSelectedKeys(e.target.value ? [e.target.value] : []); confirm({ closeDropdown: false }) }}
              onPressEnter={() => confirm()}
              onBlur={() => confirm()}
            />
            <Button onClick={() => confirm()} type='primary'>Search</Button>
            <Button onClick={() => clearFilters()} type='danger'>Reset</Button>
          </>
        )
      },
      filterIcon: () => <SearchOutlined />,
      onFilter: (value, record) => record.email.toLowerCase().includes(value.toLowerCase()),
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Number of Files',
      dataIndex: '_id',
      // width: '5%',
      render: text => "TEST",
      // render: text => text ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />,
      // render: item => <DownloadOutlined onClick={(e) => onDownloadNameItem(item)} />
    },
    {
      title: 'Storage',
      dataIndex: '_id',
      // width: '5%',
      render: text => "TEST",
      // render: text => text ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />,
      // render: item => <DownloadOutlined onClick={(e) => onDownloadNameItem(item)} />
    },
    {
      title: 'Is Admin?',
      dataIndex: 'isAdmin',
      width: '5%',
      render: text => text ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />,
      // render: item => <DownloadOutlined onClick={(e) => onDownloadNameItem(item)} />
    },
    // {
    //   title: 'Edit',
    //   dataIndex: 'edit',
    //   width: '5%',
    //   render: item => <EditFilled onClick={(e) => onEditNameItem(item)} />
    // },
    {
      title: 'View',
      dataIndex: '_id',
      width: '5%',
      render: text => <Link to={"/userDetails/" + text}><EyeOutlined style={{ color: 'green' }} /></Link>,
      // render: user => <EyeOutlined style={{ color: 'green' }} />
      // render: user => <EyeOutlined style={{ color: 'green' }} onClick={(e) => onDeleteUser(user)} />
    },
    {
      title: 'Is Block?',
      dataIndex: '_id',
      width: '5%',
      render: text => <StopOutlined style={{ color: 'red' }} onClick={(e) => onDeleteUser(text)} />
      // render: user => <EyeOutlined style={{ color: 'green' }} />
      // render: user => <EyeOutlined style={{ color: 'green' }} onClick={(e) => onDeleteUser(user)} />
    },
    {
      title: 'Delete',
      dataIndex: '_id',
      width: '5%',
      render: user => <DeleteFilled style={{ color: 'red' }} onClick={(e) => onDeleteUser(user)} />
    }
  ]
  return (
    <Table
      loading={loading}
      dataSource={usersList}
      columns={columns}
      rowKey='_id'
    />
  )
}