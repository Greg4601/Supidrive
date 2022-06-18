import React, { useEffect, useState } from 'react'
import { getUser, getAllUsers, blockUser, deleteUser, getUserFileCount } from '../api/getAPI'
import { SearchOutlined, DeleteFilled, EyeOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
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

  const userCheckBlocked = async (item) => {
    const user = await getUser(item)
    return user.isBlocked
  }
  const onBlocked = async (item, e) => {
    const isBlocked = await userCheckBlocked(item)
    console.log(isBlocked)
    await blockUser(item, !isBlocked)
    window.location.reload()
  }

  console.log(usersList)

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
      render: text => "TEST",
    },
    {
      title: 'Storage',
      dataIndex: '_id',
      render: text => "TEST",
    },
    {
      title: 'Is Admin?',
      dataIndex: 'isAdmin',
      width: '5%',
      render: text => text ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />,
    },
    {
      title: 'View',
      dataIndex: '_id',
      width: '5%',
      render: text => <Link to={"/userDetails/" + text}><EyeOutlined style={{ color: 'green' }} /></Link>,
    },
    {
      title: 'Is Blocked?',
      dataIndex: 'isBlocked',
      width: '5%',
      render: item => item ? <p style={{ color: 'red' }}>YES</p> : <p style={{ color: 'green' }}>NO</p>,
    },
    {
      title: 'Block / unBlock',
      dataIndex: '_id',
      width: '5%',
      render: item => <button style={{ color: 'blue' }} onClick={(e) => onBlocked(item, e)} >Click</button>
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