import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Insta() {
  const [posted, setPosted] = useState([]);
  const [clickUpdate, setClickUpdate] = useState(false);

  const onClickUpdate = () => {
    setClickUpdate(!clickUpdate);
  };

  useEffect(() => {
    const user_name = "sawa_officialgram"; //ビジネスorクリエイターアカウントの必要あり
    const access_token = process.env.NEXT_PUBLIC_INSTAGRAMTOKEN;
    const user_id = process.env.NEXT_PUBLIC_INSTAGRAMID;
    const get_count = 9; //取得したい投稿数
    fetch(
      `https://graph.facebook.com/v14.0/${user_id}?fields=business_discovery.username(${user_name}){id,followers_count,media_count,ig_id,media.limit(${get_count}){caption,media_url,like_count}}&access_token=${access_token}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => setPosted(data));
  }, [clickUpdate]);

  return (
    <>
      <button onClick={onClickUpdate}>更新</button>
    </>
  );
}
