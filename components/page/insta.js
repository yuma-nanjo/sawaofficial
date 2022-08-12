import React, { useState, useEffect } from "react";
import axios from "axios";

const Insta = () => {
  const [posted, setPosted] = useState([]);
  const [clickUpdate, setClickUpdate] = useState(false);

  const onClickUpdate = () => {
    setClickUpdate(!clickUpdate);
  };

  useEffect(() => {
    const user_name = "sawa_officialgram"; //ビジネスorクリエイターアカウントの必要あり
    const access_token =
      "EAAUGs0W7K4MBANtA9hgdJfIwZBSIaLeSw8QWEopwV39UbezMdcAEm3uUEq3F3DVZAx586SsjdedmiH6SZBeNi4BghyQYHQS8mXTgabN0nLZB36BtAGIxDakZBPIW0snBCPZClUqGZBMkrZBL512EtsYiZAs8sLsbxLuzO4oG2qKcuCKS9oGV5BzsPbL48KRwDbn4ZD";
    const user_id = "17841402399172207";
    const get_count = 9; //取得したい投稿数
    axios
      .get(
        `https://graph.facebook.com/v12.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
      )
      .then((res) => {
        setPosted(res.data);
      });
  }, [clickUpdate]);

  return (
    <>
      {/*埋め込みたいインスタの情報*/}

      <img src={posted.business_discovery.media.data[0].media_url} alt='instagramImage' />
      <img src={posted.business_discovery.media.data[1].media_url} alt='instagramImage' />
      <button onClick={onClickUpdate}>更新</button>
    </>
  );
};

export default Insta;
