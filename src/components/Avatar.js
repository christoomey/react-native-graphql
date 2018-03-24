import styled from 'styled-components';

const Avatar = styled.Image`
  border-radius: 3px;
  height: ${({small}) => (small ? '50px' : '100px')};
  margin-right: 10px;
  width: ${({small}) => (small ? '50px' : '100px')};
`;

export default Avatar;
