import { useMutation, useQuery, UseQueryResult } from '@umijs/max';

import { getFn, postFn } from '../index';

interface User {
  name: string;
  age: number;
}

export function useQueryUserList(params: any): UseQueryResult<User[]> {
  return useQuery({
    queryKey: ['/api/v1/queryUserList', params],
    queryFn: postFn,
  });
}

export function useQueryUserList2() {
  return useMutation({
    mutationFn: (params: any) => {
      return getFn<User[]>({ queryKey: ['/api/v1/queryUserList', params] });
    },
  });
}

export async function queryUserList() {}
export async function addUser() {}
export async function getUserDetail() {}
export async function modifyUser() {}
export async function deleteUser() {}
