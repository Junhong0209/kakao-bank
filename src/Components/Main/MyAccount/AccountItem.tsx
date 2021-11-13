import KakaoBank from '../../../assets/Image/kakaoBankLogo.png';

import { AccountGet, AccountTransfer, MyAccountBankMoney, MyAccountBankName, MyAccountContent, MyAccountContentImg, MyAccountNumber } from "../Index.style";

const AccountItem = () => {
  return (
    <MyAccountContent>
      <MyAccountContentImg src={KakaoBank} alt='은행 사진' />
      <MyAccountBankName>카카오뱅크</MyAccountBankName>
      <MyAccountNumber>7777-01-5534148</MyAccountNumber>
      <MyAccountBankMoney>39,058원</MyAccountBankMoney>
      <AccountGet>
        <a href='/main' title='가져오러 가기'>가져오기</a>
      </AccountGet>
      <AccountTransfer>
        <a href='/main' title='이체하러 가기'>이체</a>
      </AccountTransfer>
    </MyAccountContent>
  );
};

export default AccountItem;