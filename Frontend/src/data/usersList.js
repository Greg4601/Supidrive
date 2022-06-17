import React, { useEffect, useState } from 'react'
import moment, { relativeTimeRounding } from "moment";
import { getUser, getAllUsers, blockUser, deleteUser, downloadFile, getUserFileCount } from '../api/getAPI'
import { SearchOutlined, DeleteFilled, EyeOutlined, StopOutlined, CloseOutlined, CheckOutlined, EditFilled, DownloadOutlined } from '@ant-design/icons';
import { Table, Input, Button } from 'antd'
import { Link } from "react-router-dom";


export default function MyDriveList() {
  const [usersList, setUsersList] = useState([])
  // const [blockedList, setBlockedList] = useState()
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
    // setBlockedList(user.isBlocked)
    return user.isBlocked
  }
  const onBlocked = async (item, e) => {
    const isBlocked = await userCheckBlocked(item)
    console.log(isBlocked)
    await blockUser(item, !isBlocked)
    window.location.reload()

    // if (!isBlocked) {
    //   e.target.innerHTML = 'unBlock'
    //   e.target.style.color = 'blue'
    // } else {
    //   e.target.innerHTML = 'Block'
    //   e.target.style.color = 'red'
    // }
  }

  console.log(usersList)

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
      title: 'Is Blocked?',
      dataIndex: 'isBlocked',
      width: '5%',
      // render: item => userCheckBlocked(item) ? : <span style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onBlocked(item, e)}>Block</span>
      // render: item => item ? <CheckOutlined style={{ color: 'green' }} /> : <CloseOutlined style={{ color: 'red' }} />,
      render: item => item ? <p style={{ color: 'red' }}>YES</p> : <p style={{ color: 'green' }}>NO</p>,

      // render: item => <span style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onBlocked(item, e)}>{item}</span>
      // render: item => userCheckBlocked(item) ? <span style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onBlocked(item)}>True</span> : <span style={{ color: 'blue', cursor: 'pointer' }} onClick={(e) => onBlocked(item)}>False</span>
      // render: text => <StopOutlined style={{ color: 'red' }} onClick={(e) => onDeleteUser(text)} />
    },
    {
      title: 'Block / unBlock',
      dataIndex: '_id',
      width: '5%',
      // render: item => userCheckBlocked(item) ? : <span style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onBlocked(item, e)}>Block</span>
      render: item => <button style={{ color: 'blue' }} onClick={(e) => onBlocked(item, e)} >Click</button>
      // render: item => item ? <CheckOutlined style={{ color: 'green' }} onClick={(e) => onBlocked(usersList._id, e)} /> : <CloseOutlined style={{ color: 'red' }} onClick={(e) => onBlocked(usersList._id, e)} />,
      // render: item => <span style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onBlocked(item, e)}>{item}</span>
      // render: item => userCheckBlocked(item) ? <span style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => onBlocked(item)}>True</span> : <span style={{ color: 'blue', cursor: 'pointer' }} onClick={(e) => onBlocked(item)}>False</span>
      // render: text => <StopOutlined style={{ color: 'red' }} onClick={(e) => onDeleteUser(text)} />
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