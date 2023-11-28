import Mock from 'mockjs';

const template = {
  'list|1-10': [
    {
      'id|+1': 1,
      name: '@cname',
      nickName: '@cname',
      gender: '@integer(0, 1)',
      age: '@integer(1, 99)',
    },
  ],
};

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.send({
      success: true,
      errorCode: 0,
      data: Mock.mock(template),
    });
  },
};
