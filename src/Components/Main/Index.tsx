import AccountList from "src/components/MyAccount/accountList";
import AddAccountFrom from "src/components/Main/addAcountForm";

import { useEffect, useState } from "react";
import { handleGetMyAccount } from "src/lib/api/accont/index.api";

import * as S from 'src/components/Main/index.style';

const Main = ({ history }) => {
  const [myAccountList, setMyAccountList] = useState<[]>();

  useEffect(() => {
    handleGetMyAccount().then((res) => {
      setMyAccountList(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  
  return (
    <>
      <S.IntroMain>
        <S.IntroMainContent>
          <AddAccountFrom history={history} />
          <AccountList myAccountList={myAccountList} history={history} />
        </S.IntroMainContent>
      </S.IntroMain>
    </>
  );
};

export default Main;