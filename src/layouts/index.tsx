import {Link, Outlet} from 'umi';
import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

import c from './index.less';

const itemsData: MenuProps['items'] = [
    {
        label: <Link to="/">Home</Link>,
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: <Link to="/products">Products</Link>,
        key: 'app',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Tools',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: <Link to="/tools/fecth">UseFetch</Link>,
            },
            // {
            //     type: 'group',
            //     label: 'Item 2',
            //     children: [
            //         {
            //             label: 'Option 3',
            //             key: 'setting:3',
            //         },
            //         {
            //             label: 'Option 4',
            //             key: 'setting:4',
            //         },
            //     ],
            // },
        ],
    },
];

export default function Layout() {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = e => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div className={c.container}>
            <div className={c.menu}>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={itemsData}
            />
            </div>
            <Outlet />
        </div>
    );
}
