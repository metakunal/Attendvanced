import { Card, Layout, Typography } from "antd";
import { HeaderNavbar } from "../../../components/common/mainMenu";
import { Footer } from "../../../components/common/sharedLayout";
import React from "react";
const { Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
    <Layout className="home layout">
      <HeaderNavbar />
      <Content>
        <Card>

        </Card>
      </Content>
      <Footer />
    </Layout>
  );
};
