
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
} from 'react-native';

//不能区分web和native，
//https://github.com/ant-design/ant-design-mobile/issues/2054
import Button from 'antd-mobile/lib/button';
import WhiteSpace from 'antd-mobile/lib/white-space'
const Home = () => (
    <View>
        <Button>default</Button><WhiteSpace />
        <Button disabled>default disabled</Button><WhiteSpace />

        <Button type="primary">primary</Button><WhiteSpace />
        <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

        <Button type="warning">warning</Button><WhiteSpace />
        <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

        <Button loading>loading button</Button><WhiteSpace />
        <Button icon="check-circle-o">with icon</Button><WhiteSpace />
        <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button>
        <Text>
            我是Home页面
  </Text>
    </View>
)
export default Home;