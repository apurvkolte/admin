import React from 'react'
import PageHeader from '../../shared/layout-components/page-header/page-header'
import Seo from '../../shared/layout-components/seo/seo';

const ChatCom = React.lazy(() => import('../../shared/data/chat/chat'), { ssr: false })



const Chat = () => {
  return (
    <>
      <Seo title="Chat" />
      <PageHeader title="Chat" item="Advanced UI" active_item="Chat" />
      <ChatCom />

    </>
  )
}
Chat.layout = "Contentlayout"

export default Chat