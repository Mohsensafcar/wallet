import styled from '$styled';
import { deviceWidth, ns } from '$utils';
import { Highlight, StatelessHighlight } from '$uikit';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Wrap = styled.View`
  flex: 1;
`;

export const HeaderWrap = styled.View`
  align-items: center;
  margin-bottom: ${ns(16)}px;
  padding-horizontal: ${ns(16)}px;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${ns(16)}px;
  margin-bottom: ${ns(28)}px;
`;

export const ExploreButtons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const Info = styled.View`
  align-items: center;
  padding-horizontal: ${ns(32)}px;
`;

export const ExploreWrap = styled.View`
  padding-horizontal: ${ns(16)}px;
`

export const AmountWrapper = styled.View`
  flex: 1;
`;

export const AboutWrapper = styled.View`
  margin-top: ${ns(12)}px;
`;

export const Price = styled.View`
  flex-direction: row;
  margin-top: ${ns(12)}px;
`

export const ActionsContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-bottom: ${ns(20)}px;
`;

export const IconWrapper = styled.View`
  background-color: #0088CC;
  width: ${ns(64)}px;
  height: ${ns(64)}px;
  border-radius: ${ns(64 / 2)}px;
  align-items: center;
  justify-content: center;
  margin-left: ${ns(16)}px;
`;

export const Divider = styled.View`
  height: ${ns(0.5)}px;
  width: ${deviceWidth}px;
  background: rgba(79, 90, 112, 0.24);
  margin-bottom: ${ns(24)}px;
`;


export const FiatInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${ns(2)}px;
`;

export const FiatAmountWrapper = styled.View`
  margin-right: ${ns(4)}px;
`;

export const Actions = styled.View`
  margin-top: ${ns(16)}px;
  flex-direction: row;
  padding-right: ${ns(16)}px;
`;

export const Action = styled(TouchableOpacity).attrs({ activeOpacity: 0.8 })`
  border-radius: ${ns(48 /2)}px;
  background: ${({ theme }) => theme.colors.backgroundTertiary};
  margin-bottom: ${ns(8)}px;
  width: ${ns(44)}px;
  height: ${ns(44)}px;
  align-items: center;
  justify-content: center;
`;

export const ActionWrapper = styled.View<{ isLast?: boolean }>`
  margin-right: ${({ isLast }) => (!isLast ? ns(25.5) : 0)}px;
  align-items: center;
  justify-content: center;
`;

export const ActionLabelWrapper = styled.View`
  margin-top: ${ns(2)}px;
`;