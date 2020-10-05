import api from './utils/client';
import encrypt from './utils/encrypt';
import { ICredentials, TFindUserReponse } from './utils/interfaces';

const findUser = async ({ studentBirth, studentName, schoolCode }: ICredentials) => {
  const { data: userInformation }: TFindUserReponse = await api.post('/v2/findUser', {
    orgCode: schoolCode,
    name: encrypt(studentName),
    birthday: encrypt(studentBirth),
    stdntPNo: null,
    loginType: 'school',
  });

  return userInformation;
};

export default findUser;
