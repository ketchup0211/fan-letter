import styled from "styled-components";
import "../fonts.css";

const DetailBanner = styled.div`
  text-align: center;
  padding: 100px 30px 30px;
  margin-bottom: 10px;
`;

const GoHomeBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 30px;
  background-color: white;
  border: 2px solid black;
  border-radius: 180px;
  font-family: GangwonEduPowerExtraBoldA;
  font-size: 20px;
  padding: 10px;
`;

const Title = styled.p`
  font-family: NEXON Lv2 Gothic;
  font-size: 30px;
`;

//  Detail > DetailBody
const TelegramSender = styled.p`
  font-family: NEXON Lv2 Gothic;
  font-size: 20px;
`;
const ModifyField = styled.textarea`
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  border: 2px solid black;
  height: 130px;
  width: 100%;
  resize: none;
  background-color: white;
  &:focus {
    outline-color: #f39009;
    &::placeholder {
      color: transparent;
    }
  }
  font-family: NEXON Lv2 Gothic;
`;

const MessageViewField = styled.p`
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  line-height: 20px;
  background-color: white;
  border: 2px solid black;
  max-width: 650px;
  font-family: NEXON Lv2 Gothic;
`;

const TelegramContainer = styled.div`
  padding: 20px;
  margin: 0px auto;
  width: 600px;
  background-color: #f6ebe2;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.button`
  display: inline;
  flex-basis: 45%;
  height: 35px;
  border: 2px solid black;
  font-family: NEXON Lv2 Gothic;
`;

//  Detail > DetailHeader
export { DetailBanner, GoHomeBtn, Title };

// Detail > DetailBody
export {
  TelegramContainer,
  TelegramSender,
  ModifyField,
  MessageViewField,
  BtnContainer,
  Button,
};
