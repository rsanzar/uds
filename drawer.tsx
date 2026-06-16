import React from "react";
import styled from "styled-components";

const StyledDetailsspan = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledDetails = styled.p`
  width: 110px;
`;

const StyledIcon = styled.div`
  width: 9.33px;
  height: 9.33px;
  left: 3.33px;
  top: 3.33px;
  position: absolute;
  outline: 1.25px var(--button-disabled-btn-icon-disabled, #C2C0B9) solid;
  outline-offset: -0.63px;
`;

const StyledTextspan = styled.span`
  color: var(--text-text-black, black);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
`;

const StyledText = styled.p`
  min-width: 22px;
`;

const StyledIcon01 = styled.div`
  width: 8px;
  height: 4px;
  left: 4px;
  top: 6px;
  position: absolute;
  outline: 1.25px var(--input-icon-input, #5D5C59) solid;
  outline-offset: -0.63px;
`;

const StyledIcon02 = styled.div`
  width: 9.33px;
  height: 9.33px;
  left: 3.33px;
  top: 3.33px;
  position: absolute;
  outline: 1.25px var(--button-secondary-btn-secondary-icon, #5D5C59) solid;
  outline-offset: -0.63px;
`;

const StyledText01span = styled.span`
  color: var(--text-text-black, black);
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
`;

const StyledText01 = styled.p`
  min-width: 22px;
`;

const StyledIcon03 = styled.div`
  width: 8px;
  height: 4px;
  left: 4px;
  top: 6px;
  position: absolute;
  outline: 1.25px var(--input-icon-input, #5D5C59) solid;
  outline-offset: -0.63px;
`;

const StyledDetails01span = styled.span`
  color: var(--text-text-tertiary, #7D7C75);
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
`;

const StyledArrowleft = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StyledChevrondown = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StyledArrowright = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StyledChevrondown01 = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  overflow: hidden;
`;

const StyledButtons = styled.button`
  padding: 8px;
  background: var(--button-disabled-btn-bg-disabled, #EEEDE6);
  box-shadow: 0px 1px 2px rgba(34, 34, 32, 0.08);
  overflow: hidden;
  border-radius: 8px;
  outline: 1px var(--button-disabled-btn-border-disabled, rgba(34, 34, 32, 0.10)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledPageselector = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  background: var(--input-bg-input, #FBFBF9);
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 6px;
  outline: 1px var(--input-border, rgba(34, 34, 32, 0.15)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  display: flex;
`;

const StyledButtons01 = styled.button`
  padding: 8px;
  background: var(--button-secondary-btn-secondary-bg, #FCFCFC);
  box-shadow: 0px 1px 2px rgba(34, 34, 32, 0.08);
  overflow: hidden;
  border-radius: 8px;
  outline: 1px var(--button-secondary-btn-secondary-border, rgba(34, 34, 32, 0.15)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const StyledPageselector01 = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  background: var(--input-bg-input, #FBFBF9);
  box-shadow: 0px 1px 0px rgba(34, 34, 32, 0.05);
  overflow: hidden;
  border-radius: 6px;
  outline: 1px var(--input-border, rgba(34, 34, 32, 0.15)) solid;
  outline-offset: -1px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  display: flex;
`;

const StyledFrame10 = styled.div`
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const StyledFrame11 = styled.div`
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const StyledContent = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const StyledTemplateTask = styled.div`
  width: 100%;
  max-width: 768px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
`;

export const TemplateTask = () => {
  return (
    <StyledTemplateTask>
      <StyledContent>
        <StyledDetails><StyledDetailsspan>20 opérations</StyledDetailsspan></StyledDetails>
        <StyledFrame10>
          <StyledButtons>
            <StyledArrowleft>
              <StyledIcon />
            </StyledArrowleft>
          </StyledButtons>
          <StyledPageselector>
            <StyledText><StyledTextspan>1 </StyledTextspan></StyledText>
            <StyledChevrondown>
              <StyledIcon01 />
            </StyledChevrondown>
          </StyledPageselector>
          <StyledButtons01>
            <StyledArrowright>
              <StyledIcon02 />
            </StyledArrowright>
          </StyledButtons01>
        </StyledFrame10>
        <StyledFrame11>
          <StyledPageselector01>
            <StyledText01><StyledText01span>12 </StyledText01span></StyledText01>
            <StyledChevrondown01>
              <StyledIcon03 />
            </StyledChevrondown01>
          </StyledPageselector01>
          <div><StyledDetails01span>lignes par page</StyledDetails01span></div>
        </StyledFrame11>
      </StyledContent>
    </StyledTemplateTask>
  );
};
