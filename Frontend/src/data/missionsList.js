import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Table, Skeleton } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import moment from "moment";

export default function MissionsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [page, setPage] = useState(1);
  var offset = (page*10)-10;
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await axios.get(
        "http://localhost:5000/missions/"
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
        render: text => <Link to={"/missionDetails/" + text}>{text}</Link>,
        sorter: (a, b) => a._id.localeCompare(b._id),
    },
    {
        title: 'Country',
        dataIndex: "country",
        key: "key",
        sorter: (a, b) => a.country.localeCompare(b.country),
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
          return record.country.toLowerCase().includes(value.toLowerCase());
        },
    },
    {
        title: 'Start Date',
        dataIndex: "start_date",
        key: "key",
        render: date => moment(date).format('DD/MM/YYYY'),
        sorter: (a, b) => new Date(a.start_date) - new Date(b.start_date),
    },
    {
        title: 'End Date',
        dataIndex: "end_date",
        key: "key",
        render: date => moment(date).format('DD/MM/YYYY'),
        sorter: (a, b) => new Date(a.end_date) - new Date(b.end_date),
    },
    {
        title: 'Rovers',
        dataIndex: "rovers",
        key: "key",
        sorter: (a, b) => a.rovers.localeCompare(b.rovers),
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
          return record.rovers.toLowerCase().includes(value.toLowerCase());
        },
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