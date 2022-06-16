import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Table, Skeleton } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from "moment";

export default function RoversList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [page, setPage] = useState(1);
  var offset = (page*10)-10;
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await axios.get(
        "http://localhost:5000/rovers/"
      );
      setFetchedData(data.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const columns = [
    {
        title: 'Id',
        dataIndex: "_id",
        key: "key",
        render: text => <Link to={"/roverDetails/" + text}>{text}</Link>,
        sorter: (a, b) => a._id.localeCompare(b._id),
    },
    {
        title: 'Name',
        dataIndex: "name",
        key: "key",
        sorter: (a, b) => a.name.localeCompare(b.name),
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => {
          return (
            <div>
              <Input
                autoFocus
                placeholder="Type text here"
                value={selectedKeys[0]}
                onChange={(e) => {
                  setSelectedKeys(e.target.value ? [e.target.value] : []);
                  confirm({ closeDropdown: false });
                }}
                onPressEnter={() => {
                  confirm();
                }}
                onBlur={() => {
                  confirm();
                }}
              ></Input>
              <Button
                onClick={() => {
                  confirm();
                }}
                type="primary"
              >
                Search
              </Button>
              <Button
                onClick={() => {
                  clearFilters();
                }}
                type="danger"
              >
                Reset
              </Button>
            </div>
          );
        },
        filterIcon: () => {
          return <SearchOutlined />;
        },
        onFilter: (value, record) => {
          return record.name.toLowerCase().includes(value.toLowerCase());
        },
    },
    {
        title: 'Launch Date',
        dataIndex: "launch_date",
        key: "key",
        render: date => moment(date).format('DD/MM/YYYY'),
        sorter: (a, b) => new Date(a.launch_date) - new Date(b.launch_date),
    },
    {
        title: 'Construction Date',
        dataIndex: "construction_date",
        key: "key",
        render: date => moment(date).format('DD/MM/YYYY'),
        sorter: (a, b) => new Date(a.construction_date) - new Date(b.construction_date),
    },
    {
        title: 'Rover Constructor',
        dataIndex: "rover_constructor",
        key: "key",
        sorter: (a, b) => a.rover_constructor.localeCompare(b.rover_constructor),
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
        }) => {
          return (
            <div>
              <Input
                autoFocus
                placeholder="Type text here"
                value={selectedKeys[0]}
                onChange={(e) => {
                  setSelectedKeys(e.target.value ? [e.target.value] : []);
                  confirm({ closeDropdown: false });
                }}
                onPressEnter={() => {
                  confirm();
                }}
                onBlur={() => {
                  confirm();
                }}
              ></Input>
              <Button
                onClick={() => {
                  confirm();
                }}
                type="primary"
              >
                Search
              </Button>
              <Button
                onClick={() => {
                  clearFilters();
                }}
                type="danger"
              >
                Reset
              </Button>
            </div>
          );
        },
        filterIcon: () => {
          return <SearchOutlined />;
        },
        onFilter: (value, record) => {
          return record.rover_constructor.toLowerCase().includes(value.toLowerCase());
        },
    },
    {
        title: 'Image',
        dataIndex: "image",
        key: "key",
        render: text => <img className="roverImage" src={text} />,
    },
  ];

  while (isLoading) {
    return (
      <Skeleton />
    )
  } 
  return (
    <div>
      <Table
      columns={columns}
      dataSource={fetchedData}
      pagination={{
        current:page,
        pageSize:10,
        onChange:(page)=>{
          setPage(page);
        }
      }} />
    </div>
  );
}