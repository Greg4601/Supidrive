import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Table, Skeleton } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function UsersList() {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    const [page, setPage] = useState(1);
    var offset = (page * 10) - 10;
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const data = await axios.get(
                "http://localhost:5000/users/"
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
            render: text => <Link to={"/userDetails/" + text}>{text}</Link>,
            sorter: (a, b) => a._id.localeCompare(b._id),
        },
        {
            title: 'Email',
            dataIndex: "email",
            key: "key",
            sorter: (a, b) => a.email.localeCompare(b.email),
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
                return record.email.toLowerCase().includes(value.toLowerCase());
            },
        },
        {
            title: 'Pseudo',
            dataIndex: "pseudo",
            key: "key",
            sorter: (a, b) => a.pseudo.localeCompare(b.pseudo),
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
                return record.pseudo.toLowerCase().includes(value.toLowerCase());
            },
        },
        {
            title: 'Password',
            dataIndex: "password",
            key: "key",
        },
        {
            title: 'Is Admin?',
            dataIndex: "isAdmin",
            key: "key",
            render: text => text ? <p>True</p> : <p>False</p>,
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
                    current: page,
                    pageSize: 10,
                    onChange: (page) => {
                        setPage(page);
                    }
                }} />
        </div>
    );
}